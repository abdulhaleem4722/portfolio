import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiVite,
  SiFramer,
} from "react-icons/si";

const skillsData = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Framer Motion", icon: <SiFramer /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "REST APIs", icon: <FaDatabase /> },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Vercel", icon: <SiVercel /> },
  ],
};

const tabs = Object.keys(skillsData);

export default function Skills() {
  const [active, setActive] = useState("Frontend");

  return (
    <section id="skills" className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 text-center">
          My <span className="text-accent">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full border transition-colors ${
                active === tab
                  ? "bg-accent text-white border-accent font-semibold"
                  : "bg-white border-slate-300 text-slate-700 hover:border-accent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-10"
          >
            {skillsData[active].map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white shadow-sm p-6 hover:border-accent hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl text-accent">{skill.icon}</div>
                <span className="text-sm font-medium text-slate-700">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}