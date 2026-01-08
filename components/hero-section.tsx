"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
      bg-gradient-to-r from-[#0a1a2f] to-[#1b263b] text-white"
    >
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-blue-600/30 to-cyan-400/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-gradient-to-tr from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE WITH IMAGES */}
          <div
            className={`relative h-72 md:h-[460px] min-h-[300px] min-w-auto mt-10 pb-10 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative w-full h-full flex items-center justify-center rounded-3xl overflow-hidden">

              {/* MAIN HERO IMAGE */}
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
                alt="Startup Vision Hero"
                fill
                className="object-cover opacity-90 animate-zoom-slow"
                priority
              />

              {/* INDIA TECH OVERLAY */}
              <Image
                src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=1600&q=80"
                alt="India Tech Overlay"
                fill
                className="object-cover opacity-10 animate-glow"
              />

            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-400/20">
              <span className="text-sm font-semibold text-blue-300">
                ★ India’s Leading Startup Growth Partner
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Innovate. Grow. <span className="text-blue-400">Prosper.</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Startup Vision empowers entrepreneurs with end-to-end support—
              Documentation, Startup India Certificate, Funding Access, Pitch Deck Creation,
              Investor Meetings, and Digital Branding.
              Your journey from Idea → Growth → Success starts here.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* TALK TO EXPERT */}
              <a 
                href="#contact"
                className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold
                hover:bg-white hover:text-black transition-all flex items-center gap-2 justify-center"
              >
                Talk to an Expert
                <ArrowRight size={18} />
              </a>

              {/* GET STARTUP INDIA CERTIFICATE */}
              <a 
                href="#contact"
                className="px-8 py-4 rounded-lg bg-blue-500 text-black font-semibold 
                hover:bg-blue-400 transition-all flex items-center justify-center"
              >
                Get Startup India Certificate
              </a>

            </div>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
              <div>
                <div className="text-3xl font-bold text-blue-400">1000+</div>
                <div className="text-xs text-gray-400">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">1</div>
                <div className="text-xs text-gray-400">Active Offices</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">100%</div>
                <div className="text-xs text-gray-400">Transparency</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
