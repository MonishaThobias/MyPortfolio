import React from 'react'
import { motion } from "framer-motion";
import FadeInSection from './FadeInSection';



const skills = [
  "JavaScript (ES6+)",
  "React",
  "Python",
  "Tailwind CSS",
  "Bootstrap",
  "HTML5/CSS3",
  "React Router",
  "MUI",
  "Axios",
  "Redux",
  "FastAPI",
  "AWS",
  "Django",
  "REST APIs",
  "PostgreSQL",
  "Git & GitHub",
];

const SkillSec = () => {
  return (
    <>
    <FadeInSection>
      <section id="skills" className="border-t border-t-white">
      <div className="mx-auto max-w-6xl px-4 py-16 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0], backgroundColor: "#2563EB", color: "#fff" }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.1 }}
              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium cursor-pointer 
              shadow-md hover:shadow-lg transition-all duration-300 text-white"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
    </FadeInSection>
    </>
  )
}

export default SkillSec
