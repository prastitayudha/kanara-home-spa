import React from "react";
import { Link } from "wouter"; 

export default function PriceList() {
  // Data Harga Sesuai Gambar KANARA HOME SPA
  const services = [
    {
      name: 'Massage "Pijat Seluruh Tubuh"',
      desc: 'Pijat relaksasi untuk kebugaran si kecil',
      price0: '40K',
      price1: '45K',
      price3: '50K',
      price5: '55K',
    },
    {
      name: 'Therapy Massage',
      desc: '"Full body dengan accupressure untuk keluhan bapil, kembung, kolik, susah tidur"',
      price0: '40K',
      price1: '50K',
      price3: '55K',
      price5: '60K',
    },
    {
      name: 'Therapy + Uap + Sinar',
      desc: '"Paket Bapil (Batuk Pilek)"',
      price0: '100K',
      price1: '110K',
      price3: '120K',
      price5: '130K',
    },
    {
      name: 'Cukur Gundul',
      desc: 'Khusus bayi',
      price0: '30K',
      price1: '-',
      price3: '-',
      price5: '-',
    },
    {
      name: 'Tindik Newborn',
      desc: 'Khusus bayi baru lahir',
      price0: '35K',
      price1: '-',
      price3: '-',
      price5: '-',
    },
  ];

  // Nomor WA dari gambar (tanpa 0 di depan, ganti 62)
  const waNumber = "6282140496166";
  const waMessage = "Halo Kak, saya mau reservasi Kanara Home Spa";

  return (
    <div className="min-h-screen bg-pink-50 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Tombol Kembali */}
        <div className="mb-6 px-2">
          <Link href="/">
            <a className="inline-flex items-center text-pink-600 font-bold hover:text-pink-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Beranda
            </a>
          </Link>
        </div>

        {/* Header Kartu */}
        <div className="bg-white rounded-t-3xl shadow-lg border-b-4 border-pink-200 overflow-hidden">
          <div className="bg-pink-400 p-8 text-center text-white">
            <h2 className="text-xl font-medium tracking-widest uppercase mb-1">Price List</h2>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">KANARA HOME SPA</h1>
            <p className="text-sm md:text-base font-light bg-pink-500 inline-block px-4 py-1 rounded-full">
              By: Bidan Husna Arina Dhafy, Amd. Keb, CPHCT
            </p>
          </div>

          {/* Tabel Harga Responsive */}
          <div className="p-4 md:p-8">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="bg-pink-100 text-pink-800">
                    <th className="p-4 text-left rounded-tl-lg font-bold border border-pink-200">LAYANAN</th>
                    <th className="p-4 text-center font-bold border border-pink-200 w-24">0-11 Bulan</th>
                    <th className="p-4 text-center font-bold border border-pink-200 w-24">1-2 Tahun</th>
                    <th className="p-4 text-center font-bold border border-pink-200 w-24">3-4 Tahun</th>
                    <th className="p-4 text-center rounded-tr-lg font-bold border border-pink-200 w-24">5 Tahun</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={index} className="odd:bg-white even:bg-pink-50 hover:bg-pink-100 transition-colors">
                      <td className="p-4 border border-pink-100">
                        <div className="font-bold text-gray-800">{service.name}</div>
                        <div className="text-xs text-pink-600 italic mt-1">{service.desc}</div>
                      </td>
                      <td className="p-4 text-center font-bold text-gray-700 border border-pink-100">{service.price0}</td>
                      <td className="p-4 text-center font-bold text-gray-700 border border-pink-100">{service.price1}</td>
                      <td className="p-4 text-center font-bold text-gray-700 border border-pink-100">{service.price3}</td>
                      <td className="p-4 text-center font-bold text-gray-700 border border-pink-100">{service.price5}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center md:hidden">* Geser tabel ke samping untuk melihat harga lengkap</p>
          </div>
        </div>

        {/* Footer Info & Notes */}
        <div className="bg-white rounded-b-3xl shadow-lg mt-1 p-6 md:p-8 border-t border-dashed border-pink-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Kolom Kiri: Notes */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-200 inline-block pb-1">NOTE !!</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Terapi 2 Keluhan: <strong>+ 10K</strong></li>
                <li>Harga belum termasuk Transport (jika lebih dari 5KM)</li>
                <li>Home Service & Booking by Appointment</li>
                <li>Area Pelayanan: <strong>Sonoageng dan sekitarnya</strong></li>
              </ul>
            </div>

            {/* Kolom Kanan: Keunggulan & Kontak */}
            <div className="flex flex-col justify-between">
              <div className="mb-4">
                <h3 className="font-bold text-gray-800 mb-2">Mengapa Memilih KANARA Baby Spa?</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Tenaga terapis tersertifikasi & berpengalaman</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Produk aman dan ramah kulit bayi</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Peralatan steril & higienis</li>
                </ul>
              </div>
              
              <a 
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-center shadow-md transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Booking via WhatsApp
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}