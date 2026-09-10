import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'How We Do It', href: '#philosophy' },
  { label: 'Who We Are', href: '#about' },
  { label: 'What We Do', href: '#services' },
  { label: 'What Clients Say', href: '#testimonials' },
]

function handleHashNav(href) {
  const hash = href.replace('#', '')
  const el = document.getElementById(hash)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location.href = '/' + href
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-deep-velocity/95 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span
              className="text-xl font-black text-white tracking-tight"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              PETER<span className="text-lime">.</span>LONG
            </span>
            <span className="text-[10px] text-silver/60 tracking-widest uppercase mt-0.5">
              Wealth Advisory
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleHashNav(link.href)}
                className="text-sm text-silver/70 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/keep-moving"
              className="text-sm text-lime hover:text-lime/80 transition-colors duration-200 font-semibold"
            >
              Keep Moving
            </Link>
            <button
              onClick={() => handleHashNav('#contact')}
              className="text-sm bg-lime text-deep-velocity font-bold px-5 py-2.5 rounded-full hover:bg-lime/90 transition-all duration-200 cursor-pointer border-none"
            >
              Say Hello
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 bg-card border-l border-white/10 flex flex-col pt-24 pb-10 px-8 transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setOpen(false)
                  setTimeout(() => handleHashNav(link.href), 300)
                }}
                className="text-left text-lg text-silver/80 hover:text-white py-3 border-b border-white/5 transition-colors duration-200 cursor-pointer bg-transparent border-l-0 border-r-0 border-t-0"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/keep-moving"
              className="text-lg text-lime hover:text-lime/80 py-3 border-b border-white/5 font-semibold"
            >
              Keep Moving
            </Link>
          </div>
          <div className="mt-8">
            <button
              onClick={() => {
                setOpen(false)
                setTimeout(() => handleHashNav('#contact'), 300)
              }}
              className="w-full bg-lime text-deep-velocity font-bold py-3 rounded-full hover:bg-lime/90 transition-all cursor-pointer border-none text-base"
            >
              Say Hello
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
