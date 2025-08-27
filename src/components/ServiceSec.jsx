import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Globe } from "lucide-react";
import FadeInSection from "./FadeInSection";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building modern, responsive UIs with React, TailwindCSS, and smooth animations.",
    icon: <Code className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Backend Development",
    description:
      "Designing secure, scalable APIs using FastAPI, Django, and PostgreSQL.",
    icon: <Server className="w-8 h-8 text-green-400" />,
  },
  {
    title: "Full Stack Solutions",
    description:
      "Delivering complete applications from frontend to backend with cloud deployment.",
    icon: <Globe className="w-8 h-8 text-purple-400" />,
  },
];

const ServiceSec = () => {
  return (
    <FadeInSection>
      <section
        id="services"
        className="text-white  mx-auto max-w-6xl px-4 py-16 text-center"
      >
        <h2 className="text-3xl font-bold">What I Offer</h2>
        <p className="mt-2 text-gray-400 text-sm max-w-xl mx-auto">
          End-to-end web development services tailored to modern businesses.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              className="rounded-2xl bg-gray-900/50 border p-6 shadow hover:shadow-lg transition flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
};

export default ServiceSec;
