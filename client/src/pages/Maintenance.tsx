import React from "react";
import { Link } from "wouter";

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4 text-center">
      
      {/* Ikon/Gambar */}
      <div className="bg-white p-8 rounded-full shadow-xl mb-8 animate-bounce">
        <span className="text-6xl">🚧</span>
      </div>

      {/* Teks Utama */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Toko Sedang Disiapkan
      </h1>
      
      <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
        Kami sedang membangun Nara Baby Boutique by kanara agar Bunda bisa belanja dengan nyaman. Tunggu tanggal mainnya ya!
      </p>

      {/* Tombol Kembali */}
      <Link href="/">
        <a className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105">
          ← Kembali ke Home
        </a>
      </Link>

    </div>
  );
}