import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

function handleHashNav(href) {
  const hash = href.replace('#', '')
  const el = document.getElementById(hash)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location.href = '/' + href
  }
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-deep-velocity border-t border-white/5 overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[clamp(80px,15vw,180px)] font-black text-white/[0.03] tracking-widest whitespace-nowrap"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          KEEP MOVING
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1–2: Branding */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex flex-col leading-none mb-6">
              <span
                className="text-2xl font-black text-white tracking-tight"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                PETER<span className="text-lime">.</span>LONG
              </span>
              <span className="text-[10px] text-silver/50 tracking-widest uppercase mt-1">
                Wealth Advisory
              </span>
            </Link>
            <p className="text-silver/60 text-sm leading-relaxed mb-8 max-w-md">
              Helping clients realize life's possibilities — today and tomorrow.
              Pioneering the intersection of health and wealth for total prosperity.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:Peter.Long@iaprivatewealth.ca"
                className="flex items-center gap-3 text-sm text-silver/60 hover:text-lime transition-colors duration-200 group"
              >
                <Mail size={15} className="text-lime/60 group-hover:text-lime flex-shrink-0" />
                Peter.Long@iaprivatewealth.ca
              </a>
              <a
                href="tel:+19053369544"
                className="flex items-center gap-3 text-sm text-silver/60 hover:text-lime transition-colors duration-200 group"
              >
                <Phone size={15} className="text-lime/60 group-hover:text-lime flex-shrink-0" />
                905.336.9544 · TF: 1-800-289-6235
              </a>
              <div className="flex items-start gap-3 text-sm text-silver/60">
                <MapPin size={15} className="text-lime/60 flex-shrink-0 mt-0.5" />
                <span>
                  1001, Champlain Avenue, Suite 201
                  <br />
                  Burlington, ON L7L 5Z4
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigate */}
          <div>
            <h4
              className="text-white font-bold text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'How We Do It', href: '#philosophy' },
                { label: 'Who We Are', href: '#about' },
                { label: 'What We Do', href: '#services' },
                { label: 'What Clients Say', href: '#testimonials' },
                { label: 'Say Hello', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleHashNav(link.href)}
                    className="text-sm text-silver/60 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/keep-moving"
                  className="text-sm text-lime/80 hover:text-lime transition-colors duration-200"
                >
                  Keep Moving
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h4
              className="text-white font-bold text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Connect
            </h4>
            <a
              href="https://www.linkedin.com/in/peterlong-wealthadvisor/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-silver/60 hover:text-white transition-colors duration-200 mb-8"
            >
              <ExternalLink size={16} className="text-lime/60" />
              LinkedIn
            </a>
            <p className="text-silver/40 text-[11px] leading-relaxed">
              Peter Long is a Financial Advisor with IA Private Wealth. IA Securities Inc. is a
              member of the Canadian Investment Regulatory Organization (CIRO) and a member of
              the Canadian Investor Protection Fund (CIPF).
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-silver/40 text-xs">
            © {year} Peter Long Wealth Advisory — IA Private Wealth. All rights reserved.
          </p>
          <p className="text-lime/50 text-xs font-semibold tracking-widest uppercase">
            For life's possibilities.™
          </p>
        </div>
      </div>
    </footer>
  )
}
