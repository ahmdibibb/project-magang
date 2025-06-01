import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email dan password wajib diisi.");
      return;
    }
    setError("");
    // TODO: Implementasi login ke backend di sini
    alert("Login berhasil");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/30">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm border border-blue-100 animate-fade-in"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-blue-700 text-center tracking-wide drop-shadow">
          Selamat Datang 
        </h2>
        {error && (
          <div className="mb-4 text-red-600 text-sm text-center bg-red-50 rounded py-2 px-3 border border-red-200">
            {error}
          </div>
        )}
        <div className="mb-5">
          <label className="block mb-1 text-sm font-semibold text-blue-700">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-blue-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            autoComplete="email"
          />
        </div>
        <div className="mb-7">
          <label className="block mb-1 text-sm font-semibold text-blue-700">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-blue-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg font-bold hover:from-blue-600 hover:to-blue-800 transition shadow"
        >
          Login
        </button>
        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Belum punya akun?</span>{" "}
          <a
            href="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register Woy
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
