// components/Login.tsx
"use client";

import React, { useState } from "react";
// import { useRouter } from "next/navigation"; // Uncomment jika ingin menggunakan useRouter
import { Mail, Lock, LogIn as LogInIcon, UserPlus } from "lucide-react"; 

// Definisi props untuk komponen Login
interface LoginProps {
  onClose: () => void; // Fungsi untuk menutup modal, wajib
  onSuccess?: () => void; // Fungsi opsional yang dipanggil setelah login berhasil
}

const Login: React.FC<LoginProps> = ({ onClose, onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // const router = useRouter(); // Inisialisasi router jika digunakan

  // Fungsi validasi format email
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex yang lebih kuat
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!email.trim() || !password.trim()) {
      setError("Email dan password wajib diisi.");
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Format email tidak valid.");
      setIsLoading(false);
      return;
    }
    
    // Opsional: Validasi panjang password
    if (password.length < 6) { 
      setError("Password minimal harus 6 karakter.");
      setIsLoading(false);
      return;
    }

    try {
      // --- Implementasi Login ke Backend (Contoh Simulasi) ---
      // GANTI DENGAN LOGIKA AUTHENTIKASI NYATA ANDA
      const response = await new Promise((resolve) => setTimeout(() => {
        // Simulasi API call:
        if (email === "user@example.com" && password === "password123") {
          resolve({ success: true, message: "Login berhasil!" });
        } else {
          // Simulasi error dari server
          resolve({ success: false, message: "Email atau password salah." });
        }
      }, 1500)); // Simulasi penundaan 1.5 detik

      // Contoh penggunaan fetch API (Uncomment dan sesuaikan jika Anda sudah punya endpoint backend)
      /*
      const apiResponse = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await apiResponse.json();

      if (apiResponse.ok && data.success) { // Periksa response.ok untuk status HTTP 2xx
        alert(data.message || "Login berhasil!");
        onSuccess?.(); // Panggil callback onSuccess jika ada
        // router.push('/dashboard'); // Contoh redirect ke halaman dashboard setelah login
        onClose(); // Tutup modal setelah login berhasil
      } else {
        setError(data.message || "Terjadi kesalahan saat login. Coba lagi.");
      }
      */

      // Karena ini simulasi, kita pakai logika if/else dari promise di atas:
      if ((response as any).success) {
        alert((response as any).message); 
        onSuccess?.(); 
        // router.push('/dashboard'); 
        onClose(); 
      } else {
        setError((response as any).message);
      }

    } catch (err) {
      console.error("Login error:", err);
      setError("Terjadi masalah jaringan atau server. Coba lagi nanti.");
    } finally {
      setIsLoading(false); 
    }
  };

  // Efek untuk menutup modal saat menekan tombol Escape
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]); // Pastikan efek ini berjalan ulang jika onClose berubah

  // Efek untuk menonaktifkan/mengaktifkan scroll di body saat modal aktif
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    // Backdrop overlay: `fixed inset-0` menutupi seluruh viewport
    // `bg-black/60 backdrop-blur-sm` untuk efek visual
    // `onClick={onClose}` untuk menutup modal saat klik di luar form
    <div
      className="fixed inset-0 flex items-center justify-center z-[100] bg-black/60 backdrop-blur-sm px-4 animate-fade-in"
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit}
        // `stopPropagation` mencegah klik pada form dari menutup modal
        onClick={(e) => e.stopPropagation()} 
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm border border-gray-200 animate-scale-in relative"
      >
        {/* Tombol Close (Penting: type="button" agar tidak submit form) */}
        <button
          type="button" 
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold hover:bg-red-600 transition-colors z-10"
          aria-label="Tutup formulir login"
        >
          ✕
        </button>

        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center tracking-tight">
          Selamat Datang Kembali
        </h2>

        {error && (
          <div className="mb-4 text-red-700 text-sm text-center bg-red-50 rounded-lg py-2 px-3 border border-red-200 transition-opacity duration-300 animate-fade-in">
            {error}
          </div>
        )}

        <div className="mb-5 relative">
          <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-700">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-lg px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-colors duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@contoh.com"
              autoComplete="email"
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="mb-7 relative">
          <label htmlFor="password" className="block mb-1 text-sm font-semibold text-gray-700">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              id="password"
              type="password"
              className="w-full border border-gray-300 rounded-lg px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-colors duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimal 6 karakter"
              autoComplete="current-password"
              disabled={isLoading}
            />
          </div>
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 rounded-lg font-bold transition-all duration-300 shadow-md ${
            isLoading ? "opacity-70 cursor-not-allowed bg-blue-500" : "hover:bg-blue-700 hover:shadow-lg"
          } flex items-center justify-center gap-2`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Memuat...
            </>
          ) : (
            <>
              <LogInIcon size={18} /> Login
            </>
          )}
        </button>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Belum punya akun?</span>{" "}
          <a
            href="/register"
            className="text-blue-600 font-semibold hover:underline flex items-center justify-center gap-1 mt-2"
          >
            <UserPlus size={16} /> Daftar Sekarang
          </a>
          <a
            href="/forgot-password"
            className="block text-blue-500 text-xs mt-3 hover:underline"
          >
            Lupa Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;