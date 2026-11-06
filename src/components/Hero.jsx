import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/profile.png";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Frontend Developer",
  "Freelance Web Developer",
];

function useTyping(words, speed = 90, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1),
          );
        },
        deleting ? speed / 2 : speed,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/abdulhaleem4722",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/abdul-haleem-bhayo-895717351",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:abdulhaleem47222@gmail.com",
    label: "Email",
  },
];

export default function Hero() {
  const typed = useTyping(roles);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-slate-700">
            Hello, It's Me
          </h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mt-2">
            Abdul Haleem
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-3 text-slate-700">
            I'm a{" "}
            <span className="text-accent">
              {typed}
              <span className="animate-pulse">|</span>
            </span>
          </h2>
          <p className="mt-5 text-slate-600 max-w-lg">
            I build fast, responsive and user-focused web applications, from the
            frontend to the backend.
          </p>

          <div className="flex gap-4 mt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-accent text-accent text-xl hover:bg-accent hover:text-white transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-colors"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1.5 bg-accent shadow-[0_20px_60px_rgba(37,99,235,0.3)]">
            <div className="relative w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <span className="text-6xl font-extrabold text-accent">AH</span>
              <img
                src={profileImg}
                alt="Abdul Haleem"
                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
