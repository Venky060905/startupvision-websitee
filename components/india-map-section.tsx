"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function IndiaMapSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  /* ---------------- Reveal on Scroll ---------------- */
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setIsVisible(true);
    });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  /* ---------------- Local incubator logos ---------------- */
  const logos = [
    "/images/aic.png",
    "/images/aim.png",
    "/images/msme.png",
    "/images/make-in-india.png",
    "/images/startup-india.png",
    "/images/finaag.png",
    "/images/nit.png",
    "/images/cii.png",
    "/images/ficci.png",
  ];

  /* ---------------- Scroll to Contact ---------------- */
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="incubation"
      className="py-24 bg-gradient-to-br from-blue via-[#eef3ff] to-[#e5e8ff]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT INDIA MAP ================= */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Image
            src="/images/india-map.png"
            alt="India Map"
            width={800}
            height={800}
            className="w-full opacity-100"
            priority
          />

          {/* Telangana Highlight */}
          
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            We have the
            <br />
            <span className="font-extrabold">
              Strongest network of
              <br />
              <em className="italic font-serif">Incubation centres</em>
            </span>{" "}
            in India
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Providing guidance across the nation with expert mentors, incubation partners,
            and industry-leading business development support.
          </p>

          {/* CTA */}
          <button
            onClick={scrollToContact}
            className="mt-8 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full shadow-lg transition"
          >
            Share Your Business Plan Today →
          </button>

          {/* ================= LOGOS (NO BOXES) ================= */}
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-8">
            {logos.map((src, i) => (
              <div
                key={i}
                className="
                  relative h-12 w-auto
                  grayscale opacity-80
                  transition-all duration-300
                  hover:grayscale-0 hover:opacity-100 hover:scale-110
                "
              >
                <Image
                  src={src}
                  alt="Incubation Partner Logo"
                  width={120}
                  height={48}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* and more */}
          <div className="mt-8 inline-flex items-center px-6 py-2 rounded-full 
                          bg-teal-100 text-teal-800 text-sm font-semibold">
            and 100+ more
          </div>
        </div>
      </div>
    </section>
  );
}
