export const metadata = { title: "Contact — Baryonic" };

export default function Contact() {
  return (
    <section className="max-w-2xl space-y-6">
      <header>
        <h1 className="text-3xl md:text-4xl font-bold">Get in touch</h1>
        <p className="text-white/70 mt-2">Reach out for projects, collaborations, or opportunities.</p>
      </header>
      <div className="card p-6 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-white/60">Email:</span>
          <a className="link" href="mailto:Impreetisingh14@gmail.com">Impreetisingh14@gmail.com</a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white/60">GitHub:</span>
          <a className="link" href="https://github.com/Preeti-github29" target="_blank" rel="noreferrer">github.com/Preeti-github29</a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white/60">Phone:</span>
          <span>+1 (470) 920-3737</span>
        </div>
      </div>
    </section>
  );
}
