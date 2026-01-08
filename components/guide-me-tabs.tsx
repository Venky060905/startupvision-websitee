"use client"

import { useState, useEffect, useRef } from "react"
import { Rocket, Lightbulb, TrendingUp, Shield, ArrowRight } from "lucide-react"

export function GuideMeTabs() {
  const [activeTab, setActiveTab] = useState("start")
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  /* ---------------- Intersection Animation ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  /* ---------------- Tabs ---------------- */
  const tabs = [
    { id: "start", label: "Start New", icon: <Lightbulb size={18} /> },
    { id: "market", label: "Market Me", icon: <TrendingUp size={18} /> },
    { id: "fund", label: "Fund Me", icon: <Rocket size={18} /> },
    { id: "protect", label: "Protect Me", icon: <Shield size={18} /> },
  ]

  /* ---------------- Content ---------------- */
  const tabContent: Record<
    string,
    { title: string; items: string[]; cta: string; bg: string }
  > = {
    start: {
      title: "Build your startup on a strong foundation",
      items: [
        "Startup India (DPIIT) Certificate",
        "Company Registration (OPC / LLP / Pvt Ltd)",
        "GST, MSME, FSSAI & IEC",
        "Pitch Deck & Business Model Setup",
      ],
      cta: "Start My Startup",
      bg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    market: {
      title: "Make your brand visible & trusted",
      items: [
        "Digital Marketing (SEO, Ads, SMO)",
        "Brand Identity & Positioning",
        "Social Media Growth Strategy",
        "Market & Competitor Research",
      ],
      cta: "Market My Startup",
      bg: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    },
    fund: {
      title: "Prepare & raise funds confidently",
      items: [
        "Angel & VC Investor Connections",
        "Pitch Deck & Financial Valuation",
        "Funding Readiness Grooming",
        "Government Grants & Schemes",
      ],
      cta: "Get Funding Help",
      bg: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    },
    protect: {
      title: "Secure your business legally & financially",
      items: [
        "Legal Compliance & Documentation",
        "Trademark & Patent Registration",
        "Tax Planning & ITR Filing",
        "Startup Risk Management",
      ],
      cta: "Protect My Business",
      bg: "https://images.unsplash.com/photo-1581092160607-ee67f55b71d2",
    },
  }

  const content = tabContent[activeTab]

  const navigateToContact = (intent: string) => {
    try {
      const url = new URL(window.location.href)
      url.searchParams.set("intent", intent)
      window.history.replaceState({}, "", url.toString())
    } catch (e) {
      // ignore
    }

    const el = document.getElementById("contact")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={ref}
      className="py-28 bg-gradient-to-b from-[#f8fafc] to-[#eef4ff] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* ---------------- Header ---------------- */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#002c43] mb-4">
            Guide Me, <span className="text-blue-600">StartupVision</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us where you are in your journey — we’ll guide you step by step.
          </p>
        </div>

        {/* ---------------- Tabs ---------------- */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-7 py-3 rounded-xl flex items-center gap-2 font-semibold
                transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-xl scale-105"
                    : "bg-white text-[#1f2d3d] border border-gray-300 hover:border-blue-400"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ---------------- Content Card ---------------- */}
        <div
          className={`max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border
            transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="p-10 md:p-14 grid md:grid-cols-2 gap-12">

            {/* Left */}
            <div>
              <h3 className="text-2xl font-bold text-[#002c43] mb-6">
                {content.title}
              </h3>

              <ul className="space-y-4">
                {content.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-2 w-2 h-2 rounded-full bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - CTA with Background Image */}
            <div
              className="relative rounded-2xl p-8 flex flex-col justify-center text-white overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${content.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h4 className="text-xl font-semibold mb-4">
                Not sure where to start?
              </h4>
              <p className="mb-6 text-white/90">
                Our experts will personally guide you based on your startup stage.
              </p>

              {/* ✅ LINKS / ACTIONS TO CONTACT SECTION */}
              <button
                onClick={() => navigateToContact(activeTab)}
                className="flex items-center justify-center gap-1 px-3 py-2 w-1/2
                bg-blue-600 hover:bg-blue-700 text-white rounded-full
                font-semibold text-sm shadow-lg transition-all"
              >
                {content.cta}
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
