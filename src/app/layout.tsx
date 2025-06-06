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
      lang="en"
      className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen"
    >
      <body className={`${trispace.className} min-h-screen`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Navbar />
          <main className="flex-1 px-2 md:px-20 py-8">
            <section className="flex flex-col md:flex-row md:justify-between gap-8">
              {/* Konten Utama */}
              <div className="flex-1 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-2xl p-8 border border-blue-200">
                {children}
                {/* Tempat untuk komponen RandomNews atau komponen lain */}
              </div>

              {/* Sidebar */}
              <aside className="w-full md:w-80 bg-white/95 rounded-3xl shadow-xl p-7 border border-blue-100 hidden md:block sticky top-28 self-start">
                <h3 className="font-bold mb-5 text-blue-900 text-xl tracking-wide border-b pb-3 border-blue-200 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  Berita Pilihan
                </h3>
                <ul className="space-y-4">
                  <li className="text-base text-blue-900 hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition rounded-lg px-3 py-2 font-medium flex items-center gap-2">
                    <span className="text-blue-400">🔥</span> Trending: Ekonomi
                    Digital Indonesia
                  </li>
                  <li className="text-base text-blue-900 hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition rounded-lg px-3 py-2 font-medium flex items-center gap-2">
                    <span className="text-blue-400"></span> Politik Hari Ini
                  </li>
                  <li className="text-base text-blue-900 hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition rounded-lg px-3 py-2 font-medium flex items-center gap-2">
                    <span className="text-blue-400"></span> Teknologi &amp;
                    Inovasi
                  </li>
                  <li className="text-base text-blue-900 hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition rounded-lg px-3 py-2 font-medium flex items-center gap-2">
                    <span className="text-blue-400"></span> Olahraga Dunia
                  </li>
                  <li className="text-base text-blue-900 hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition rounded-lg px-3 py-2 font-medium flex items-center gap-2">
                    <span className="text-blue-400"></span> Kesehatan &amp;
                    Lifestyle
                  </li>
                </ul>

                {/* Live Update */}
                <div className="mt-8 flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-red-50 to-red-100 border border-red-200 shadow-sm">
                  <span className="flex items-center gap-1 font-semibold text-red-700">
                    <span className="animate-pulse text-red-500 text-base">
                      ●
                    </span>
                    Live Update
                  </span>
                  <span className="text-gray-500 text-xs ml-2">
                    Breaking news setiap{" "}
                    <span className="font-bold text-red-700">jam</span>
                  </span>
                </div>
              </aside>
            </section>
          </main>

          <footer className="w-full text-center py-8 text-sm text-blue-800 mt-12 border-t border-blue-200 bg-gradient-to-r from-blue-100 via-white to-blue-200 shadow-inner rounded-t-3xl">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <span>
                &copy; {new Date().getFullYear()}{" "}
                <span className="font-bold text-blue-900">
                  Archipelago Broadcasting Times
                </span>
              </span>
              <span className="hidden md:inline">|</span>
              <span className="italic text-blue-500">
                Terpercaya, cepat, dan inspiratif.
              </span>
            </div>
            <div className="mt-2 text-[11px] text-blue-400">
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
