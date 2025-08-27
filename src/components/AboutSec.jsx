import React from 'react'
import FadeInSection from './FadeInSection'
import { Github, Linkedin } from "lucide-react";

const AboutSec = () => {
  return (
    <>
      <FadeInSection>
      <section id="about" className="border-t border-t-white">
  <div className="mx-auto max-w-6xl px-4 py-16 flex flex-col items-center text-center">
    <h2 className="text-2xl font-bold text-white">About</h2>
    <p className="mt-4 max-w-3xl text-gray-400">
      I’m a Fullstack Developer specializing in building scalable, maintainable, and responsive web applications. 
      I’ve worked on real projects like a Hospital Management System using React + FastAPI, 
      and I’m comfortable collaborating across frontend, backend, and DevOps to deliver complete features.
    </p>
      {/* Social Links */}
          <div className="mt-6 flex gap-6">
            <a
              href="https://github.com/MonishaThobias"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-900 hover:bg-gray-700 transition"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/mary-monisha-fedev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
  </div>
</section>

</FadeInSection>
    </>
  )
}

export default AboutSec
