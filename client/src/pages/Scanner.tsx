import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { db } from "../firebase";
import { doc, updateDoc, getDoc, increment, collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { Link } from "wouter";

export default function Scanner() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");
  
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [membersList, setMembersList] = useState<any[]>([]);

  // Cek sesi login
  useEffect(() => {
    const sessionAdmin = localStorage.getItem("kanara-admin");
    if (sessionAdmin === "TRUE") {
      setIsAdmin(true);
    }
  }, []);

  // --- LOGIN DENGAN DATABASE FIREBASE ---
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Ambil password dari collection 'settings' -> doc 'admin_access'
      const docRef = doc(db, "settings", "admin_access");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const realPassword = docSnap.data().password;
        
        if (password === realPassword) {
          setIsAdmin(true);
          localStorage.setItem("kanara-admin", "TRUE");
        } else {
          alert("Password Salah! Coba lagi.");
        }
      } else {
        // Fallback kalau lupa bikin database (Jaga-jaga)
        if (password === "OWNER2025") {
          setIsAdmin(true);
          localStorage.setItem("kanara-admin", "TRUE");
          alert("Peringatan: Password database belum disetting, pakai password cadangan.");
        } else {
          alert("Password Salah / Database belum siap.");
        }
      }
    } catch (error) {
      alert("Gagal terhubung ke database. Cek koneksi internet.");
    }
    setLoading(false);
  };

  // --- SETUP KAMERA & DATA ---
  useEffect(() => {
    if (!isAdmin) return;

    const scanner = new Html5QrcodeScanner(
      "reader", { fps: 10, qrbox: { width: 250, height: 250 } }, false
    );
    scanner.render(onScanSuccess, (err) => {});

    function onScanSuccess(decodedText: string) {
      setScanResult(decodedText);
      scanner.clear();
      prosesStampel(decodedText);
    }

    const q = query(collection(db, "members"), orderBy("stamps", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const members: any[] = [];
      querySnapshot.forEach((doc) => {
        members.push({ phone: doc.id, ...doc.data() });
      });
      setMembersList(members);
    });

    return () => {
      scanner.clear().catch(console.error);
      unsubscribe();
    };
  }, [isAdmin]);

  // --- PROSES STAMPEL ---
  const prosesStampel = async (phoneNumber: string) => {
    setLoading(true);
    setMessage(`Memproses nomor: ${phoneNumber}...`);

    try {
      const userRef = doc(db, "members", phoneNumber);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const currentStamps = userSnap.data().stamps || 0;
        
        if (currentStamps >= 10) {
          setMessage("❌ GAGAL: Sudah 10 stampel (Wajib Klaim).");
        } else {
          await updateDoc(userRef, { stamps: increment(1) });
          setMessage(`✅ SUKSES! Stampel ${phoneNumber} jadi ${currentStamps + 1}.`);
        }
      } else {
        setMessage("❌ DATA TIDAK DITEMUKAN (Belum daftar).");
      }
    } catch (error) {
      setMessage("❌ ERROR DATABASE.");
    }
    setLoading(false);
  };

  // --- TAMPILAN LOGIN ---
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm text-center border-4 border-pink-100">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🔒</span>
          </div>
          <h2 className="text-2xl font-bold text-pink-600 mb-2">Admin Area</h2>
          <p className="text-gray-400 mb-6 text-sm">Masukkan sandi khusus owner/terapis</p>
          
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Kata Sandi"
              className="w-full p-4 border-2 border-pink-200 rounded-xl text-center bg-white text-xl focus:border-pink-500 outline-none transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <button 
              disabled={loading}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-bold shadow-lg transition-transform active:scale-95"
            >
              {loading ? "Mengecek..." : "MASUK DASHBOARD"}
            </button>
          </form>
          
          <div className="mt-6">
             <Link href="/"><a className="text-pink-400 text-sm hover:underline">← Kembali ke Halaman Depan</a></Link>
          </div>
        </div>
      </div>
    );
  }

  // --- TAMPILAN SCANNER ---
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 pb-12">
      <div className="bg-white p-4 shadow-sm flex justify-between items-center mb-6 sticky top-0 z-10 border-b border-pink-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">K</div>
          <h1 className="font-bold text-pink-600">Admin Panel</h1>
        </div>
        <button 
          onClick={() => { localStorage.removeItem("kanara-admin"); setIsAdmin(false); }}
          className="text-xs bg-red-50 text-red-500 border border-red-200 px-4 py-2 rounded-full font-bold hover:bg-red-100 transition-colors"
        >
          Keluar
        </button>
      </div>

      <div className="max-w-md mx-auto px-4 space-y-6">
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-pink-100">
          <h2 className="text-center font-bold text-gray-700 mb-4 flex items-center justify-center gap-2">
            <span>📸</span> Scan QR Pelanggan
          </h2>
          <div className="overflow-hidden rounded-2xl border-4 border-pink-50 bg-black">
            {!scanResult && <div id="reader"></div>}
          </div>
          <div className="mt-6 p-4 bg-pink-50 rounded-xl border border-pink-200 text-center">
             {loading ? <p className="animate-pulse text-pink-600 font-bold">⏳ Sedang memproses...</p> : 
              scanResult ? (
               <div>
                 <p className="font-bold text-lg mb-3 text-gray-800">{message}</p>
                 <button onClick={() => window.location.reload()} className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md">Scan Lagi</button>
               </div>
             ) : <p className="text-gray-400 text-sm">Arahkan kamera ke QR Code di HP Pelanggan</p>
             }
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg border border-pink-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg text-gray-700">👥 Data Member</h2>
            <span className="bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full">{membersList.length} Orang</span>
          </div>
          <div className="overflow-hidden rounded-xl border border-pink-100">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-pink-700 uppercase bg-pink-100">
                <tr>
                  <th className="px-4 py-3">No. HP</th>
                  <th className="px-4 py-3 text-center">Stamp</th>
                  <th className="px-4 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {membersList.map((member) => (
                  <tr key={member.phone} className="bg-white border-b border-pink-50 hover:bg-pink-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-700">{member.phone}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center mx-auto">{member.stamps}</div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      {member.stamps >= 10 ? (
                        <span className="text-green-600 font-bold text-xs animate-pulse bg-green-100 px-2 py-1 rounded">KLAIM!</span>
                      ) : (<span className="text-gray-400 text-xs">Aktif</span>)}
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