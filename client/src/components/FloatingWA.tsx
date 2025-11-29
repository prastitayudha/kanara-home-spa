import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Kita pakai ikon dari library

export default function FloatingWA() {
  // GANTI NOMOR HP DI SINI (Format: 628...)
  const phoneNumber = "6282140496166"; 
  const message = "Halo Kanara Home Spa, saya mau tanya paket perawatan bayi...";

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-2xl transition-all transform hover:scale-110 hover:-translate-y-1 group"
      aria-label="Chat WhatsApp"
    >
      {/* Ikon WA Besar */}
      <FaWhatsapp className="text-3xl" />
      
      {/* Teks (Akan muncul/hilang saat di-hover di layar besar, atau selalu ada) */}
      <span className="font-bold text-sm hidden md:block group-hover:block">
        Hubungi Kami
      </span>
      
      {/* Titik Notifikasi Merah (Biar menarik perhatian) */}
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce"></span>
    </a>
  );
}