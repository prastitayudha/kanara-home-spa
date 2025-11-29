import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "client", // Memberitahu Vite bahwa kodingan ada di folder client
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"), // Agar simbol @ bisa dipakai
    },
  },
  build: {
    outDir: "../dist", // Hasil masakan ditaruh di folder luar (dist)
    emptyOutDir: true, // Bersihkan piring dulu sebelum masak
  },
});