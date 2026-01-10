"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle } from "lucide-react"

export function GrowthJourney() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  // Parallax ref
  const whoWeAreBgRef = useRef<HTMLDivElement | null>(null)

  /* ----------------------------------
     FIX 1: FORCE VISIBILITY ON MOBILE
  ---------------------------------- */
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      setVisible(true)
    }
  }, [])

  /* ----------------------------------
     FIX 2: MOBILE SAFE OBSERVER
  ---------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  /* ----------------------------------
     FIX 3: DISABLE PARALLAX ON MOBILE
  ---------------------------------- */
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return

    const handleScroll = () => {
      if (!whoWeAreBgRef.current) return
      const offset = window.scrollY * 0.25
      whoWeAreBgRef.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* ----------------------------------
     CARD COMPONENT
  ---------------------------------- */
  const Card = ({ title, desc, img, delay }: any) => (
    <div
      className={`
        p-6 sm:p-7 md:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm
        transition-all duration-500 cursor-pointer
        hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 hover:bg-blue-50/40
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={img}
        alt={title}
        className="w-10 h-10 sm:w-12 sm:h-12 mb-4 opacity-90"
      />
      <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  )

  return (
    <section ref={ref} className="py-20 sm:py-24 relative overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-10 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/backgrounds/choose-bg.jpg')" }}
      />
      <div className="absolute inset-0 opacity-15 -z-10 bg-[url('https://i.imgur.com/4NJlD2z.png')] bg-repeat" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* WHY CHOOSE */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#002c43] mb-10 sm:mb-12">
          Why Choose <span className="text-blue-600">Startup Vision?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16 sm:mb-20">
          <Card img="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" title="Trusted Partnership" desc="We build long-term collaborations and act as part of your internal team." delay={100} />
          <Card img="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" title="Growth-Centric Approach" desc="We ensure scalable long-term growth." delay={200} />
          <Card img="https://cdn-icons-png.flaticon.com/512/535/535239.png" title="India Market Focus" desc="Deep understanding of India's regulatory landscape." delay={300} />
          <Card img="https://cdn-icons-png.flaticon.com/512/992/992700.png" title="Fast-Track Processes" desc="Accelerated documentation & execution." delay={400} />
          <Card img="https://cdn-icons-png.flaticon.com/512/2942/2942924.png" title="Funding & Scaling" desc="Investor readiness & growth strategy." delay={500} />
          <Card img="https://cdn-icons-png.flaticon.com/512/4228/4228734.png" title="360° Support" desc="From compliance to branding." delay={600} />
        </div>

        {/* WHO WE ARE */}
        <div className="relative rounded-3xl overflow-hidden py-16 sm:py-20 px-4 sm:px-6 mb-16 sm:mb-20">
          <div
            ref={whoWeAreBgRef}
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 -z-10 bg-white/60 backdrop-blur-sm" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#002c43] mb-6 sm:mb-8">
            Who We Are: Your <span className="text-blue-600">Strategic Growth Partner</span>
          </h2>

          <p className="max-w-3xl mx-auto text-center text-gray-700 mb-10 sm:mb-12 text-sm sm:text-base">
            End-to-end startup support including compliance, funding, branding,
            pitch decks, and technical solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card img="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" title="Expert Team" desc="CAs, CFAs, Lawyers & Analysts." delay={150} />
            <Card img="https://cdn-icons-png.flaticon.com/512/4359/4359963.png" title="Holistic Support" desc="From registration to execution." delay={250} />
            <Card img="https://cdn-icons-png.flaticon.com/512/2329/2329087.png" title="Reliable Execution" desc="Fast, transparent, reliable." delay={350} />
          </div>
        </div>

        {/* STARTUP INDIA BENEFITS */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#002c43] mb-10 sm:mb-12">
          Startup India Certificate Benefits
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16 sm:mb-20">
          <Card img="https://cdn-icons-png.flaticon.com/512/1040/1040221.png" title="Govt Benefits" desc="Exclusive startup schemes." delay={150} />
          <Card img="https://cdn-icons-png.flaticon.com/512/4689/4689789.png" title="Incubators" desc="Access investors & incubators." delay={250} />
          <Card img="https://cdn-icons-png.flaticon.com/512/2983/2983731.png" title="Tax Exemptions" desc="3-year tax holiday." delay={350} />
          <Card img="https://cdn-icons-png.flaticon.com/512/475/475674.png" title="Recognition" desc="National startup recognition." delay={450} />
        </div>

        {/* SERVICES */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#002c43] mb-10 sm:mb-12">
          Comprehensive Services for Every Startup
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Card img="https://cdn-icons-png.flaticon.com/512/942/942748.png" title="Documentation" desc="Legal & compliance services." delay={100} />
          <Card img="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" title="Funding" desc="Pitch decks & valuations." delay={150} />
          <Card img="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" title="Branding" desc="Logo, website & SEO." delay={200} />
          <Card img="https://cdn-icons-png.flaticon.com/512/3135/3135712.png" title="Brand Strategy" desc="Positioning & identity." delay={250} />
          <Card img="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" title="Social Media" desc="Growth & engagement." delay={300} />
          <Card img="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" title="Video Editing" desc="Reels & ads." delay={350} />
          <Card img="https://cdn-icons-png.flaticon.com/512/1829/1829589.png" title="Mobile Apps" desc="Android & iOS." delay={400} />
          <Card img="https://cdn-icons-png.flaticon.com/512/4144/4144795.png" title="Cloud Setup" desc="AWS / GCP." delay={450} />
          <Card img="https://cdn-icons-png.flaticon.com/512/1048/1048942.png" title="Tech Support" desc="Maintenance & debugging." delay={500} />
        </div>
      </div>
    </section>
  )
}
