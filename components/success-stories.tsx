"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function SuccessStories() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const ref = useRef(null)

  // ---------------------
  // INTERSECTION OBSERVER
  // ---------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // ---------------------
  // SUCCESS STORIES DATA
  // ---------------------
  const stories = [
    {
      company: "TechStartup India",
      founder: "Rajesh Kumar",
      before: "₹0 Revenue",
      after: "₹5 Cr Revenue",
      growth: "+400%",
      description: "From idea to unicorn-backed startup in 18 months",
    },
    {
      company: "FoodTech Innovators",
      founder: "Priya Sharma",
      before: "5 Employees",
      after: "150 Employees",
      growth: "+2900%",
      description: "Expanded across 15 cities with our support",
    },
    {
      company: "Green Energy Solutions",
      founder: "Arun Patel",
      before: "₹2 Cr Revenue",
      after: "₹20 Cr Revenue",
      growth: "+900%",
      description: "Raised ₹50 Cr series funding",
    },
    {
      company: "AgriTech Platform",
      founder: "Neha Singh",
      before: "1 State",
      after: "15 States",
      growth: "+1400%",
      description: "Impacted 50,000+ farmers",
    },
    {
      company: "EduNext Learning",
      founder: "Mehul Shah",
      before: "200 Students",
      after: "20,000+ Students",
      growth: "+9800%",
      description: "Scaled using digital education platform strategies",
    },
    {
      company: "HealthCare AI Labs",
      founder: "Sonal Jain",
      before: "Prototype Only",
      after: "Full SaaS Product",
      growth: "+1200%",
      description: "Got incubated & raised seed funding",
    },
    {
      company: "FinTech Boosters",
      founder: "Irfan Qureshi",
      before: "No Users",
      after: "2 Lakh+ Users",
      growth: "+20000%",
      description: "Acquired by a leading payment company",
    },
    {
      company: "Logistics Pro Network",
      founder: "Kartik Verma",
      before: "1 Warehouse",
      after: "22 Warehouses",
      growth: "+2100%",
      description: "National expansion with automated tracking systems",
    },
  ]

  // ---------------------
  // AUTO-SCROLL EVERY 4 SEC
  // ---------------------
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused, stories.length])

  // ---------------------
  // NAVIGATION CONTROLS
  // ---------------------
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length)
  }

  return (
    <section
      id="stories"
      ref={ref}
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            See how startups and businesses have thrived with StartupVision
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {stories.map((story, index) => (
                <div
                  key={index}
                  className="min-w-full p-8 md:p-12 bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Before/After Stats */}
                    <div className="flex flex-col justify-center gap-8">
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">Before</div>
                        <div className="text-3xl font-bold text-foreground">{story.before}</div>
                      </div>
                      <div className="h-1 w-12 bg-gradient-to-r from-accent to-primary"></div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">After</div>
                        <div className="text-3xl font-bold text-accent">{story.after}</div>
                      </div>
                    </div>

                    {/* Story Text */}
                    <div>
                      <div className="text-2xl font-bold text-accent mb-2">{story.growth}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {story.company}
                      </h3>
                      <p className="text-muted-foreground mb-4">Founded by {story.founder}</p>
                      <p className="text-lg text-foreground font-semibold">{story.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-accent text-accent-foreground hover:shadow-soft transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? "bg-accent w-8" : "bg-muted w-2"
                  }`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-accent text-accent-foreground hover:shadow-soft transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
