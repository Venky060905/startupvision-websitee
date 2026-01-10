"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = [
  "MSME Schemes",
  "Startup India",
  "GST & Compliance",
  "ITR Filing",
  "NAIF Funding",
  "MSME Funding",
];

const TAB_CONTENT: Record<
  string,
  { title: string; desc: string; button: string }
> = {
  "MSME Schemes": {
    title:
      "Register your business under MSME (Udyam) and explore financial benefits like CGTMSE, PMEGP, and subsidy programs.",
    desc:
      "Register your business under MSME (Udyam) and explore financial benefits like CGTMSE, PMEGP, and subsidy programs.",
    button: "Explore MSME Schemes",
  },
  "Startup India": {
    title:
      "Get Startup India recognition and unlock tax exemptions, IPR benefits, and government support.",
    desc:
      "Startup India helps eligible startups get DPIIT recognition, tax relief, and simplified compliance.",
    button: "Explore Startup India",
  },
  "GST & Compliance": {
    title:
      "Simplify GST registration, returns, and compliance with expert support.",
    desc:
      "From GST registration to monthly and annual filings, we manage everything end-to-end.",
    button: "Explore GST Services",
  },
  "ITR Filing": {
    title:
      "File your Income Tax Returns accurately and on time with professionals.",
    desc:
      "Avoid penalties and maximize deductions with proper ITR filing assistance.",
    button: "Explore ITR Filing",
  },
  "NAIF Funding": {
    title:
      "Access innovation funding through NAIF for deep-tech and growth startups.",
    desc:
      "NAIF supports innovative startups through structured funding opportunities.",
    button: "Explore NAIF Funding",
  },
  "MSME Funding": {
    title:
      "Get collateral-free loans, subsidies, and working capital for MSMEs.",
    desc:
      "We help MSMEs access government-backed funding and credit schemes.",
    button: "Explore MSME Funding",
  },
};

export default function InformationPage() {
  const [activeTab, setActiveTab] = useState("MSME Schemes");
  const content = TAB_CONTENT[activeTab];

  return (
    <section className="bg-[#eaf9fb]">

      {/* =======================
          TOP HEADING
      ======================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-6 sm:mb-10">
          The Experts can find your next business service in minutes
        </h1>
      </div>

      {/* =======================
          TABS
      ======================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 relative z-10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-t-xl font-semibold transition-all
                ${
                  activeTab === tab
                    ? "bg-teal-400 text-black"
                    : "bg-cyan-200 text-black hover:bg-cyan-300"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-teal-400 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 overflow-hidden">

          {/* LEFT CONTENT (SLIDE) */}
          <div key={activeTab} className="animate-slide">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4">
              {content.title}
            </h2>

            <p className="text-sm sm:text-base text-black mb-6 sm:mb-8 max-w-xl">
              {content.desc}
            </p>

            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full shadow w-full sm:w-auto text-center">
              {content.button}
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center items-center">
            <div className="bg-gradient-to-br from-blue-900 to-pink-0 rounded-2xl p-6 shadow-lg w-full max-w-md">
              <Image
                src="/branding/logo.jpg"
                alt="StartupVision"
                width={500}
                height={650}
                className="rounded- mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* GRID BACKGROUND */}
      <div className="h-50 sm:h-4 0 md:h-40 bg-[linear-gradient(#5fbfcf_1px,transparent_1px),linear-gradient(90deg,#5fbfcf_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:40px_40px]" />

      {/* =======================
          ASEAN FEATURE
      ======================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="bg-teal-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 text-white shadow-xl">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              The ASEAN Market Is Open for Indian Business:
              StartupVision Leads MSMEs Toward Global Growth
            </h2>
            <p className="text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              ASEAN countries like Malaysia, Singapore, Indonesia, Thailand,
              and Vietnam are open for Indian startups and MSMEs.
            </p>
            <button className="bg-green-500 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold w-full sm:w-auto">
              Read More
            </button>
          </div>

          <div className="bg-white rounded-2xl p-4">
            <Image
              src="/images/asean-banner.png"
              alt="ASEAN"
              width={600}
              height={350}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            "IIT Bombay Launches ₹250 Cr Deep-Tech VC Fund for Startups",
            "What is an AGM Meeting? Full Guide for Companies in India",
            "Difference Between Entrepreneur and Entrepreneurship",
          ].map((title) => (
            <div
              key={title}
              className="bg-gray-800 text-white rounded-2xl p-6 shadow-lg"
            >
              <p className="font-semibold">{title}</p>
              <span className="block mt-4 text-sm text-gray-400">
                StartupVision
              </span>
            </div>
          ))}
        </div>

        <div className="text-center sm:text-right mt-6 sm:mt-8">
          <button className="bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold w-full sm:w-auto">
            View All Blogs →
          </button>
        </div>
      </div>

      {/* =======================
          BUSINESS SUCHNA
      ======================== */}
      <div className="bg-teal-700 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg relative">
            <span className="absolute -top-4 -left-4 bg-yellow-400 text-xs px-3 py-1 rounded-full font-bold">
              New!
            </span>
            <h3 className="text-xl font-bold mb-4">
              What Business Suchna Offers You?
            </h3>
            <p className="text-sm text-gray-700 mb-6">
              MSME schemes, startup updates, policy analysis, and taaza khabar —
              clarity without noise.Every chapter of Business Suchna is designed to help MSMEs and startups make better decisions with less effort. MSME Schemes – Funding, certification, registration simplified. Startup Updates – News that matters for growth, funding, and innovation. Policy Analysis – From GST reforms to sector-specific compliance, explained with examples. Taaza Khabar – Quick, reliable insights that you can immediately apply to your business. You don’t get noise—you get curated clarity.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold">
              Learn More
            </button>
          </div>

          <div className="bg-white rounded-2xl p-4">
            <Image
              src="/images/msme-benfits.png"
              alt="MSME Benefits"
              width={600}
              height={550}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* =======================
          TESTIMONIALS
      ======================== */}
      <div className="bg-teal-700 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            What Our Happy Customers Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src={`/images/testimonial-${i}.svg`}
                  alt={`testimonial-${i}`}
                  width={300}
                  height={400}
                  className="rounded-xl"
                />
                <p className="text-center text-red-500 mt-3 text-sm">
                  View more on YouTube
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      


      {/* =======================
          CONTACT
      ======================== */}
      <div className="bg-white py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-3 sm:mb-4">
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              As a dynamic Startup Consultancy, our mission at StartupFlora is to deliver impactful services backed by driven strategies.
            </p>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium text-lg">04045508829</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium text-lg">info@startupvision.in</p>
              </div>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full font-semibold w-full sm:w-auto">
              WhatsApp Us
            </button>
          </div>

          <form className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg space-y-3 sm:space-y-4">
            <input className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base" placeholder="Full Name" />
            <input className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base" placeholder="Company Name" />
            <input className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base" placeholder="Email" />
            <input className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base" placeholder="Subject" />
            <input className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base" placeholder="+91 Phone Number" />
            <textarea className="w-full p-2 sm:p-3 border rounded text-sm sm:text-base min-h-[100px] resize-none" placeholder="Message" />
            <button className="bg-black text-white w-full py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-800 transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      


      {/* SLIDE ANIMATION */}
      <style jsx>{`
        .animate-slide {
          animation: slideFade 0.45s ease;
        }
        @keyframes slideFade {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
