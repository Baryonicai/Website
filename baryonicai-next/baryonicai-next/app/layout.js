export const metadata = {
  title: "Baryonic — Practical AI, Cloud & DevOps",
  description: "We turn ideas into reliable, scalable systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header className="border-b border-white/10">
          <nav className="container flex items-center justify-between py-5">
            <a href="/" className="text-xl font-semibold tracking-wide">Baryonic</a>
            <div className="flex gap-6 text-sm">
              <a href="/projects" className="hover:text-baryonic-blue">Work</a>
              <a href="/about" className="hover:text-baryonic-blue">About</a>
              <a href="/contact" className="hover:text-baryonic-blue">Contact</a>
            </div>
          </nav>
        </header>
        <main className="container py-12">{children}</main>
        <footer className="container py-10 border-t border-white/10 mt-16 text-sm text-white/60">
          © {new Date().getFullYear()} Baryonic LLC • baryonicai.com
        </footer>
      </body>
    </html>
  );
}
