import { motion } from "framer-motion";

const experiences = [
  {
    period: "Add dates here",
    type: "Internship",
    role: "Frontend Developer Intern",
    company: "DeveloperHub Corporation · Remote",
    description:
      "Completed a remote internship working on frontend development, building responsive user interfaces and working with real project tasks.",
    tech: ["React", "JavaScript", "HTML", "CSS", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 text-center">
          My <span className="text-accent">Experience</span>
        </h2>

        <div className="mt-12 border-l-2 border-accent/40 pl-8 space-y-10">
          {experiences.map((e) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-accent ring-4 ring-accent/20" />

              <p className="text-sm font-medium text-accent">
                {e.period} · {e.type}
              </p>
              <h3 className="text-2xl font-semibold text-slate-900 mt-1">
                {e.role}
              </h3>
              <p className="text-slate-700">{e.company}</p>
              <p className="text-slate-600 mt-3 leading-relaxed">
                {e.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {e.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}