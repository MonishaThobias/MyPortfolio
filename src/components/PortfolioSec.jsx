import React from "react";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const projects = [
  {
    title: "Hospital Management System",
    description:
      "Full-stack app (React + FastAPI + PostgreSQL). Patient records, appointments, billing, inventory.",
    tags: ["React", "FastAPI", "PostgreSQL"],
    link: "#",
  },
  {
    title: "E-commerce Website",
    description: "Online store with product listing, cart, checkout, and payment integration. Built with React and Tailwind for responsive UI.",
    tags: ["React", "Tailwind", "Stripe"],
    link: "#",
  },
  {
    title: "Personal Blog",
    description:
      "Django blog with admin panel, markdown posts, and search.",
    tags: ["Django", "SQLite", "Tailwind"],
    link: "#",
  },
];

const PortfolioSec = () => {
  return (
    <FadeInSection /* delay={0.1} */>
    <section id="projects" className="text-white mx-auto max-w-6xl px-4 py-16  flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, index) => (
          <motion.article
            key={p.title}
            className="rounded-2xl border p-5 shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{p.description}</p>
            <ul className="mt-3 flex flex-wrap justify-center gap-2 w-full">
              {p.tags.map((t) => (
                <li key={t} className="rounded-full border px-2 py-0.5 text-xs">
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={p.link}
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
              View Repo →
            </a>
          </motion.article>
        ))}
      </div>
    </section>
    </FadeInSection>

  );
};

export default PortfolioSec;
