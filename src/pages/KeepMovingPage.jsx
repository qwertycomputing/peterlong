import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Award,
  Heart,
  Users,
  TrendingUp,
  Flame,
  Mail,
  Phone,
  MapPin,
  Check,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'

// ─── Hero ─────────────────────────────────────────────────────────────────────
function KMHero() {
  return (
    <section className="relative min-h-screen bg-deep-velocity flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69f21c09404e88be8afea430/b8adc67fc_generated_image.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-velocity/60 via-deep-velocity/40 to-deep-velocity" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-24">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-silver/50 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>

        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="w-6 h-px bg-lime" />
            <span className="text-lime text-xs font-semibold tracking-widest uppercase">
              Where Health Meets Wealth
            </span>
          </motion.div>

          {/* H1 */}
          <div className="mb-6">
            {['KEEP', 'MOVING'].map((word, i) => (
              <motion.div
                key={word}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h1
                  className={`text-[clamp(64px,12vw,120px)] font-black leading-none tracking-tight ${
                    i === 0 ? 'text-white' : 'text-lime'
                  }`}
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {word}
                </h1>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-silver/80 font-semibold mb-6"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            The Advocacy Approach to Financial Planning
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-silver/60 text-lg leading-relaxed max-w-2xl"
          >
            For over 38 years, one principle has guided our practice: true prosperity requires
            both robust health and sound financial planning. Wealth without wellness is
            fundamentally incomplete.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

// ─── Legacy ───────────────────────────────────────────────────────────────────
function Legacy() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-lime" />
              <span className="text-lime text-xs font-semibold tracking-widest uppercase">
                Our Legacy
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black text-deep-velocity leading-tight mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              A Legacy Built on
              <br />
              Trust and Tenure
            </h2>
            <div className="flex flex-col gap-5 text-deep-velocity/60 text-sm leading-relaxed">
              <p>
                For 38 years, Peter Long has guided clients through life's most meaningful
                financial milestones — not just as an advisor, but as a trusted advocate for
                their total wellbeing.
              </p>
              <p>
                What sets our team apart is the remarkable continuity of service. Sandra
                Bridgwater has been an integral part of the team for 32 years. Shari Rogers and
                Kim Kingston each bring 26+ years of dedication. Kyle brings 30 years of
                experience, and Mike an exceptional 49 years in the industry.
              </p>
              <p>
                This depth of tenure isn't accidental — it reflects a culture of care, purpose,
                and a shared belief that relationships built on trust create extraordinary
                outcomes for the people we serve.
              </p>
            </div>
          </FadeIn>

          {/* Right: Stats box */}
          <FadeIn delay={0.15}>
            <div className="bg-deep-velocity rounded-2xl p-10 border border-white/5">
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <p
                    className="text-6xl font-black text-lime mb-2"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    38
                  </p>
                  <p className="text-white font-semibold text-lg">Years Leading</p>
                  <p className="text-silver/50 text-sm mt-1">
                    Peter's practice has guided clients since 1988
                  </p>
                </div>
                <div className="border-t border-white/5 pt-8">
                  <p
                    className="text-6xl font-black text-lime mb-2"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    115+
                  </p>
                  <p className="text-white font-semibold text-lg">Team Years</p>
                  <p className="text-silver/50 text-sm mt-1">
                    Combined experience across our dedicated team
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ─── Walking the Walk ─────────────────────────────────────────────────────────
function WalkingTheWalk() {
  const items = [
    {
      title: 'Boxing for Mental Clarity',
      img: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=600&q=80',
      body: 'Training in the ring develops discipline, focus, and resilience — qualities that translate directly into how Peter approaches complex financial challenges and market volatility.',
    },
    {
      title: 'Hiking for Perspective',
      img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80',
      body: 'As a Bruce Trail and Conservation Halton member, Peter finds that the long view on a trail mirrors the long view in financial planning — patience, endurance, and the reward of the journey.',
    },
    {
      title: 'Art for Inspiration',
      img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
      body: "Engaging with art cultivates appreciation for different perspectives and creative thinking — essential qualities for an advisor who helps clients see what's possible beyond the numbers.",
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-lime" />
            <span className="text-lime text-xs font-semibold tracking-widest uppercase">
              Personal Commitment
            </span>
            <div className="w-6 h-px bg-lime" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-deep-velocity leading-tight"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Walking the Walk:
            <br />A Personal Commitment to Wellness
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12}>
              <div className="group">
                <div className="overflow-hidden rounded-2xl mb-5 h-56">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  className="text-lg font-black text-deep-velocity mb-3"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-deep-velocity/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Keep Moving Campaign ─────────────────────────────────────────────────────
function KeepMovingCampaign() {
  const benefits = [
    'Exclusive "Keep Moving" badge celebrating your commitment',
    'Monthly newsletter with practical health and wealth insights',
    'Simple progress tracking tools (no complicated technology required)',
    'Video inspiration from our team\'s wellness journey',
    'Community connection with like-minded individuals',
  ]

  return (
    <section className="bg-deep-velocity py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-lime" />
              <span className="text-lime text-xs font-semibold tracking-widest uppercase">
                Our Signature Campaign
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Introducing
              <br />
              <span className="text-lime">"Keep Moving"</span>
            </h2>

            <div className="flex flex-col gap-4 text-silver/60 text-sm leading-relaxed mb-10">
              <p>
                Keep Moving is more than a campaign — it's a philosophy. It's the belief that
                physical movement and financial momentum are deeply intertwined. When you commit
                to moving your body, you develop the same discipline, consistency, and resilience
                that builds lasting wealth.
              </p>
              <p>
                We've seen this firsthand with hundreds of clients over 38 years: those who
                prioritize their health tend to make better long-term financial decisions. They're
                more patient, more disciplined, and more focused on what truly matters.
              </p>
            </div>

            <div className="mb-10">
              <p
                className="text-white font-bold text-sm mb-5"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                What You'll Receive
              </p>
              <ul className="flex flex-col gap-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-silver/60 text-sm">
                    <Check size={14} className="text-lime mt-0.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://stride-global-path.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-lime text-deep-velocity font-bold px-8 py-4 rounded-full hover:bg-lime/90 transition-all text-sm"
            >
              Join the Movement
            </a>
          </FadeIn>

          {/* Right: Image */}
          <FadeIn delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=700&q=80"
                alt="Keep Moving"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-velocity/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <p
                    className="text-white font-black text-xl mb-1"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    Move with purpose.
                  </p>
                  <p className="text-lime/70 text-sm">Every step counts — in life and in wealth.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ─── Future is Advocacy ───────────────────────────────────────────────────────
function FutureAdvocacy() {
  const cards = [
    {
      icon: <Heart size={20} />,
      title: 'Healthcare Navigation',
      body: 'Medical decisions increasingly intersect with financial planning. We help clients navigate the growing complexity of healthcare costs, benefits optimization, and long-term care planning.',
    },
    {
      icon: <Users size={20} />,
      title: 'Elder Care Guidance',
      body: 'As populations age, families need trusted advisors to navigate care options, housing transitions, and the financial implications of supporting aging loved ones.',
    },
    {
      icon: <Flame size={20} />,
      title: 'Mental & Spiritual Wellbeing',
      body: 'Financial stress profoundly impacts mental health. True advocacy addresses emotional wellness alongside financial strategy, creating plans that support your whole self.',
    },
    {
      icon: <TrendingUp size={20} />,
      title: 'Financial Care Integration',
      body: 'Investment strategy means little without context. We integrate financial decisions with life goals, health realities, and personal values for truly holistic outcomes.',
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-lime" />
            <span className="text-lime text-xs font-semibold tracking-widest uppercase">
              A New Paradigm
            </span>
            <div className="w-6 h-px bg-lime" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-deep-velocity leading-tight"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            The Future is Advocacy:
            <br />A New Paradigm
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.1}>
              <div className="bg-slate-50 rounded-2xl p-7 h-full border border-slate-100 hover:border-lime/30 transition-all duration-300">
                <div className="text-lime mb-4">{c.icon}</div>
                <h3
                  className="text-deep-velocity font-black text-base mb-3"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-deep-velocity/60 text-sm leading-relaxed">{c.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Quote */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-lime text-6xl font-black leading-none mb-6 select-none" style={{ fontFamily: "'Inter Tight', sans-serif" }}>"</div>
            <p className="text-deep-velocity/70 text-xl leading-relaxed italic mb-6">
              People need someone to guide them through life's monumental transitions — not just
              financial transactions. That's what advocacy means to us.
            </p>
            <span className="text-lime/60 text-sm font-semibold">— Peter Long, CFP®</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Beyond Transactions ──────────────────────────────────────────────────────
function BeyondTransactions() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-lime" />
            <span className="text-lime text-xs font-semibold tracking-widest uppercase">
              A Philosophy of Giving
            </span>
            <div className="w-6 h-px bg-lime" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-deep-velocity leading-tight"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Beyond Transactions:
            <br />A Philosophy of Giving
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Stats */}
          <FadeIn>
            <div className="bg-deep-velocity rounded-2xl p-10 border border-white/5">
              <p
                className="text-5xl font-black text-lime mb-2"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                $1.25M+
              </p>
              <p className="text-white font-semibold text-lg mb-2">Charitable Giving</p>
              <p className="text-silver/50 text-sm leading-relaxed">
                Over 38 years, Peter and his team have been dedicated supporters of causes that
                align with their belief in community, education, and human potential.
              </p>
            </div>
          </FadeIn>

          {/* Right: Content */}
          <FadeIn delay={0.15}>
            <div className="flex flex-col gap-10">
              <div>
                <h3
                  className="text-deep-velocity font-black text-lg mb-3"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Long-Term Mentorship: The Ghana Connection
                </h3>
                <p className="text-deep-velocity/60 text-sm leading-relaxed">
                  For 27+ years, Peter has maintained a meaningful mentorship with a student in
                  Ghana, supporting their education and growth. This relationship exemplifies the
                  long-term thinking that defines everything we do — investment in human potential
                  that pays dividends across generations.
                </p>
              </div>
              <div>
                <h3
                  className="text-deep-velocity font-black text-lg mb-3"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Educational Resources: Knowledge That Empowers
                </h3>
                <p className="text-deep-velocity/60 text-sm leading-relaxed">
                  From the Health–Wealth Integration Series developed for McMaster, Mohawk &
                  Sheridan colleges, to the free first chapter of <em>On Time Retirement</em>,
                  Peter believes that financial literacy is a gift anyone can give.
                </p>
              </div>
              <div>
                <h3
                  className="text-deep-velocity font-black text-lg mb-3"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Multi-Generational Wisdom: Our Team Advantage
                </h3>
                <p className="text-deep-velocity/60 text-sm leading-relaxed">
                  Our team spans multiple generations, bringing diverse perspectives that help
                  us serve clients at every stage of life. This isn't just business strategy —
                  it's a reflection of our belief that wisdom grows through continuity and care.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ─── Team Section ─────────────────────────────────────────────────────────────
function KMTeam() {
  const team = [
    {
      name: 'Sandra Bridgwater',
      title: 'Licensed Assistant · 32 Years',
      email: 'sandra.bridgwater@ia.ca',
      img: 'https://images.squarespace-cdn.com/content/v1/5fa94b47d64dd91bd77c833e/1631636042639-9XKSHYAOUB9GO7M1NCGT/CPCo-8250.jpg',
    },
    {
      name: 'Kim Kingston',
      title: 'Administrative Assistant · 26+ Years',
      email: 'kim.kingston@ia.ca',
      img: 'https://images.squarespace-cdn.com/content/v1/5fa94b47d64dd91bd77c833e/1631636069530-FGHCBYG3MOFYH2341IOD/CPCo-8251.jpg',
    },
    {
      name: 'Shari Rogers',
      title: 'Licensed Assistant · 26+ Years',
      email: 'shari.rogers@ia.ca',
      img: 'https://images.squarespace-cdn.com/content/v1/5fa94b47d64dd91bd77c833e/1631636094486-2NCVWZ5URNILKIDT21AP/CPCo-8273.jpg',
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px bg-lime" />
            <span className="text-lime text-xs font-semibold tracking-widest uppercase">
              The Team
            </span>
            <div className="w-6 h-px bg-lime" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-deep-velocity leading-tight mb-6"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Multi-Generational Wisdom:
            <br />Our Team Advantage
          </h2>
          <p className="text-deep-velocity/60 max-w-2xl mx-auto leading-relaxed">
            Effective advocacy requires diverse perspectives. Our team intentionally spans
            generations, ensuring every client benefits from both deep experience and fresh
            thinking.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.12}>
              <div className="group text-center">
                <div className="overflow-hidden rounded-2xl mb-5 h-72">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>
                <h4
                  className="text-deep-velocity font-black text-base mb-1"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {member.name}
                </h4>
                <p className="text-deep-velocity/50 text-xs mb-2">{member.title}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-lime/70 hover:text-lime text-xs transition-colors"
                >
                  {member.email}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA / Contact ────────────────────────────────────────────────────────────
function KMCTA() {
  return (
    <section className="bg-deep-velocity py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2
              className="text-4xl md:text-5xl font-black text-white leading-tight mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Begin Your
              <br />
              <span className="text-lime">Advocacy Journey</span>
            </h2>

            {/* Contact block */}
            <div className="bg-card rounded-2xl p-8 border border-white/5 mb-8 text-left">
              <p
                className="text-white font-black text-lg mb-0.5"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Peter Long
              </p>
              <p className="text-silver/50 text-sm mb-6">
                BA, CFP® · Director, Private Client Group · Investment Advisor
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3 text-silver/60 text-sm">
                  <MapPin size={15} className="text-lime/60 flex-shrink-0 mt-0.5" />
                  <span>
                    1235 North Shore Blvd E, Suite 400
                    <br />
                    Burlington, ON L7S 2H8
                  </span>
                </div>
                <a
                  href="tel:9059457200"
                  className="flex items-center gap-3 text-silver/60 hover:text-lime transition-colors text-sm"
                >
                  <Phone size={15} className="text-lime/60" />
                  (905) 945-7200
                </a>
                <a
                  href="mailto:peter.long@ia.ca"
                  className="flex items-center gap-3 text-silver/60 hover:text-lime transition-colors text-sm"
                >
                  <Mail size={15} className="text-lime/60" />
                  peter.long@ia.ca
                </a>
              </div>
            </div>

            <p className="text-silver/50 italic text-sm mb-10 leading-relaxed">
              "Let's explore whether we're the right advocates for your health and wealth journey."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://stride-global-path.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime text-deep-velocity font-bold px-8 py-4 rounded-full hover:bg-lime/90 transition-all text-sm"
              >
                Launch Earth Stride
              </a>
              <a
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = '/#contact'
                }}
                className="border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:border-white/40 hover:bg-white/5 transition-all text-sm"
              >
                Say Hello
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ─── Keep Moving Page ─────────────────────────────────────────────────────────
export default function KeepMovingPage() {
  return (
    <>
      <Navbar />
      <main>
        <KMHero />
        <Legacy />
        <WalkingTheWalk />
        <KeepMovingCampaign />
        <FutureAdvocacy />
        <BeyondTransactions />
        <KMTeam />
        <KMCTA />
      </main>
      <Footer />
    </>
  )
}
