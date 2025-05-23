import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Trispace } from "next/font/google";
import { title } from "process";
import Navbar from "@/components/Navbar";

const trispace = Trispace({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AJ News",
  description: "news for you where you can find everything what you need",
  icons: {
    icon: [
      { url: "/img/favicon-32x32.png", sizes: "32x32" },
      { url: "/img/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: {
      url: "/img/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/img/site.webmanifest",
  openGraph: {
    title: "AJ News",
    description: "news for you where you can find everything what you need",
    type: "article",
    authors: "Ahmad Julaib",
  },
  keywords: ["AJ News", "News", "News about everything"],
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
      <body className={trispace.className + " min-h-screen"}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Navbar />
          <main className="flex-1 px-2 md:px-20 py-8">
            <section className="flex flex-col md:flex-row md:justify-between gap-8">
              <div className="flex-1 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-xl p-6 border border-blue-200">
                {children}
                {/* RandomNews */}
              </div>
              {/* Sidebar */}
              <aside className="w-full md:w-80 bg-gradient-to-br from-blue-200 via-white to-blue-300 rounded-2xl shadow-lg p-6 border border-blue-200 hidden md:block">
                <h3 className="font-bold mb-4 text-blue-800 text-lg tracking-wide border-b pb-2 border-blue-300 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                  Berita Pilihan
                </h3>
                <ul className="space-y-3">
                  <li className="text-sm text-blue-900 hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition rounded px-2 py-1">
                    # Trending: Ekonomi Digital Indonesia
                  </li>
                  <li className="text-sm text-blue-900 hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition rounded px-2 py-1">
                    # Politik Hari Ini
                  </li>
                  <li className="text-sm text-blue-900 hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition rounded px-2 py-1">
                    # Teknologi & Inovasi
                  </li>
                  <li className="text-sm text-blue-900 hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition rounded px-2 py-1">
                    # Olahraga Dunia
                  </li>
                  <li className="text-sm text-blue-900 hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition rounded px-2 py-1">
                    # Kesehatan & Lifestyle
                  </li>
                </ul>
                <div className="mt-6 text-xs text-blue-700 bg-blue-50 rounded px-3 py-2 border border-blue-100 flex items-center gap-2">
                  <span className="font-semibold">Live Update</span>
                  <span className="animate-pulse text-green-600 text-lg">
                    ●
                  </span>
                  <span className="text-gray-500">
                    Breaking news setiap jam!
                  </span>
                </div>
              </aside>
            </section>
          </main>
          <footer className="w-full text-center py-6 text-xs text-blue-700 mt-8 border-t border-blue-100 bg-gradient-to-r from-blue-50 via-white to-blue-100">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2">
              <span>
                &copy; {new Date().getFullYear()}{" "}
                <span className="font-semibold text-blue-900">
                  Archipelago Broadcasting Times
                </span>
              </span>
              <span className="hidden md:inline">|</span>
              <span className="italic text-blue-500">
                Terpercaya, cepat, dan inspiratif.
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
