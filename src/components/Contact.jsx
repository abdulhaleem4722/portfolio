import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const EMAIL = "abdulhaleem47222@gmail.com";
const ACCESS_KEY = "5cf1cfb0-1290-46e4-9a70-44ed6f0cd7d7";

const info = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "03153275238",
    href: "tel:03153275238",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "Abdul Haleem",
    href: "https://www.linkedin.com/in/abdul-haleem-bhayo-895717351",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "abdulhaleem4722",
    href: "https://github.com/abdulhaleem4722",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio message from ${form.name}`,
          from_name: "Portfolio Website",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus({
          type: "success",
          text: "Thank you! Your message has been sent.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full rounded-lg bg-white border border-slate-300 px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-accent transition-colors";

  return (
    <section id="contact" className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 text-center">
          Contact <span className="text-accent">Me!</span>
        </h2>
        <p className="text-slate-600 text-center mt-3">
          Have a project or an opportunity in mind? Let's talk.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {info.map((i) => (
              <a
                key={i.label}
                href={i.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white shadow-sm p-5 hover:border-accent transition-colors"
              >
                <span className="text-2xl text-accent">{i.icon}</span>
                <div>
                  <p className="text-xs text-slate-600">{i.label}</p>
                  <p className="text-slate-800 break-all">{i.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <button
              type="submit"
              disabled={sending}
              className="px-8 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {status.text && (
              <p
                className={`text-sm font-medium ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.text}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}