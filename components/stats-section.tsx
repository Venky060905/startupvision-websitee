"use client"

import { useEffect, useRef, useState } from "react"
import { BadgeCheck, ShieldCheck, HandCoins, Megaphone, Rocket } from "lucide-react"

export function StatsSection() {
  const [progress, setProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)

  const steps = [
    { label: "Registration", icon: <BadgeCheck size={20} /> },
    { label: "Certification", icon: <ShieldCheck size={20} /> },
    { label: "Funding", icon: <HandCoins size={20} /> },
    { label: "Marketing", icon: <Megaphone size={20} /> },
    { label: "Compliances", icon: <Rocket size={20} /> },
  ]

  // ⭐ Animated line + step sync (infinite loop)
  useEffect(() => {
    let p = 0
    const interval = setInterval(() => {
      p += 1
      if (p > 100) p = 0
      setProgress(p)

      const stepSize = 100 / steps.length
      const index = Math.floor(p / stepSize)
      setActiveIndex(index)
    }, 28)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-[#eef6ff] via-[#fafdff] to-[#e5f3ff] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-25 -z-10 bg-[url('https://i.imgur.com/OgSPrhN.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 opacity-15 -z-10 bg-[url('https://i.imgur.com/4NJlD2z.png')] bg-repeat"></div>

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#002c43] mb-12">
          Your Startup Growth Journey — At a Glance
        </h2>

        {/* ⭐ Animated Line */}
        <div className="relative w-full h-3 bg-gray-300 rounded-full mb-20 overflow-hidden shadow-inner">
          {/* moving neon gradient line */}
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r 
            from-blue-600 via-cyan-400 to-blue-700 rounded-full 
            shadow-[0_0_12px_rgba(0,150,255,0.7)] transition-all duration-75"
            style={{ width: `${progress}%` }}
          ></div>

          {/* moving glowing dot */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-700 
            shadow-[0_0_15px_rgba(0,150,255,0.9)] transition-all duration-75"
            style={{ left: `calc(${progress}% - 12px)` }}
          ></div>
        </div>

        {/* ⭐ 5 Step Icons */}
        <div className="flex justify-between items-start mb-20">
          {steps.map((step, index) => {
            const isActive = activeIndex === index

            return (
              <div key={index} className="flex flex-col items-center w-full select-none">

                {/* Icon Circle */}
                <div
                  className={`
                    w-14 h-14 rounded-full flex items-center justify-center border-2 
                    transition-all duration-500
                    ${isActive 
                      ? "bg-blue-600 text-white border-blue-600 scale-110 shadow-xl shadow-blue-300/40" 
                      : "bg-white text-gray-400 border-gray-300"
                    }
                  `}
                >
                  {step.icon}
                </div>

                {/* Label */}
                <span
                  className={`mt-3 text-sm font-semibold transition-all duration-500 
                  ${isActive ? "text-blue-700" : "text-gray-600"}`}
                >
                  {step.label}
                </span>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
