import React, { useEffect, useState, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { db } from "../firebase";
import { doc, updateDoc, getDoc, increment, collection, query, orderBy, onSnapshot, deleteDoc } from "firebase/firestore";
import { Link } from "wouter";

export default function Scanner() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCameraRunning, setIsCameraRunning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [membersList, setMembersList] = useState<any[]>([]);

  const scannerRef = useRef<Html5Qrcode | null>(null);
  const isProcessingRef = useRef(false);

  // --- 1. CEK LOGIN ---
  useEffect(() => {
    const sessionAdmin = localStorage.getItem("kanara-admin");
    if (sessionAdmin === "TRUE") setIsAdmin(true);
  }, []);

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const docRef = doc(db, "settings", "admin_access");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists() && password === docSnap.data().password) {
        setIsAdmin(true);
        localStorage.setItem("kanara-admin", "TRUE");
      } else if (password === "OWNER2025") {
        setIsAdmin(true);
        localStorage.setItem("kanara-admin", "TRUE");
      } else {
        alert("Password Salah!");
      }
    } catch (error) {
      alert("Gagal koneksi database.");
    }
    setLoading(false);
  };

  // --- 2. DATA MEMBER ---
  useEffect(() => {
    if (!isAdmin) return;
    const q = query(collection(db, "members"), orderBy("stamps", "desc"));
    const unsubscribe = onSnapshot(q, (qs) => {
      const members: any[] = [];
      qs.forEach((d) => members.push({ phone: d.id, ...d.data() }));
      setMembersList(members);
    });
    return () => unsubscribe();
  }, [isAdmin]);

  // --- 3. KAMERA ---
  const startCamera = () => {
    if (isCameraRunning) return;
    isProcessingRef.current = false;
    setMessage("");
    setScanResult(null);

    const element = document.getElementById("reader");
    if (element) element.innerHTML = "";

    const qrScanner = new Html5Qrcode("reader");
    scannerRef.current = qrScanner;

    qrScanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: { width: 250, height: 250 } },
      (decodedText) => {
        if (isProcessingRef.current === true) return;
        isProcessingRef.current = true;
        stopCamera();
        setScanResult(decodedText);
        prosesStampel(decodedText);
      },
      (err) => {}
    ).then(() => {
      setIsCameraRunning(true);
    }).catch((err) => {
      alert("Gagal Buka Kamera: " + err);
      setIsCameraRunning(false);
    });
  };

  const stopCamera = () => {
    if (scannerRef.current) {
      scannerRef.current.stop().then(() => {
        setIsCameraRunning(false);
        scannerRef.current?.clear();
      }).catch(err => console.error(err));
    }
  };

  const handleReset = () => {
    setScanResult(null);
    setMessage("");
    setIsCameraRunning(false);
  };

  useEffect(() => {
    return () => {
      if (scannerRef.current?.isScanning) scannerRef.current.stop().catch(console.error);
    };
  }, []);

  // --- 4. PROSES OTOMATIS (SCAN) ---
  const prosesStampel = async (phoneNumber: string) => {
    setLoading(true);
    setMessage(`Mengecek ${phoneNumber}...`);
    try {
      const userRef = doc(db, "members", phoneNumber);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const currentStamps = userSnap.data().stamps || 0;
        if (currentStamps >= 10) {
          setMessage("❌ GAGAL: Sudah 10 stampel.");
          alert(`⛔ STOP! Stampel PENUH (10).\nKlaim hadiah dulu.`);
        } else {
          await updateDoc(userRef, { stamps: increment(1) });
          const newTotal = currentStamps + 1;
          setMessage(`✅ BERHASIL! Total: ${newTotal}`);
        }
      } else {
        setMessage("❌ DATA TIDAK DITEMUKAN.");
        alert("❌ Nomor belum terdaftar!");
      }
    } catch (error) {
      setMessage("❌ ERROR DATABASE.");
    }
    setLoading(false);
    isProcessingRef.current = false;
  };

  // --- 5. FITUR KOREKSI MANUAL (BARU!) ---
  const updateManual = async (phone: string, amount: number) => {
    // Tanya konfirmasi dulu biar gak salah klik
    if(!confirm(`Yakin ingin mengubah data ${phone}?`)) return;

    try {
        const userRef = doc(db, "members", phone);
        await updateDoc(userRef, { stamps: increment(amount) });
    } catch (error) {
        alert("Gagal update data.");
    }
  };

  const hapusMember = async (phone: string) => {
      const password = prompt("Masukkan Password Admin untuk menghapus data:");
      if (password === "OWNER2025") { // Proteksi ganda
          try {
              await deleteDoc(doc(db, "members", phone));
              alert(`Data ${phone} berhasil dihapus.`);
          } catch (error) {
              alert("Gagal menghapus.");
          }
      } else {
          alert("Password salah! Batal menghapus.");
      }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm text-center border-4 border-pink-100">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-3xl">🔒</span></div>
          <h2 className="text-2xl font-bold text-pink-600 mb-2">Admin Area</h2>
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <input type="password" placeholder="Kata Sandi" className="w-full p-4 border-2 border-pink-200 rounded-xl text-center text-xl outline-none" value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
            <button disabled={loading} className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-bold shadow-lg">{loading ? "Mengecek..." : "MASUK"}</button>
          </form>
          <div className="mt-6"><Link href="/"><a className="text-pink-400 text-sm">Kembali</a></Link></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 pb-12">
      <style>{`
        #reader video { width: 100% !important; height: 100% !important; object-fit: cover !important; border-radius: 1rem; }
      `}</style>

      <div className="bg-white p-4 shadow-sm flex justify-between items-center mb-6 sticky top-0 z-10">
        <h1 className="font-bold text-pink-600">Admin Panel</h1>
        <button onClick={() => { localStorage.removeItem("kanara-admin"); setIsAdmin(false); }} className="text-xs bg-red-50 text-red-500 px-4 py-2 rounded-full font-bold">Keluar</button>
      </div>

      <div className="max-w-md mx-auto px-4 space-y-6">
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-pink-100 text-center">
          <h2 className="font-bold text-gray-700 mb-4">📸 Scan QR Pelanggan</h2>
          <div className="overflow-hidden rounded-2xl bg-gray-100 relative h-[300px] w-full border-2 border-dashed border-gray-300">
            <div id="reader" className="w-full h-full absolute inset-0 z-10"></div>
            {!isCameraRunning && !scanResult && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gray-50/50">
                <button onClick={startCamera} className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold shadow-xl animate-bounce flex items-center gap-2"><span>📹</span> BUKA KAMERA</button>
                <p className="text-xs text-gray-500 mt-3 font-medium bg-white/80 px-2 py-1 rounded">Klik untuk mulai scan</p>
              </div>
            )}
            {scanResult && (
               <div className="absolute inset-0 z-30 bg-white/95 flex flex-col items-center justify-center p-4 transition-all">
                  <div className="text-6xl mb-3">✅</div>
                  <p className="font-bold text-gray-800 text-lg">Scan Berhasil!</p>
                  <p className="text-sm text-gray-500 mb-6 bg-gray-100 px-3 py-1 rounded-full font-mono">{scanResult}</p>
                  <button onClick={handleReset} className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transform active:scale-95 transition-all">SCAN LAGI</button>
               </div>
            )}
          </div>
          <div className="mt-4 p-4 min-h-[60px] flex items-center justify-center">
             {loading ? (<p className="text-pink-600 font-bold animate-pulse">⏳ Memproses database...</p>) : message ? (<p className={`font-bold text-lg ${message.includes("GAGAL") ? "text-red-500" : "text-green-600"}`}>{message}</p>) : (<p className="text-gray-400 text-sm">Siap memindai...</p>)}
          </div>
        </div>

        {/* --- TABEL DENGAN FITUR KOREKSI --- */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-pink-100">
           <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg text-gray-700">👥 Data Member</h2>
            <span className="bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full">{membersList.length}</span>
          </div>
          <div className="overflow-x-auto rounded-xl border border-pink-100">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-pink-700 uppercase bg-pink-100">
                <tr>
                    <th className="px-4 py-3">No. HP</th>
                    <th className="px-4 py-3 text-center">Stamp</th>
                    <th className="px-4 py-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {membersList.map((member) => (
                  <tr key={member.phone} className="bg-white border-b border-pink-50">
                    <td className="px-4 py-3 font-medium text-gray-700">{member.phone}</td>
                    <td className="px-4 py-3 text-center">
                        <div className="flex items-center justify-center gap-2">
                            {/* Tombol Kurang */}
                            <button 
                                onClick={() => updateManual(member.phone, -1)}
                                className="w-6 h-6 bg-gray-200 hover:bg-red-200 text-gray-600 rounded-full flex items-center justify-center font-bold"
                                disabled={member.stamps <= 0}
                            >-</button>
                            
                            <span className="font-bold text-pink-600 w-4 text-center">{member.stamps}</span>
                            
                            {/* Tombol Tambah */}
                            <button 
                                onClick={() => updateManual(member.phone, 1)}
                                className="w-6 h-6 bg-gray-200 hover:bg-green-200 text-gray-600 rounded-full flex items-center justify-center font-bold"
                                disabled={member.stamps >= 10}
                            >+</button>
                        </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                        <button 
                            onClick={() => hapusMember(member.phone)}
                            className="text-xs text-red-400 hover:text-red-600 underline"
                        >
                            Hapus
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}