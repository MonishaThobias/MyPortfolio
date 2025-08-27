import React from 'react'
import RoleWriter from './RoleWriter'
import profile from '../assets/images/Screenshot_20250730_144315.jpg'
import FadeInSection from './FadeInSection'
//import { FaSmile } from 'react-icons/fa'
//import { FaHandPaper } from 'react-icons/fa'

const BannerSec = () => {
  return (
    <>
      <FadeInSection>
      <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              <RoleWriter />
            </p>
            <h1 className="text-4xl font-bold flex text-white mb-4">
  Hi <span className="inline-block animate-wave">👋</span>, I'm Mary Monisha.T
</h1>
<h2 className="text-xl text-gray-300 mb-6">
  Fullstack Developer — I build clean, scalable, and responsive web applications.
</h2>
<p className="text-gray-400 max-w-xl">
  Specializing in Python, React, Tailwind, and modern web tooling. 
  I love shipping pixel-perfect, responsive interfaces and smooth developer experiences.
</p>
            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-blue-900 px-4 py-2 text-white hover:bg-blue-700"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl bg-blue-900 px-4 py-2 text-white hover:bg-blue-700"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
           
            <div className="h-40 w-40 overflow-hidden rounded-2xl border md:h-56 md:w-56">
              <img
                src={profile}
                alt="Monisha portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
</FadeInSection>
    </>
  )
}

export default BannerSec
