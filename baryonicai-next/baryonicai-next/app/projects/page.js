export const metadata = { title: "Work — Baryonic" };

const experiences = [
  {
    company: "Bluspire Technologies",
    title: "Software Developer",
    duration: "Oct 2024 - Present",
    bullets: [
      "Developed and maintained microservices using Spring Boot, RESTful APIs, and TypeScript, improving scalability and performance.",
      "Built reusable React components, reducing bugs by 40% and enhancing UI speed.",
      "Optimized MySQL and MSSQL queries, improving database performance by 15%.",
      "Created interactive Tableau dashboards for stakeholders.",
    ],
  },
  {
    company: "University of Georgia",
    title: "Graduate Assistant",
    duration: "Aug 2022 – May 2024",
    bullets: [
      "Taught Theory of Computation; guided students through complex concepts.",
      "Assisted in data collection, ETL processes using AWS Glue, and created visualizations.",
      "Contributed to COVID-19 forecasting and supported accessibility evaluations.",
    ],
  },
  {
    company: "Mphasis",
    title: "Associate Software Engineer",
    duration: "Mar 2020 – Dec 2021",
    bullets: [
      "Built ETL pipelines for POS system data.",
      "Automated reporting workflows, reducing manual work by 75%.",
      "Configured ServiceNow modules and optimized ticket resolution time by 40%.",
      "Led SAP HANA migration planning and handheld upgrade projects.",
    ],
  },
  {
    company: "Mphasis",
    title: "Technical Support",
    duration: "Feb 2019 – Feb 2020",
    bullets: [
      "Resolved CRM and retail platform incidents via ServiceNow.",
      "Debugged SQL queries and created performance dashboards.",
      "Maintained a knowledge base and improved SLA compliance.",
    ],
  },
];

const projects = [
  { title: "Fault Tolerant System in Mobile Robots", tech: "Python, Matplotlib", url: "https://github.com/Preeti-github29/Fault-Tolerant-System-in-Mobile-Robots" },
  { title: "Traceroute with Graph Output", tech: "Python3, JSON", url: "https://github.com/Preeti-github29/Traceroute_with_graph_output" },
  { title: "HTTP Downloader", tech: "Python3, JSON", url: "https://github.com/Preeti-github29/Http%20downloader" },
  { title: "DNS Forwarder", tech: "Python", url: "https://github.com/Preeti-github29/DNS_forwarder" },
  { title: "Book Recommender System", tech: "Python, Pandas, Scikit-learn, Matplotlib, Numpy", url: "https://github.com/Preeti-github29/Book-Recommender-system" },
];

export default function Work() {
  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Professional Experience</h1>
        <p className="text-white/70">Selected roles and impact highlights</p>
      </header>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <article key={idx} className="card p-6">
            <h3 className="text-xl font-semibold">
              {exp.company} — {exp.title}
              <span className="text-sm text-white/60 ml-2">({exp.duration})</span>
            </h3>
            <ul className="mt-4 list-disc pl-6 space-y-1 text-white/80">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <header className="space-y-2">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-white/70">Open-source and academic work</p>
      </header>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noreferrer" className="card p-6 block hover:scale-[1.01] transition">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-white/70 mt-1"><strong className="text-white">Tech:</strong> {p.tech}</p>
            <p className="text-baryonic-teal mt-3 underline underline-offset-4">View Project →</p>
          </a>
        ))}
      </div>
    </section>
  );
}
