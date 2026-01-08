"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle } from "lucide-react"

export function GrowthJourney() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  // Parallax ref for WHO WE ARE section
  const whoWeAreBgRef = useRef<HTMLDivElement | null>(null)

  // Fade/slide-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // PARALLAX EFFECT HANDLER
  useEffect(() => {
    const handleScroll = () => {
      if (!whoWeAreBgRef.current) return
      const offset = window.scrollY * 0.25 // adjust speed here
      whoWeAreBgRef.current.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Card Component
  const Card = ({ title, desc, img, delay }: any) => (
    <div
      className={`
        p-8 rounded-2xl bg-white border border-gray-200 shadow-sm
        transition-all duration-500 cursor-pointer
        hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 hover:bg-blue-50/40
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img src={img} className="w-12 h-12 mb-4 opacity-90" />
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  )

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">

      {/* 🔥 FIXED BACKGROUND — using your REAL file */}
      <div
        className="absolute inset-0 -z-10 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/backgrounds/choose-bg.jpg')" }}
      ></div>

      {/* Dot Pattern Layer */}
      <div className="absolute inset-0 opacity-15 -z-10 bg-[url('https://i.imgur.com/4NJlD2z.png')] bg-repeat"></div>

      {/* Soft White Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto px-4">

        {/* ============================= */}
        {/* WHY CHOOSE STARTUP VISION     */}
        {/* ============================= */}

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#002c43] mb-12">
          Why Choose <span className="text-blue-600">Startup Vision?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <Card img="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" title="Trusted Partnership" desc="We build long-term collaborations and act as part of your internal team." delay={100} />
          <Card img="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" title="Growth-Centric Approach" desc="We not only help you launch but ensure scalable long-term growth." delay={200} />
          <Card img="https://cdn-icons-png.flaticon.com/512/535/535239.png" title="India Market Focus" desc="Deep understanding of India's regulatory landscape." delay={300} />
          <Card img="https://cdn-icons-png.flaticon.com/512/992/992700.png" title="Fast-Track Processes" desc="Quick and accurate documentation to accelerate your startup journey." delay={400} />
          <Card img="https://cdn-icons-png.flaticon.com/512/2942/2942924.png" title="Funding & Scaling Expertise" desc="Guidance for investor readiness and growth strategy." delay={500} />
          <Card img="https://cdn-icons-png.flaticon.com/512/4228/4228734.png" title="360° Startup Support" desc="Complete support from documentation to branding." delay={600} />
        </div>

        {/* ============================= */}
        {/* WHO WE ARE — WITH PARALLAX   */}
        {/* ============================= */}

        <div className="relative rounded-3xl overflow-hidden py-20 px-6 mb-20">

          {/* 🌟 PARALLAX BACKGROUND FIXED HERE */}
          <div
            ref={whoWeAreBgRef}
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-30 will-change-transform"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=80')",
            }}
          ></div>

          {/* Readability Overlay */}
          <div className="absolute inset-0 -z-10 bg-white/60 backdrop-blur-sm"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#002c43] mb-8">
            Who We Are: Your <span className="text-blue-600">Strategic Growth Partner</span>
          </h2>

          <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12">
            We understand the challenges faced by early-stage founders. Startup Vision offers
            end-to-end support including compliance, funding, pitch decks, growth strategy,
            branding, and technical solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card img="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" title="Expert Team" desc="CAs, CFAs, Lawyers & Analysts offering unmatched professional support." delay={150} />
            <Card img="https://cdn-icons-png.flaticon.com/512/4359/4359963.png" title="Holistic Startup Support" desc="From registration to execution, we assist at every step." delay={250} />
            <Card img="https://cdn-icons-png.flaticon.com/512/2329/2329087.png" title="Reliable Execution" desc="Fast, transparent, and reliable processes designed for startup growth." delay={350} />
          </div>
        </div>

        {/* ============================= */}
        {/* STARTUP INDIA BENEFITS        */}
        {/* ============================= */}

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#002c43] mb-12">
          Startup India Certificate Benefits
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <Card img="https://cdn-icons-png.flaticon.com/512/1040/1040221.png" title="Government Benefits" desc="Access exclusive startup schemes & financial support." delay={150} />
          <Card img="https://cdn-icons-png.flaticon.com/512/4689/4689789.png" title="Incubator & Funding Access" desc="Direct access to incubation centers & investors." delay={250} />
          <Card img="https://cdn-icons-png.flaticon.com/512/2983/2983731.png" title="Tax Exemptions" desc="Up to 3-year income tax holiday for eligible startups." delay={350} />
          <Card img="https://cdn-icons-png.flaticon.com/512/475/475674.png" title="National Recognition" desc="Become an officially recognized innovative startup." delay={450} />
        </div>

        {/* ============================= */}
        {/* SERVICES GRID                */}
        {/* ============================= */}

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#002c43] mb-12">
          Comprehensive Services for Every Startup
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <Card img="https://cdn-icons-png.flaticon.com/512/942/942748.png" title="Documentation & Registration" desc="Complete legal, compliance, and registration services to formalize your startup." delay={100} />

          <Card img="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" title="Funding & Growth" desc="Pitch deck creation, valuations, investor grooming, and incubator connections." delay={150} />

          <Card img="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" title="Branding & Digital" desc="Logo design, website creation, SEO, content strategy, and digital visibility." delay={200} />

          <Card img="https://cdn-icons-png.flaticon.com/512/3135/3135712.png" title="Brand Strategy & Positioning" desc="Defining your unique brand identity & positioning." delay={250} />

          <Card img="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" title="Social Media Management" desc="Creating engaging content, managing accounts & growing your audience." delay={300} />

          <Card img="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" title="Video Editing & Reels Creation" desc="High-quality video ads & marketing visuals." delay={350} />

          <Card img="https://cdn-icons-png.flaticon.com/512/1829/1829589.png" title="Mobile App Development" desc="Android & iOS app development for startups." delay={400} />

          <Card img="https://cdn-icons-png.flaticon.com/512/4144/4144795.png" title="Cloud & Server Setup" desc="AWS/GCP setup, hosting, deployment & optimization." delay={450} />

          <Card img="https://cdn-icons-png.flaticon.com/512/1048/1048942.png" title="Technical Support & Troubleshooting" desc="Maintenance, debugging & performance improvements." delay={500} />

        </div>

      </div>
    </section>
  )
}
