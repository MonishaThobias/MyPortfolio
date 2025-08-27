import React from 'react'

const FooterSec = () => {
  return (
    <>
       {/* FOOTER */}
      <footer className="border-t border-t-white">
        <div className="mx-auto max-w-6xl items-center px-4 py-8 text-sm text-gray-400 flex justify-center h-16 ">
          © {new Date().getFullYear()} Monisha — Built with React & Tailwind
        </div>
      </footer>
    </>
  )
}

export default FooterSec
