import { motion } from "framer-motion";
import { FaLaptopCode, FaReact, FaServer } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Development",
    text: "Complete web applications from database to user interface, built with clean and maintainable code.",
  },
  {
    icon: <FaReact />,
    title: "React Frontends",
    text: "Fast, responsive and good-looking websites for shops and businesses, with reusable components and smooth interactions.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    text: "REST APIs with Node.js, Express and MongoDB, including authentication and secure data handling.",
  },
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 text-center">
          My <span className="text-accent">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 text-center hover:border-accent hover:-translate-y-2 hover:shadow-lg transition-all"
            >
              <div className="text-5xl text-accent flex justify-center">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mt-5">
                {s.title}
              </h3>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}