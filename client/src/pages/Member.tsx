import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import QRCode from "react-qr-code";
import { db } from "../firebase"; // Import koneksi database
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";

export default function Member() {
  const [phone, setPhone] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [stamps, setStamps] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fungsi Login / Daftar
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return alert("Masukkan nomor WA dulu ya Bun!");
    
    setLoading(true);
    const userRef = doc(db, "members", phone); // Cari data berdasarkan No HP

    try {
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        // Kalau sudah pernah daftar, ambil datanya
        setStamps(docSnap.data().stamps || 0);
      } else {
        // Kalau belum ada, buat data baru (Stampel 0)
        await setDoc(userRef, { stamps: 0, joinedAt: new Date() });
        setStamps(0);
      }
      
      // Simpan status login di memori browser biar gak logout kalau di-refresh
      localStorage.setItem("kanara-phone", phone);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
      alert("Gagal koneksi database. Cek internet ya Bun.");
    }
    setLoading(false);
  };

  // Cek Login Otomatis saat dibuka
  useEffect(() => {
    const savedPhone = localStorage.getItem("kanara-phone");
    if (savedPhone) {
      setPhone(savedPhone);
      setIsLoggedIn(true);
    }
  }, []);

  // FITUR CANGGIH: Dengar perubahan data secara Realtime!
  // Begitu terapis scan, stampel di HP pelanggan nambah sendiri.
  useEffect(() => {
    if (isLoggedIn && phone) {
      const unsub = onSnapshot(doc(db, "members", phone), (doc) => {
        if (doc.exists()) {
          setStamps(doc.data().stamps);
        }
      });
      return () => unsub();
    }
  }, [isLoggedIn, phone]);

  // Kalau Belum Login, Tampilkan Form Input No HP
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center text-pink-600 mb-6">Login Member 💖</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Nomor WhatsApp</label>
              <input 
                type="number" 
                placeholder="08xxxxxxxxxx"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-400 outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button 
              disabled={loading}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition-all"
            >
              {loading ? "Mengecek..." : "Masuk / Daftar"}
            </button>
          </form>
          <div className="mt-6 text-center">
             <Link href="/"><a className="text-gray-400 text-sm">Kembali ke Home</a></Link>
          </div>
        </div>
      </div>
    );
  }

  // Kalau Sudah Login, Tampilkan Kartu Member + QR Code
  return (
    <div className="min-h-screen bg-pink-50 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-pink-200">
        
        {/* Header */}
        <div className="bg-pink-500 p-6 text-center text-white relative">
          <h1 className="text-xl font-bold uppercase tracking-wider">Kartu Member Digital</h1>
          <p className="text-pink-100 text-sm">{phone}</p>
          <button 
            onClick={() => {
              localStorage.removeItem("kanara-phone");
              setIsLoggedIn(false);
              setPhone("");
            }}
            className="absolute top-4 right-4 text-xs bg-pink-700 px-2 py-1 rounded"
          >
            Keluar
          </button>
        </div>

        {/* QR Code Area */}
        <div className="p-8 flex flex-col items-center">
          <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 mb-6">
            <QRCode 
              value={phone} // Isi QR Code adalah Nomor HP
              size={180}
              fgColor="#ec4899" // Warna Pink
            />
          </div>
          <p className="text-center text-gray-500 text-sm mb-6">
            Tunjukkan QR Code ini<br/>untuk menambah stampel.
          </p>

          {/* Stampel Grid */}
          <div className="grid grid-cols-5 gap-3 mb-6 w-full">
            {[...Array(10)].map((_, index) => (
              <div 
                key={index}
                className={`aspect-square rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                  index < stamps 
                    ? "bg-pink-400 border-pink-500 shadow-md scale-110" 
                    : "bg-gray-100 border-gray-200"
                }`}
              >
                {index < stamps ? (
                  <span className="text-xl">👣</span>
                ) : (
                  <span className="text-gray-300 text-xs font-bold">{index + 1}</span>
                )}
              </div>
            ))}
          </div>

          <p className="text-gray-600 font-medium text-center">
            Total Stampel: <span className="text-pink-600 text-2xl font-bold">{stamps}</span>
          </p>
        </div>
        
        {/* Tombol Klaim (Hanya muncul jika >= 10) */}
        {stamps >= 10 && (
          <div className="p-4 bg-yellow-50 animate-pulse">
             <button 
               onClick={() => window.open("https://wa.me/6282140496166?text=Halo%20saya%20mau%20klaim%20reward!", "_blank")}
               className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-xl font-bold shadow-lg"
             >
               🎁 KLAIM GRATIS PIJAT SEKARANG!
             </button>
          </div>
        )}

      </div>
    </div>
  );
}