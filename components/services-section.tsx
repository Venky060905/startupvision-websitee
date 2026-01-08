"use client"

import { useEffect, useRef, useState } from "react"
import { FileText, TrendingUp, Palette, HandCoins } from "lucide-react"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "Documentation & Registration",
      icon: FileText,
      items: [
        "Startup India Certificate",
        "MSME Registration",
        "GST & Company Incorporation",
        "FSSAI & IEC",
        "Trademark & Patent",
        "ITR Filing",
      ],
      color: "from-blue-500/10 to-blue-600/10",
    },
    {
      title: "Funding & Growth",
      icon: TrendingUp,
      items: [
        "Pitch Deck Creation",
        "Valuation Services",
        "Investor Grooming",
        "Incubator Connections",
        "Bank DPR Preparation",
        "Negotiation Support",
      ],
      color: "from-accent/10 to-primary/10",
    },
    {
      title: "Branding & Digital",
      icon: Palette,
      items: [
        "Logo Design",
        "Website Development",
        "Digital Marketing",
        "Social Media Management",
        "UI/UX Design",
        "SEO & Email Marketing",
      ],
      color: "from-purple-500/10 to-pink-500/10",
    },

    /* ⭐ NEW FINANCE & LOANS SERVICE */
    {
      title: "Finance & Loans",
      icon: HandCoins,
      items: [
        "Working Capital Loans",
        "Mudra Loan (Shishu, Kishor, Tarun)",
        "CGTMSE Loan Assistance",
        "Project Report (DPR)",
        "Term Loan & OD/CC Support",
        "Subsidy-Based Government Schemes",
        "Financial Forecasting & Planning",
      ],
      color: "from-green-500/10 to-emerald-600/10",
    },
  ]

  return (
    <section id="services" ref={ref} className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Our Services</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive solutions to support your business journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${service.color} border border-accent/10 hover:shadow-soft transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } flex flex-col h-full`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent size={20} className="sm:w-6 sm:h-6 text-accent-foreground" />
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-4 sm:mb-6">{service.title}</h3>

                <ul className="space-y-2 sm:space-y-3 flex-grow">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-accent mt-1.5 sm:mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
