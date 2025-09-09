export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <p className="text-baryonic-teal text-sm font-semibold tracking-widest">BARYONIC</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Practical AI, Cloud & DevOps
        </h1>
        <p className="text-white/80">
          Hi there! I'm Preeti Kumari — a Software Engineer with a Master’s in Computer Science and 4+ years of experience
          designing efficient systems for enterprise and retail environments. Based in Atlanta, GA — open to new opportunities
          and collaborations. I love to paint my imagination in the form of art.
        </p>
        <div className="flex gap-4">
          <a href="/projects" className="px-5 py-3 rounded-xl bg-baryonic-blue text-white font-medium">See Work</a>
          <a href="/contact" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10">Contact</a>
        </div>
      </div>
      <div className="card p-8">
        <h3 className="text-xl font-semibold mb-4">What we do</h3>
        <ul className="space-y-2 text-white/80">
          <li>• CI/CD automation & platform engineering</li>
          <li>• Cloud cost & performance optimization</li>
          <li>• Data pipelines & analytics</li>
          <li>• AI/ML prototyping for practical outcomes</li>
        </ul>
      </div>
    </section>
  );
}
