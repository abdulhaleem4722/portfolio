import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import shishamImg from "../assets/shisma-dev.png";
import pingTalkImg from "../assets/ping-talk.png";
import cosmeticShopImg from "../assets/cosmetic-shop.png";
import lightControl from "../assets/light-control.png";
import laserShield from "../assets/laser-shield.png";
import LaptopShop from "../assets/laptop-shop.png";

// github ya live khali ("") ho to wo button nazar nahi aata.
// Asli links milte hi "" ki jagah link daal dein.
const projects = [
  {
    title: "Ping Talk",
    image: pingTalkImg,
    description:
      "A WhatsApp-like chat web app for messaging between users, with a familiar and easy-to-use interface.",
    tech: ["Chat App", "Web App"],
    github: "",
    live: "https://ping-talk-1sowc5eu3-abdul-haleem3.vercel.app/",
  },
    {
    title: "Shisham Dev Agency Website",
    image: shishamImg,
    description:
      "The website of Shisham Dev Agency, the digital agency I co-founded, presenting our web development, design and business setup services.",
    tech: ["Agency Website", "Web Development"],
    github: "",
    live: "https://www.shisham.dev/",
  },
  {
    title: "Cosmetic Shop Website",
    image: cosmeticShopImg ,
    description:
      "A modern, mobile-friendly website for a cosmetic shop with a product showcase and an admin panel.",
    tech: ["React"],
    github: "",
    live: "https://a-to-z-cosmetics.vercel.app/",
  },
  {
    title: "Automatic Light Control System",
    image: lightControl,
    description:
      "An automatic lighting system that switches the light on in darkness and off in daylight, so no one has to control it by hand.",
    tech: ["Automation", "Smart Lighting"],
    github: "",
    live: "",
  },
  {
    title: "Laser Shield",
    image: laserShield,
    description:
      "A smart security solution for safer, sustainable cities, aligned with UN Sustainable Development Goals 11 and 9.",
    tech: ["Smart Security", "SDG 11", "SDG 9"],
    github: "",
    live: "",
  },
     {
    title: "E-commerce Laptop Shop",
    image: LaptopShop,
    description:
      "An e-commerce website for a laptop shop where customers can browse and buy laptops, with an admin panel to manage the shop.",
    tech: ["E-commerce", "Admin Panel"],
    github: "",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 text-center">
          Latest <span className="text-accent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:border-accent hover:-translate-y-2 hover:shadow-lg transition-all"
            >
              <div className="h-48 bg-accent/10">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-sm mt-2">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(p.github || p.live) && (
                  <div className="flex gap-5 mt-5 text-sm">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-slate-700 hover:text-accent"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-slate-700 hover:text-accent"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}