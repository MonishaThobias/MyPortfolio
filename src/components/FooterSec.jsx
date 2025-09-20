import React, { useState, useEffect } from 'react'

const FooterSec = () => {
  const [showButton, setShowButton] = useState(false)
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
       {/* FOOTER */}
      <footer className="border-t border-t-white">
        <div className="mx-auto max-w-6xl items-center px-4 py-8 text-sm text-gray-400 flex justify-center h-16 ">
          © {new Date().getFullYear()} Monisha — Built with React & Tailwind
        </div>
         {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
            aria-label="Scroll to Top"
            title='Scroll to Top'
          >
            ↑
          </button>
        )}
      </footer>
    </>
  )
}

export default FooterSec
