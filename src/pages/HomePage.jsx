import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import {
  ChevronDown,
  Award,
  BookOpen,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Check,
  Plus,
  Minus,
  Quote,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0f2a1e' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69f21c09404e88be8afea430/640ddd16a_generated_image.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,42,30,0.4), rgba(15,42,30,0.7), #0f2a1e)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0f2a1e, transparent, transparent)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-24">
        <div className="lg:ml-auto lg:w-[52%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="w-6 h-px" style={{ backgroundColor: '#a8e063' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#a8e063' }}>
              IA Private Wealth · Burlington, ON
            </span>
          </motion.div>

          <div className="mb-8">
            {['YOUR WEALTH', 'YOUR HEALTH', 'YOUR LIFE.'].map((line, i) => (
              <motion.div
                key={line}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h1
                  className="text-5xl md:text-6xl xl:text-7xl font-black leading-none tracking-tight"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    color: i === 0 ? '#ffffff' : i === 1 ? '#a8e063' : 'rgba(255,255,255,0.35)',
                  }}
                >
                  {line}
                </h1>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="text-lg leading-relaxed mb-10 max-w-lg"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            Helping clients realize life's possibilities — today and tomorrow. Comprehensive
            wealth planning that honours your health, your values, and your future.
          </motion.p>

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
              className="font-bold px-7 py-3.5 rounded-full transition-all duration-200 text-sm"
              style={{ backgroundColor: '#a8e063', color: '#0f2a1e' }}
            >
              Start Your Plan
            </a>
            <a
              href="#philosophy"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm"
              style={{ border: '1px solid rgba(255,255,255,0.25)', color: '#ffffff' }}
            >
              How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="pl-5 max-w-lg"
            style={{ borderLeft: '2px solid rgba(168,224,99,0.4)' }}
          >
            <p className="text-sm italic leading-relaxed mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
              "25 years later, we own our home, are seasoned travellers and a few short years
              from retirement. Peter's guidance helped us through this journey."
            </p>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>— Susan &amp; Todd, clients since 1995</span>
          </motion.div>
        </div>
      </div>

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
          <ChevronDown size={24} style={{ color: 'rgba(255,255,255,0.3)' }} />
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
      body: "A sense of what's possible and an important conversation that helps us understand where the real value is when it comes to your money. It all starts with an idea.",
    },
    {
      num: '02',
      title: 'Build',
      subtitle: 'Your customized financial plan.',
      body: 'The idea becomes a customized financial plan that includes a balance of what you need today and what you want for the future. Both are important. Both are understood.',
    },
    {
      num: '03',
      title: 'Live',
      subtitle: "Watch life's possibilities unfold.",
      body: "We work to help you achieve your financial goals knowing that our greatest success is watching you live the life we helped you plan for — one full of possibility: today and tomorrow.",
    },
  ]

  return (
    <section id="philosophy" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-lime" />
            <span className="text-xs font-semibold tracking-widest uppercase text-lime">
              How We Do It
            </span>
            <div className="w-6 h-px bg-lime" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ fontFamily: "'Inter Tight', sans-serif", color: '#1a2e1e' }}
          >
            When We Think About
            <br />
            <span className="text-lime">Investing</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
            Our defined process helps us create tailored strategies and solutions with a
            customized financial plan that's supportive of your needs today and possibilities
            for tomorrow.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.15}>
              <div className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-lime/30 transition-all duration-300 h-full overflow-hidden group">
                <span
                  className="absolute -top-3 -right-1 text-[80px] font-black leading-none select-none"
                  style={{ fontFamily: "'Inter Tight', sans-serif", color: 'rgba(168,224,99,0.12)' }}
                >
                  {step.num}
                </span>
                <div className="relative">
                  <div className="w-8 h-0.5 bg-lime mb-6" />
                  <span className="text-lime text-xs font-semibold tracking-widest uppercase mb-3 block">
                    Step {step.num}
                  </span>
                  <h3
                    className="text-xl font-black mb-2"
                    style={{ fontFamily: "'Inter Tight', sans-serif", color: '#1a2e1e' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-slate-700 font-semibold text-sm mb-3">{step.subtitle}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.body}</p>
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
      email: 'Sandra.Bridgwater@iaprivatewealth.ca',
      img: 'https://images.squarespace-cdn.com/content/v1/5fa94b47d64dd91bd77c833e/1631636042639-9XKSHYAOUB9GO7M1NCGT/CPCo-8250.jpg',
    },
    {
      name: 'Kim Kingston',
      title: 'Administrative Assistant',
      email: 'Kim.Kingston@iaprivatewealth.ca',
      img: 'https://images.squarespace-cdn.com/content/v1/5fa94b47d64dd91bd77c833e/1631636069530-FGHCBYG3MOFYH2341IOD/CPCo-8251.jpg',
    },
    {
      name: 'Shari Rogers',
      title: 'Licensed Assistant',
      email: 'Shari.Rogers@iaprivatewealth.ca',
      img: 'https://images.squarespace-cdn.com/content/v1/5fa94b47d64dd91bd77c833e/1631636094486-2NCVWZ5URNILKIDT21AP/CPCo-8273.jpg',
    },
  ]

  const badges = [
    { icon: <Award size={16} />, label: "Top 30 President's Council at IA" },
    { icon: <BookOpen size={16} />, label: 'Author — On Time Retirement' },
    { icon: <GraduationCap size={16} />, label: 'Educator at McMaster, Mohawk & Sheridan' },
  ]

  return (
    <section id="about" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl group">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5fa94b47d64dd91bd77c833e/1631640369420-RLL2ON9OUD0EJHBGL8OP/CPCo-8235.jpg"
                  alt="Peter Long"
                  className="w-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ height: '520px' }}
                />
              </div>
              <div className="mt-4 flex flex-col gap-3">
                {badges.map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3"
                  >
                    <span className="text-lime">{b.icon}</span>
                    <span className="text-slate-600 text-sm">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-lime" />
              <span className="text-lime text-xs font-semibold tracking-widest uppercase">
                Who We Are
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black mb-2"
              style={{ fontFamily: "'Inter Tight', sans-serif", color: '#1a2e1e' }}
            >
              Peter Long
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              BA, CFP® · Director, Private Client Group · Investment Advisor
            </p>
            <div className="w-12 h-0.5 bg-lime mb-8" />

            <div className="flex flex-col gap-5 text-slate-600 text-sm leading-relaxed mb-10">
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

            <div className="border border-lime/30 rounded-2xl p-6 bg-slate-50">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={18} className="text-lime" />
                <span
                  className="font-bold text-sm"
                  style={{ fontFamily: "'Inter Tight', sans-serif", color: '#1a2e1e' }}
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
                  className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:border-lime transition-colors"
                />
                <button
                  type="submit"
                  className="font-bold px-5 py-2.5 rounded-xl text-sm transition-all whitespace-nowrap"
                  style={{ backgroundColor: '#a8e063', color: '#0f2a1e' }}
                >
                  Get Chapter
                </button>
              </form>
            </div>
          </FadeIn>
        </div>

        {/* Team */}
        <div className="mt-24">
          <FadeIn className="text-center mb-12">
            <h3
              className="text-2xl font-black"
              style={{ fontFamily: "'Inter Tight', sans-serif", color: '#1a2e1e' }}
            >
              People Who Care
            </h3>
            <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
              With over 25 years of experience, our team is devoted to fostering meaningful
              relationships and ensuring clients realize life's possibilities.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.12}>
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="overflow-hidden h-64">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-5">
                    <h4
                      className="font-bold text-base mb-1"
                      style={{ fontFamily: "'Inter Tight', sans-serif", color: '#1a2e1e' }}
                    >
                      {member.name}
                    </h4>
                    <p className="text-slate-400 text-xs mb-3">{member.title}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-lime text-xs hover:text-lime/70 transition-colors"
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
      body: "It's an important conversation that understands the balance of having what you need for the future without compromising what's possible for today.",
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
      body: "Our belief is that the way we can add the most value is through our integrated and disciplined wealth management process — with the confidence to execute your plan.",
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
      body: 'When it comes to executing your strategy, we employ a disciplined approach ensuring things stay on track — and we can make tactical changes whenever life demands it.',
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
    <section id="services" className="bg-slate-50 py-28">
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
            className="text-4xl md:text-5xl font-black leading-tight mb-4"
            style={{ fontFamily: "'Inter Tight', sans-serif", color: '#1a2e1e' }}
          >
            Everything We Do Has a
            <br />
            <span className="text-lime">Positive Impact</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
            We work as a team to ensure that every touchpoint of your experience with us
            leaves you feeling well advised and well taken care of.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((svc, i) => (
            <FadeIn key={svc.id} delay={i * 0.12}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-lime/30 transition-all duration-300 h-full flex flex-col">
                <span className="inline-block text-lime text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 self-start border border-lime/30 bg-lime/5">
                  {svc.tag}
                </span>
                <h3
                  className="text-xl font-black mb-2"
                  style={{ fontFamily: "'Inter Tight', sans-serif", color: '#1a2e1e' }}
                >
                  {svc.title}
                </h3>
                <p className="text-slate-700 font-semibold text-sm mb-3">{svc.intro}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{svc.body}</p>

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
                        <li key={b} className="flex items-start gap-2.5 text-slate-500 text-sm">
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

        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden h-64 md:h-80">
            <img
              src="https://media.base44.com/images/public/69f21c09404e88be8afea430/7bf1742ab_generated_f2450951.png"
              alt="Precision, Transparency, Performance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(15,42,30,0.55)' }}>
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
        "We were worried we wouldn't have enough money to buy a house let alone retire and 25 years later, we own our home, are seasoned travellers and a few short years from retirement. Peter's trusted and invaluable guidance helped us through this journey. We can't recommend Peter and his team strongly enough.",
    },
    {
      name: 'Suzette & Norm',
      since: 'Clients since 2006',
      quote:
        "Peter's wealth planning process made sure our personal financial goals were looked after. In over 15+ years of working with Peter and his team, we've seen this process tested through many ups and downs of the markets and we've always had a level of comfort that our money is well looked after.",
    },
    {
      name: 'Elise & Mark',
      since: 'Clients since 2018',
      quote:
        "We are so comfortable with the advice and guidance that Peter and his team have given us. We were looking to start a family and weren't sure we could begin saving for the future and buy a home. We've been able to stay on track and have just recently purchased our first home.",
    },
    {
      name: 'Jordan',
      since: 'Client since 2020',
      quote:
        "It's satisfying knowing my financial plan is in place and my investments are well managed. Now I can focus on building my business.",
    },
  ]

  return (
    <section id="testimonials" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-lime" />
            <span className="text-lime text-xs font-semibold tracking-widest uppercase">
              What Clients Say
            </span>
            <div className="w-6 h-px bg-lime" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{ fontFamily: "'Inter Tight', sans-serif", color: '#1a2e1e' }}
          >
            Nothing Matters More
            <br />
            <span className="text-lime">Than Our Clients' Trust</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-lime/25 hover:shadow-sm transition-all duration-300 h-full flex flex-col">
                <Quote size={28} className="text-lime/30 mb-5" />
                <p className="text-slate-600 text-sm leading-relaxed flex-1 italic mb-8">
                  {t.quote}
                </p>
                <div className="border-t border-slate-200 pt-5">
                  <p
                    className="font-bold text-sm"
                    style={{ fontFamily: "'Inter Tight', sans-serif", color: '#1a2e1e' }}
                  >
                    {t.name}
                  </p>
                  <p className="text-lime text-xs mt-0.5">{t.since}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Keep Moving (no app) ─────────────────────────────────────────────────────
function KeepMoving() {
  const pillars = [
    {
      title: 'A Philosophy of Wellness',
      body: 'Peter believes that wealth without health is fundamentally incomplete. The habits and disciplines that keep you physically vital are the same ones that build lasting financial resilience.',
    },
    {
      title: 'The Keep Moving Initiative',
      body: 'Our "Keep Moving" campaign is a commitment to integrated living — inspiring clients to stay active, stay engaged, and stay connected to what truly matters in life and in planning.',
    },
    {
      title: 'Advocacy Beyond the Portfolio',
      body: 'True advocacy means caring about the whole person. From healthcare navigation to elder care guidance, we help clients navigate life\'s biggest transitions with confidence.',
    },
  ]

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <FadeIn>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://media.base44.com/images/public/69f21c09404e88be8afea430/9daea49ae_generated_image.png"
                alt="Keep Moving — health and wealth"
                className="w-full h-[480px] object-cover"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-8"
                style={{ background: 'linear-gradient(to top, rgba(15,42,30,0.85), transparent)' }}
              >
                <p className="text-lime text-xs font-semibold tracking-widest uppercase mb-2">
                  The Keep Moving Initiative
                </p>
                <p
                  className="text-white text-3xl font-black leading-tight"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Move more.
                  <br />
                  Live more.
                  <br />
                  <span className="text-lime">Grow more.</span>
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: content */}
          <FadeIn delay={0.15}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-lime" />
              <span className="text-lime text-xs font-semibold tracking-widest uppercase">
                Where Health Meets Wealth
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black leading-tight mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif", color: '#1a2e1e' }}
            >
              Your Body is
              <br />
              <span className="text-lime">Your First Portfolio</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              For over 38 years, one principle has guided Peter's practice: true prosperity
              requires both robust health and sound financial planning. Wealth without wellness
              is fundamentally incomplete.
            </p>

            <div className="flex flex-col gap-8 mb-10">
              {pillars.map((p, i) => (
                <div key={p.title} className="flex gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black"
                    style={{ backgroundColor: 'rgba(168,224,99,0.15)', color: '#a8e063' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p
                      className="font-bold text-sm mb-1"
                      style={{ fontFamily: "'Inter Tight', sans-serif", color: '#1a2e1e' }}
                    >
                      {p.title}
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/keep-moving"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full transition-all text-sm"
              style={{ backgroundColor: '#a8e063', color: '#0f2a1e' }}
            >
              Learn More About Keep Moving
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const topics = [
    { id: 'retirement', label: 'Retirement Planning', description: 'Sustainable income and peace of mind' },
    { id: 'wealth', label: 'Wealth Management', description: 'Portfolio, estate & tax strategies' },
    { id: 'family', label: 'Family & Legacy', description: 'Inter-generational wealth and giving' },
  ]

  const [selectedTopic, setSelectedTopic] = useState('retirement')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Thank you! Peter will be in touch shortly.')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-28" style={{ backgroundColor: '#0f2a1e' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
            <p className="leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Your financial future deserves a real conversation. Tell Peter what matters to
              you — no friction, just forward momentum.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {topics.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTopic(t.id)}
                  className="flex items-center justify-between p-4 rounded-xl border transition-all duration-200 cursor-pointer text-left"
                  style={{
                    backgroundColor: selectedTopic === t.id ? 'rgba(168,224,99,0.08)' : 'rgba(255,255,255,0.03)',
                    borderColor: selectedTopic === t.id ? 'rgba(168,224,99,0.4)' : 'rgba(255,255,255,0.07)',
                  }}
                >
                  <div>
                    <p className="font-semibold text-sm text-white">{t.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.description}</p>
                  </div>
                  {selectedTopic === t.id && <Check size={16} className="text-lime flex-shrink-0" />}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <a href="mailto:Peter.Long@iaprivatewealth.ca" className="flex items-center gap-3 text-sm transition-colors hover:text-lime" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <Mail size={16} className="text-lime/60" />
                Peter.Long@iaprivatewealth.ca
              </a>
              <a href="tel:+19053369544" className="flex items-center gap-3 text-sm transition-colors hover:text-lime" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <Phone size={16} className="text-lime/60" />
                905.336.9544 · TF: 1-800-289-6235
              </a>
              <div className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <MapPin size={16} className="text-lime/60 flex-shrink-0 mt-0.5" />
                1001, Champlain Avenue, Suite 201<br />Burlington, ON L7L 5Z4
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {['Name', 'Email', 'Phone'].map((label) => (
                <div key={label}>
                  <label className="text-xs tracking-wide uppercase mb-2 block" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    {label} {label === 'Phone' && <span className="normal-case" style={{ color: 'rgba(255,255,255,0.2)' }}>(optional)</span>}
                  </label>
                  <input
                    type={label === 'Email' ? 'email' : label === 'Phone' ? 'tel' : 'text'}
                    value={form[label.toLowerCase()]}
                    onChange={(e) => setForm({ ...form, [label.toLowerCase()]: e.target.value })}
                    required={label !== 'Phone'}
                    placeholder={label === 'Name' ? 'Your full name' : label === 'Email' ? 'your@email.com' : '(905) 555-0100'}
                    className="w-full border rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-colors"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', caretColor: '#a8e063' }}
                  />
                </div>
              ))}
              <div>
                <label className="text-xs tracking-wide uppercase mb-2 block" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  placeholder={`I'm interested in ${topics.find((t) => t.id === selectedTopic)?.label}...`}
                  className="w-full border rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-colors resize-none"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
                />
              </div>
              <button
                type="submit"
                className="w-full font-bold py-4 rounded-xl transition-all text-sm mt-2"
                style={{ backgroundColor: '#a8e063', color: '#0f2a1e' }}
              >
                Send Message to Peter
              </button>
            </form>

            <p className="text-xs leading-relaxed mt-6" style={{ color: 'rgba(255,255,255,0.25)' }}>
              Peter Long is a Financial Advisor with IA Private Wealth. IA Securities Inc. is a
              member of the Canadian Investment Regulatory Organization (CIRO) and a member of
              the Canadian Investor Protection Fund (CIPF).
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
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
        <KeepMoving />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
