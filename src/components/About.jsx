import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import profileImg from "../assets/profile.png";

const stats = [
  { label: "Years Experience", value: 1 },
  { label: "Projects Built", value: 5 },
  { label: "Tech Stacks", value: 3 },
  { label: "Internships", value: 1 },
];

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= value) clearInterval(timer);
    }, 250);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}+</span>;
}

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-24 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="w-64 h-72 sm:w-72 sm:h-80 rounded-2xl p-1.5 bg-accent shadow-xl">
            <div className="relative w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
              <span className="text-5xl font-extrabold text-accent">AH</span>
              <img
  src={profileImg}
  alt="About Abdul Haleem"
  className="absolute inset-0 w-full h-full object-cover object-top"
  onError={(e) => (e.currentTarget.style.display = "none")}
/>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-slate-900">
            About <span className="text-accent">Me</span>
          </h2>
          <h3 className="text-xl font-medium text-slate-700 mt-3">
            Software Engineering Student & Web Developer
          </h3>
          <p className="mt-4 text-slate-600 leading-relaxed">
            I'm Abdul Haleem, a Software Engineering student who loves
            building modern, responsive web applications. I work with React
            on the frontend and Node.js, Express and MongoDB on the backend.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Alongside my studies I do freelance web development, building
            websites for real businesses. My goal is to grow as a Junior
            Full Stack Developer and ship clean, fast and useful products.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-200 bg-white shadow-sm p-4 text-center"
              >
                <div className="text-3xl font-bold text-accent">
                  <Counter value={s.value} />
                </div>
                <div className="text-xs text-slate-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}