import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {}
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-slate-900">
          &lt;Abdul<span className="text-accent">Haleem</span>/&gt;
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="text-slate-700 font-medium hover:text-accent transition-colors"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-accent hover:text-accent transition-colors"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="md:hidden text-2xl text-slate-900"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-white">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-700 font-medium hover:text-accent"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}