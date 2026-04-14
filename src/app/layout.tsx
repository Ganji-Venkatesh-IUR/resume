// Root layout for NaukrAI - metadata, header, navigation
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NaukrAI - Free ATS Resume Builder for India',
  description: "India's first AI resume builder. Free ATS score. No subscription.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <header className="bg-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-naukrai-primary">NaukrAI</div>
            <div className="flex gap-6">
              <a href="/" className="hover:text-naukrai-primary transition">Home</a>
              <a href="/templates" className="hover:text-naukrai-primary transition">Templates</a>
              <a href="/ats" className="hover:text-naukrai-primary transition">ATS Score</a>
              <a href="/biodata" className="hover:text-naukrai-primary transition">Govt Biodata</a>
            </div>
          </nav>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
