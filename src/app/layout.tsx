// app/layout.tsx
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Trispace } from "next/font/google";

const trispace = Trispace({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ABT",
  description: "news for you where you can find everything what you need",
  icons: {
    icon: [
      { url: "/img/favicon-32x32.png", sizes: "32x32" },
      { url: "/img/favicon-16x-16.png", sizes: "16x16" },
    ],
    apple: {
      url: "/img/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/img/site.webmanifest",
  openGraph: {
    title: "ABT",
    description: "news for you where you can find everything what you need",
    type: "article",
    authors: "Ahmad Julaib",
  },
  keywords: ["ABT", "News", "News about everything"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id" // Mengubah lang ke id untuk bahasa Indonesia
      className="bg-gray-50 min-h-screen" 
    >
      <body className={`${trispace.className} min-h-screen antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Navbar />
          <main className="flex-1 px-4 md:px-20 py-10">
            <section className="flex flex-col md:flex-row md:justify-between gap-10">
              {/* Main Content Area */}
              <div className="flex-1 space-y-10">
                {/* Featured Article Section */}
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:scale-[1.005] active:scale-[0.99] cursor-pointer">
                  <h2 className="text-3xl font-extrabold text-gray-800 mb-4 tracking-tight">
                    Berita Utama: <span className="text-blue-600">Masa Depan AI di Asia Tenggara</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    Analisis mendalam tentang bagaimana kecerdasan buatan membentuk lanskap ekonomi dan kehidupan sehari-hari di seluruh wilayah. Temukan wawasan utama dan tren mendatang.
                  </p>
                  <a href="#" className="inline-flex items-center text-blue-700 font-semibold group">
                    Baca Selengkapnya
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>

                {/* --- The Primary Content Area ({children}) --- */}
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 min-h-[400px] flex flex-col items-center justify-center text-gray-500 italic text-xl">
                  {children}
                  {!children && (
                    <div className="text-center">
                      <p className="mb-2">Konten utama Anda akan ditampilkan di sini.</p>
                      <p className="text-base text-gray-400">Navigasi atau pilih artikel untuk melihat isinya.</p>
                    </div>
                  )}
                </div>

                {/* Example News Grid Section */}
                <div>
                  <h3 className="font-bold mb-6 text-gray-800 text-2xl tracking-wide border-b pb-3 border-gray-300 flex items-center gap-2">
                    <span className="inline-block w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                    Artikel Terbaru
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example News Card 1 */}
                    <div className="group bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Tren Pasar Global</h4>
                      <p className="text-gray-600 text-sm">Analisis iklim ekonomi global saat ini dan dampaknya pada pasar berkembang.</p>
                      <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium text-sm">Baca Selengkapnya &rarr;</a>
                    </div>

                    {/* Example News Card 2 */}
                    <div className="group bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Inovasi Energi Terbarukan</h4>
                      <p className="text-gray-600 text-sm">Mengeksplorasi terobosan terbaru dalam teknologi surya, angin, dan panas bumi.</p>
                      <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium text-sm">Baca Selengkapnya &rarr;</a>
                    </div>

                    {/* Example News Card 3 */}
                    <div className="group bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Festival Budaya Dunia</h4>
                      <p className="text-gray-600 text-sm">Melihat tradisi dan perayaan unik dari berbagai penjuru dunia.</p>
                      <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium text-sm">Baca Selengkapnya &rarr;</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Refined Sidebar --- */}
              <aside className="w-full md:w-80 bg-white rounded-3xl shadow-xl p-7 border border-gray-200 hidden md:block sticky top-28 self-start h-fit overflow-hidden">
                <h3 className="font-bold mb-5 text-gray-800 text-xl tracking-wide border-b pb-3 border-gray-300">
                  Kategori Utama
                </h3>
                <ul className="space-y-2">
                  <li className="text-base text-gray-700 hover:text-blue-700 cursor-pointer transition-all duration-200 transform hover:translate-x-1 px-3 py-2 -ml-3 rounded-lg flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-600 transition-colors"></span>
                    Ekonomi & Bisnis
                  </li>
                  <li className="text-base text-gray-700 hover:text-blue-700 cursor-pointer transition-all duration-200 transform hover:translate-x-1 px-3 py-2 -ml-3 rounded-lg flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-600 transition-colors"></span>
                    Politik Nasional
                  </li>
                  <li className="text-base text-gray-700 hover:text-blue-700 cursor-pointer transition-all duration-200 transform hover:translate-x-1 px-3 py-2 -ml-3 rounded-lg flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-600 transition-colors"></span>
                    Teknologi & Inovasi
                  </li>
                  <li className="text-base text-gray-700 hover:text-blue-700 cursor-pointer transition-all duration-200 transform hover:translate-x-1 px-3 py-2 -ml-3 rounded-lg flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-600 transition-colors"></span>
                    Olahraga Internasional
                  </li>
                  <li className="text-base text-gray-700 hover:text-blue-700 cursor-pointer transition-all duration-200 transform hover:translate-x-1 px-3 py-2 -ml-3 rounded-lg flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-600 transition-colors"></span>
                    Gaya Hidup & Kesehatan
                  </li>
                </ul>

                {/* Popular Articles Section */}
                <h3 className="font-bold mt-8 mb-5 text-gray-800 text-xl tracking-wide border-b pb-3 border-gray-300">
                  Artikel Populer
                </h3>
                <ul className="space-y-4">
                    <li className="group cursor-pointer">
                        <a href="#" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                            <p className="font-semibold text-sm leading-snug group-hover:underline">Dampak Kebijakan Fiskal Terhadap Inflasi Global 2025</p>
                            <p className="text-xs text-gray-500 mt-1">Ekonomi • 2 jam lalu</p>
                        </a>
                    </li>
                    <li className="group cursor-pointer">
                        <a href="#" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                            <p className="font-semibold text-sm leading-snug group-hover:underline">Terobosan Medis: Vaksin Malaria Generasi Baru</p>
                            <p className="text-xs text-gray-500 mt-1">Kesehatan • 1 hari lalu</p>
                        </a>
                    </li>
                    <li className="group cursor-pointer">
                        <a href="#" className="block text-gray-700 hover:text-blue-700 transition-colors duration-200">
                            <p className="font-semibold text-sm leading-snug group-hover:underline">Tren Esports di Asia Tenggara dan Potensinya</p>
                            <p className="text-xs text-gray-500 mt-1">Olahraga • 3 hari lalu</p>
                        </a>
                    </li>
                </ul>

                {/* Live Update */}
                <div className="mt-8 flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 shadow-sm">
                  <span className="flex items-center gap-1 font-semibold text-red-600">
                    <span className="animate-pulse text-red-500 text-lg">
                      ●
                    </span>
                    Berita Terkini
                  </span>
                  <span className="text-gray-500 text-xs ml-2">
                    Update setiap{" "}
                    <span className="font-bold text-red-600">jam</span>
                  </span>
                </div>
              </aside>
            </section>
          </main>

          <footer className="w-full text-center py-8 text-sm text-gray-700 mt-12 border-t border-gray-200 bg-gray-100 shadow-inner rounded-t-3xl">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <span>
                &copy; {new Date().getFullYear()}{" "}
                <span className="font-bold text-gray-800">
                  Archipelago Broadcasting Times
                </span>
              </span>
              <span className="hidden md:inline">|</span>
              <span className="italic text-gray-600">
                Terpercaya, cepat, dan inspiratif.
              </span>
            </div>
            <div className="mt-2 text-[11px] text-gray-400">
              Powered by{" "}
              <span className="font-semibold text-blue-600">Next.js</span> &amp;{" "}
              <span className="font-semibold text-blue-600">Tailwind CSS</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}