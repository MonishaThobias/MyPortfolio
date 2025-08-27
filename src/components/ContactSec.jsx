import React from 'react'
import FadeInSection from './FadeInSection'
import ContactForm from './ContactForm'

const ContactSec = () => {
  return (
    <>
    <FadeInSection /* delay={0.3} */>
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 flex flex-col items-center text-center">
  <h2 className="text-2xl font-bold text-white ">Contact</h2>
  <p className="mt-2 text-gray-400">
    Open to full-time roles and freelance. Let’s talk!
  </p>

  <div className="mt-10 flex flex-col md:flex-row md:space-x-10 w-full md:w-3/4">
    {/*Contact Form */}
<ContactForm />
    {/* Contact Details */}
    <div className="flex-1 mt-8 md:mt-0 flex flex-col items-center justify-center gap-4 text-left">
      <h3 className="text-lg font-semibold text-white ">Get in touch</h3>
      <p className='text-white '>Email: <a href="mailto:monishatechdev2019@gmail.com" className="text-blue-900 hover:underline">monishatechdev2019@gmail.com</a></p>
      <p className='text-white '>Phone: <a href="tel:+91 9042039190" className="text-blue-900 hover:underline">+91 9042039190</a></p>
      <p className='text-white '>Location: Marthandam, India</p>
      <div className="flex space-x-3 mt-2">
        <a href="https://github.com/MonishaThobias" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">GitHub</a>
        <a href="https://www.linkedin.com/in/mary-monisha-fedev/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">LinkedIn</a>
      </div>
    </div>
  </div>
</section>
</FadeInSection>
    </>
  )
}

export default ContactSec
