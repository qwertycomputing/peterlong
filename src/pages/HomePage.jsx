import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import {
  ChevronDown,
  Award,
  BookOpen,
  GraduationCap,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Check,
  Plus,
  Minus,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen bg-deep-velocity flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69f21c09404e88be8afea430/640ddd16a_generated_image.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-velocity/30 via-deep-velocity/60 to-deep-velocity lg:from-deep-velocity/20 lg:via-deep-velocity/50 lg:to-deep-velocity" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-velocity via-transparent to-transparent opacity-70" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-24">
        <div className="lg:ml-auto lg:w-[50%] xl:w-[45%]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="w-6 h-px bg-lime" />
            <span className="text-lime text-xs font-semibold tracking-widest uppercase">
              IA Private Wealth · Burlington, ON
            </span>
          </motion.div>

          {/* H1 */}
          <div className="mb-8 overflow-hidden">
            {['YOUR WEALTH', 'YOUR HEALTH', 'YOUR LIFE.'].map((line, i) => (
              <motion.div
                key={line}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h1
                  className={`text-5xl md:text-6xl xl:text-7xl font-black leading-none tracking-tight ${
                    i === 0
                      ? 'text-white'
                      : i === 1
                      ? 'text-lime'
                      : 'text-silver/40'
                  }`}
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {i === 2 ? (
                    <>
                      YOUR LIFE
                      <span className="text-white">.</span>
                    </>
                  ) : (
                    line
                  )}
                </h1>
              </motion.div>
            ))}
          </div>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="text-silver/70 text-lg leading-relaxed mb-10 max-w-lg"
          >
            The only advisor who treats your body and your portfolio as one system. When you
            move well and plan well, your possibilities are limitless.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-lime text-deep-velocity font-bold px-7 py-3.5 rounded-full hover:bg-lime/90 transition-all duration-200 text-sm"
            >
              Start Your Plan
            </a>
            <a
              href="#philosophy"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:border-white/60 hover:bg-white/5 transition-all duration-200 text-sm"
            >
              How It Works
            </a>
          </motion.div>

          {/* Testimonial Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="border-l-2 border-lime/40 pl-5 max-w-lg"
          >
            <p className="text-silver/70 text-sm italic leading-relaxed mb-2">
              "25 years later, we own our home, are seasoned travellers and a few short years
              from retirement. Peter's guidance helped us through this journey."
            </p>
            <span className="text-silver/40 text-xs">— Susan &amp; Todd, clients since 1995</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ─── Philosophy ───────────────────────────────────────────────────────────────
function Philosophy() {
  const steps = [
    {
      num: '01',
      title: 'Design',
      subtitle: 'It begins with a conversation.',
      body: 'A sense of what\'s possible and an important conversation about where you are today, where you want to be, and how we get you there together.',
    },
    {
      num: '02',
      title: 'Build',
      subtitle: 'Your customized financial plan.',
      body: 'The idea becomes a customized financial plan that addresses your goals, aligns with your values, and charts a clear path to your best possible future.',
    },
    {
      num: '03',
      title: 'Live',
      subtitle: 'Watch life\'s possibilities unfold.',
      body: 'We work to help you achieve your financial goals while adapting to life\'s inevitable changes — because a great plan is always evolving.',
    },
  ]

  return (
    <section id="philosophy" className="relative bg-deep-velocity py-28 overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[clamp(60px,12vw,160px)] font-black text-white/[0.025] tracking-widest whitespace-nowrap"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          POSSIBILITIES
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-lime" />
            <span className="text-lime text-xs font-semibold tracking-widest uppercase">
              How We Do It
            </span>
            <div className="w-6 h-px bg-lime" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            When We Think About
            <br />
            <span className="text-lime">Investing</span>
          </h2>
          <p className="text-silver/60 mt-6 max-w-xl mx-auto leading-relaxed">
            Our approach is grounded in a simple truth: great wealth planning starts with
            understanding you — your life, your health, your ambitions.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.15}>
              <div className="relative bg-card rounded-2xl p-8 border border-white/5 hover:border-lime/30 transition-all duration-300 group h-full overflow-hidden">
                {/* Step number watermark */}
                <span
                  className="absolute -top-4 -right-2 text-[80px] font-black text-white/[0.04] leading-none select-none"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {step.num}
                </span>
                <div className="relative">
                  <div className="w-8 h-px bg-lime mb-6" />
                  <span className="text-lime text-xs font-semibold tracking-widest uppercase mb-3 block">
                    Step {step.num}
                  </span>
                  <h3
                    className="text-xl font-black text-white mb-2"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-silver/80 font-semibold text-sm mb-4">{step.subtitle}</p>
                  <p className="text-silver/60 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  const [email, setEmail] = useState('')

  const handleBookSignup = (e) => {
    e.preventDefault()
    toast.success('Thanks! Check your inbox for the first chapter.')
    setEmail('')
  }

  const teamMembers = [
    {
      name: 'Sandra Bridgwater',
      title: 'Licensed Assistant',
      email: 'sandra.bridgwater@ia.ca',
      img: 'https://images.squarespace-cdn.com/content/v1/5fa94b47d64dd91bd77c833e/1631636042639-9XKSHYAOUB9GO7M1NCGT/CPCo-8250.jpg',
    },
    {
      name: 'Kim Kingston',
      title: 'Administrative Assistant',
      email: 'kim.kingston@ia.ca',
      img: 'https://images.squarespace-cdn.com/content/v1/5fa94b47d64dd91bd77c833e/1631636069530-FGHCBYG3MOFYH2341IOD/CPCo-8251.jpg',
    },
    {
      name: 'Shari Rogers',
      title: 'Licensed Assistant',
      email: 'shari.rogers@ia.ca',
      img: 'https://images.squarespace-cdn.com/content/v1/5fa94b47d64dd91bd77c833e/1631636094486-2NCVWZ5URNILKIDT21AP/CPCo-8273.jpg',
    },
  ]

  const badges = [
    { icon: <Award size={16} />, label: 'Top 30 President\'s Council at IA' },
    { icon: <BookOpen size={16} />, label: 'Author — On Time Retirement' },
    { icon: <GraduationCap size={16} />, label: 'Educator at McMaster, Mohawk & Sheridan' },
  ]

  return (
    <section id="about" className="bg-card py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Photo + Badges */}
          <FadeIn>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl group">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5fa94b47d64dd91bd77c833e/1631640369420-RLL2ON9OUD0EJHBGL8OP/CPCo-8235.jpg"
                  alt="Peter Long"
                  className="w-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ height: '520px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-velocity/60 via-transparent to-transparent" />
              </div>
              {/* Badges */}
              <div className="mt-4 flex flex-col gap-3">
                {badges.map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-3 bg-deep-velocity/80 border border-white/5 rounded-xl px-4 py-3"
                  >
                    <span className="text-lime">{b.icon}</span>
                    <span className="text-silver/80 text-sm">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: Bio */}
          <FadeIn delay={0.15}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-lime" />
              <span className="text-lime text-xs font-semibold tracking-widest uppercase">
                Who We Are
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-2"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Peter Long
            </h2>
            <p className="text-silver/60 text-sm mb-6">
              BA, CFP® · Director, Private Client Group · Investment Advisor
            </p>
            <div className="w-12 h-0.5 bg-lime mb-8" />

            <div className="flex flex-col gap-5 text-silver/70 text-sm leading-relaxed mb-10">
              <p>
                As a member of the coveted Top 30 President's Council at IA, Peter believes that
                the way he adds value to the lives of his clients is to successfully manage assets
                in a way that reflects the realities of their life today — and the possibilities
                of their life tomorrow.
              </p>
              <p>
                Published in the National Post, Hamilton Spectator, Mutual Fund Review and
                Canadian Law Journal, Peter has established himself as a leading voice at the
                intersection of health and wealth.
              </p>
              <p>
                In his spare time, Peter enjoys meaningful moments with his family, traveling,
                and hiking the Bruce Trail — where he's been a long-time member and supporter.
              </p>
            </div>

            {/* Book Signup */}
            <div className="border border-lime/30 rounded-2xl p-6 bg-deep-velocity/50">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={18} className="text-lime" />
                <span
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Free: First Chapter of <em>On Time Retirement</em>
                </span>
              </div>
              <form onSubmit={handleBookSignup} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-silver/30 focus:outline-none focus:border-lime/50 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-lime text-deep-velocity font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-lime/90 transition-all whitespace-nowrap"
                >
                  Get Chapter
                </button>
              </form>
            </div>
          </FadeIn>
        </div>

        {/* Team */}
        <div className="mt-20">
          <FadeIn>
            <h3
              className="text-2xl font-black text-white mb-10 text-center"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Meet the Team
            </h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.12}>
                <div className="bg-deep-velocity rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 group">
                  <div className="overflow-hidden h-64">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-5">
                    <h4
                      className="text-white font-bold text-base mb-1"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {member.name}
                    </h4>
                    <p className="text-silver/50 text-xs mb-3">{member.title}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-lime/70 hover:text-lime text-xs transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  const [expanded, setExpanded] = useState({})

  const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))

  const services = [
    {
      id: 'planning',
      tag: 'Planning',
      title: 'Financial Planning',
      intro: 'Comprehensive strategy that outlines your goals, objectives and needs.',
      body: "It's an important conversation about who you are, where you are, and where you want to be — and how your finances can get you there.",
      bullets: [
        'Define your spending and expense priorities',
        'Personal and business wealth planning',
        'Protect your family, your business, your income',
        'Ensure your money goes to the people and places you believe in',
        'Sustainable retirement income planning',
        'Pre-retirement accumulation strategies',
        'Tax-efficient de-accumulation (spending) strategies',
        'Tax and estate planning',
      ],
    },
    {
      id: 'wealth',
      tag: 'Advice',
      title: 'Wealth Management',
      intro: 'Integrated and disciplined process that defines how we execute your strategy.',
      body: 'From guiding you through market complexity to navigating life\'s changes, our process keeps your wealth working for you at every stage.',
      bullets: [
        'Guiding you through the process',
        'Monitoring your progress',
        'Navigating through life\'s changes',
        'Income preservation',
        'Tax reduction',
        'Inter-generational wealth transfer and legacy',
        'Philanthropic ideals',
        'Cottage/recreational property scenarios',
        'Debt and housing utilization',
      ],
    },
    {
      id: 'investing',
      tag: 'Investing',
      title: 'Investment Strategy',
      intro: 'Tactical strategies that keep your portfolio on track and on target.',
      body: 'We deploy disciplined, evidence-based investment strategies aligned with your values and built for the long term.',
      bullets: [
        'Sustainable investments through diversity, governance & ecology',
        'Invest in products and businesses that support your beliefs',
        'Asset allocation strategies',
        'Asset management and selection',
        'Tax-efficient investment vehicles',
        'Dividend-producing solutions',
        'Growth-capturing opportunities',
        'Access to world-class money managers',
        'Ongoing priority and progress monitoring',
      ],
    },
  ]

  return (
    <section id="services" className="bg-deep-velocity py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-lime" />
            <span className="text-lime text-xs font-semibold tracking-widest uppercase">
              What We Do
            </span>
            <div className="w-6 h-px bg-lime" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Everything We Do Has a
            <br />
            <span className="text-lime">Positive Impact</span>
          </h2>
          <p className="text-silver/60 mt-6 max-w-xl mx-auto leading-relaxed">
            Three integrated disciplines — planning, management, and strategy — working
            together to create lasting prosperity for you and your family.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((svc, i) => (
            <FadeIn key={svc.id} delay={i * 0.12}>
              <div className="bg-card rounded-2xl p-8 border border-white/5 hover:border-lime/20 transition-all duration-300 h-full flex flex-col">
                <span className="inline-block bg-lime/10 text-lime text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 self-start">
                  {svc.tag}
                </span>
                <h3
                  className="text-xl font-black text-white mb-2"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {svc.title}
                </h3>
                <p className="text-silver/80 font-semibold text-sm mb-3">{svc.intro}</p>
                <p className="text-silver/50 text-sm leading-relaxed mb-6">{svc.body}</p>

                <div className="mt-auto">
                  <button
                    onClick={() => toggle(svc.id)}
                    className="flex items-center gap-2 text-lime text-sm font-semibold mb-4 cursor-pointer bg-transparent border-none p-0"
                  >
                    {expanded[svc.id] ? <Minus size={15} /> : <Plus size={15} />}
                    {expanded[svc.id] ? 'Show less' : 'Show all services'}
                  </button>

                  {expanded[svc.id] && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="flex flex-col gap-2.5"
                    >
                      {svc.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-silver/60 text-sm">
                          <Check size={14} className="text-lime mt-0.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Full-width image */}
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden h-64 md:h-80">
            <img
              src="https://media.base44.com/images/public/69f21c09404e88be8afea430/7bf1742ab_generated_f2450951.png"
              alt="Precision, Transparency, Performance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-deep-velocity/50 flex items-center justify-center">
              <p
                className="text-2xl md:text-4xl font-black text-white tracking-widest text-center"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Precision · Transparency · Performance
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      name: 'Susan & Todd',
      since: 'Clients since 1995',
      quote:
        'We were worried we wouldn\'t have enough money to buy a house let alone retire and 25 years later, we own our home, are seasoned travellers and a few short years from retirement. Peter\'s trusted and invaluable guidance helped us through this journey. We can\'t recommend Peter and his team strongly enough.',
    },
    {
      name: 'Suzette & Norm',
      since: 'Clients since 2006',
      quote:
        'Peter\'s wealth planning process made sure our personal financial goals were looked after. In over 15+ years of working with Peter and his team, we\'ve seen this process tested through many ups and downs of the markets and we\'ve always had a level of comfort that our money is well looked after and working to achieve our goals.',
    },
    {
      name: 'Elise & Mark',
      since: 'Clients since 2018',
      quote:
        'We are so comfortable with the advice and guidance that Peter and his team have given us. We are looking to start a family and weren\'t sure we could begin saving for the future and buy a home. We\'ve been able to stay on track and have just recently purchased our first home.',
    },
    {
      name: 'Jordan',
      since: 'Client since 2020',
      quote:
        "It's satisfying knowing my financial plan is in place and my investments are well managed. Now I can focus on building my business.",
    },
  ]

  return (
    <section id="testimonials" className="bg-card py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-lime" />
            <span className="text-lime text-xs font-semibold tracking-widest uppercase">
              What Clients Say
            </span>
            <div className="w-6 h-px bg-lime" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Nothing Matters More
            <br />
            <span className="text-lime">Than Our Clients' Trust</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="bg-deep-velocity rounded-2xl p-8 border border-white/5 hover:border-lime/20 transition-all duration-300 h-full flex flex-col">
                <div className="text-lime text-4xl font-black leading-none mb-6 select-none" style={{ fontFamily: "'Inter Tight', sans-serif" }}>"</div>
                <p className="text-silver/70 text-sm leading-relaxed flex-1 italic mb-8">
                  {t.quote}
                </p>
                <div className="border-t border-white/5 pt-5">
                  <p
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-lime/60 text-xs mt-0.5">{t.since}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Earth Stride / Keep Moving ───────────────────────────────────────────────
function EarthStride() {
  const features = [
    {
      title: 'Virtual Global Challenges',
      body: 'Walk the Camino de Santiago, trek Machu Picchu or hike the Himalayas — all from your neighborhood.',
    },
    {
      title: 'Community & Leaderboards',
      body: 'Move alongside a community of clients who share the belief that physical vitality drives financial clarity.',
    },
    {
      title: 'Health–Wealth Dashboard',
      body: 'Your steps, active minutes and movement streaks displayed alongside your wealth progress — one unified view.',
    },
    {
      title: 'Habit Streaks & Badges',
      body: 'Momentum compounds. Earn badges for consistency and watch how daily movement builds long-term resilience.',
    },
  ]

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-px bg-lime" />
            <span className="text-lime text-xs font-semibold tracking-widest uppercase">
              The Keep Moving Initiative
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Phone mock */}
          <FadeIn>
            <div className="flex justify-center">
              <div className="relative w-72 bg-[#0d1210] rounded-[2.5rem] border-[6px] border-[#1a2420] shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0d1210] rounded-b-2xl z-10" />
                <div className="pt-10 pb-8 px-5">
                  {/* App header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-[#a8e063] text-xs font-bold tracking-wide">Earth Stride</p>
                      <p className="text-white/60 text-[11px]">Good morning, Peter</p>
                    </div>
                    <div className="w-8 h-8 bg-[#a8e063]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#a8e063] text-xs font-bold">PL</span>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {[
                      { label: 'Steps', value: '8,432' },
                      { label: 'Active', value: '47 min' },
                      { label: 'Wealth Score', value: '↑ 4.2%', green: true },
                      { label: 'Challenge Rank', value: '#3 / 24' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-xl p-3">
                        <p className={`text-base font-black ${stat.green ? 'text-[#a8e063]' : 'text-white'}`} style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                          {stat.value}
                        </p>
                        <p className="text-white/40 text-[10px] mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-white text-[11px] font-semibold">Camino de Santiago</p>
                      <span className="text-[#a8e063] text-[10px] font-bold">68%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 mb-2">
                      <div className="bg-[#a8e063] h-1.5 rounded-full" style={{ width: '68%' }} />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40 text-[10px]">543 km completed</span>
                      <span className="text-white/40 text-[10px]">252 km remaining</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Text + features */}
          <FadeIn delay={0.15}>
            <h2
              className="text-4xl md:text-5xl font-black text-deep-velocity leading-tight mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Your Body is
              <br />
              <span className="text-lime">Your First Portfolio</span>
            </h2>
            <p className="text-deep-velocity/60 leading-relaxed mb-10">
              Peter built Earth Stride — a platform that unites physical vitality with financial
              growth. Because the habits that keep you healthy are the same habits that build
              lasting wealth.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {features.map((f, i) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-2 h-2 bg-lime rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p
                      className="text-deep-velocity font-bold text-sm mb-1"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {f.title}
                    </p>
                    <p className="text-deep-velocity/60 text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://stride-global-path.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime text-deep-velocity font-bold px-7 py-3.5 rounded-full hover:bg-lime/90 transition-all text-sm"
              >
                Get the App
              </a>
              <Link
                to="/keep-moving"
                className="border border-deep-velocity/30 text-deep-velocity font-semibold px-7 py-3.5 rounded-full hover:border-deep-velocity/60 hover:bg-deep-velocity/5 transition-all text-sm"
              >
                Learn More
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Full-width banner image */}
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden h-72 md:h-96">
            <img
              src="https://media.base44.com/images/public/69f21c09404e88be8afea430/9daea49ae_generated_image.png"
              alt="Keep Moving"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-deep-velocity/50 flex flex-col items-center justify-center text-center">
              <p
                className="text-3xl md:text-5xl font-black text-lime leading-tight mb-4"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Move more.
                <br />
                Live more.
                <br />
                Grow more.
              </p>
              <span className="text-white/40 text-xs tracking-widest uppercase">
                Earth Stride · Keep Moving
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const topics = [
    {
      id: 'wealth',
      label: 'Optimize Wealth',
      description: 'Portfolio, estate & tax planning',
    },
    {
      id: 'health',
      label: 'Activate Health',
      description: 'Health-wealth integration',
    },
    {
      id: 'total',
      label: 'Total Integration',
      description: 'Full holistic approach',
    },
  ]

  const [selectedTopic, setSelectedTopic] = useState('wealth')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Thank you! Peter will be in touch shortly.')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="bg-deep-velocity py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-lime" />
              <span className="text-lime text-xs font-semibold tracking-widest uppercase">
                Say Hello
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Your Possibilities
              <br />
              <span className="text-lime">Start Here</span>
            </h2>
            <p className="text-silver/60 leading-relaxed mb-10">
              Whether you're ready to start a plan, curious about how we work, or simply want
              to explore the possibilities — we'd love to hear from you.
            </p>

            {/* Topic selector */}
            <div className="flex flex-col gap-3 mb-10">
              {topics.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTopic(t.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 cursor-pointer text-left ${
                    selectedTopic === t.id
                      ? 'bg-lime/10 border-lime/40 text-white'
                      : 'bg-white/[0.03] border-white/5 text-silver/60 hover:border-white/15'
                  }`}
                >
                  <div>
                    <p className="font-semibold text-sm">{t.label}</p>
                    <p className={`text-xs mt-0.5 ${selectedTopic === t.id ? 'text-silver/60' : 'text-silver/40'}`}>
                      {t.description}
                    </p>
                  </div>
                  {selectedTopic === t.id && (
                    <Check size={16} className="text-lime flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:peter.long@ia.ca"
                className="flex items-center gap-3 text-silver/60 hover:text-lime transition-colors text-sm"
              >
                <Mail size={16} className="text-lime/60" />
                peter.long@ia.ca
              </a>
              <a
                href="tel:9059457200"
                className="flex items-center gap-3 text-silver/60 hover:text-lime transition-colors text-sm"
              >
                <Phone size={16} className="text-lime/60" />
                (905) 945-7200
              </a>
              <div className="flex items-start gap-3 text-silver/60 text-sm">
                <MapPin size={16} className="text-lime/60 flex-shrink-0 mt-0.5" />
                <span>
                  1235 North Shore Blvd E, Suite 400
                  <br />
                  Burlington, ON L7S 2H8
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="text-silver/50 text-xs tracking-wide uppercase mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Your full name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-silver/30 focus:outline-none focus:border-lime/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-silver/50 text-xs tracking-wide uppercase mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-silver/30 focus:outline-none focus:border-lime/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-silver/50 text-xs tracking-wide uppercase mb-2 block">
                  Phone <span className="text-silver/30 normal-case">(optional)</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(905) 555-0100"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-silver/30 focus:outline-none focus:border-lime/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-silver/50 text-xs tracking-wide uppercase mb-2 block">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  placeholder={`I'm interested in ${topics.find((t) => t.id === selectedTopic)?.label}...`}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-silver/30 focus:outline-none focus:border-lime/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-lime text-deep-velocity font-bold py-4 rounded-xl hover:bg-lime/90 transition-all text-sm mt-2"
              >
                Send Message to Peter
              </button>
            </form>

            <p className="text-silver/30 text-[11px] leading-relaxed mt-6">
              Peter Long is a Financial Advisor with IA Private Wealth. IA Securities Inc. is a
              member of the Canadian Investment Regulatory Organization (CIRO) and a member of
              the Canadian Investor Protection Fund (CIPF). The information contained herein is
              for informational purposes only.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <About />
        <Services />
        <Testimonials />
        <EarthStride />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
