"use client";

import { CheckCircle, BadgeCheck } from "lucide-react";

const STEPS = [
  "Registration",
  "Certification",
  "Funding",
  "Marketing",
  "Compliance",
];

export default function GrowthWithFlora() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-[#eaf9fb] rounded-[48px] p-14 overflow-hidden">

          {/* Satisfaction */}
          <div className="absolute top-6 right-6 bg-[#0f766e] text-white px-5 py-3 rounded-xl text-center shadow-lg">
            <p className="text-sm font-bold">94%</p>
            <p className="text-xs">SATISFACTION<br />SCORE</p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Growth with <span className="italic">Vision</span>
          </h2>
          <p className="text-center mt-3 text-lg">
            Grow with <span className="italic font-medium">Vision</span> in few steps
          </p>

         

          {/* CONTENT GRID */}
          <div className="grid md:grid-cols-3 gap-12 mt-16 items-center">

            {/* LEFT */}
            <div className="space-y-6">
              <div className="border border-dashed border-gray-500 rounded-xl p-4 text-center">
                <p className="text-sm italic">SERVED</p>
                <p className="font-bold text-xl">1000+ Startups</p>
              </div>

              <div className="bg-[#0f766e] text-white rounded-full px-6 py-3 text-sm w-fit shadow-md">
                CALCULATE YOUR TAXES
                <br />
                <span className="text-xs">Save upto 100%</span>
              </div>

              <div className="bg-gradient-to-br from-[#7dd3fc] to-[#99f6e4] rounded-2xl p-6 shadow-xl">
                <h3 className="text-4xl font-bold">100+</h3>
                <p className="italic mt-1">STARTUPS got</p>

                <div className="bg-white rounded-lg p-3 mt-3 inline-flex items-center gap-2">
                  <BadgeCheck className="text-green-600" />
                  <span className="font-semibold text-sm">
                    Startup India CERTIFICATE
                  </span>
                </div>

                <p className="mt-4 text-lg">
                  WITHIN <span className="text-3xl font-bold">2</span> Days
                </p>
              </div>
            </div>

            {/* CENTER */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-[#99f6e4] to-[#7dd3fc] rounded-2xl p-10 shadow-2xl text-center border">
                <h3 className="text-5xl font-bold">
                  2+ <span className="italic">CRORES</span>
                </h3>
                <p className="italic mt-2">DISBURSED TO</p>
                <p className="text-3xl font-bold mt-2">10+ businesses</p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-6 text-right">
              <div className="bg-gradient-to-br from-[#99f6e4] to-[#7dd3fc] rounded-2xl p-6 shadow-xl">
                <h3 className="text-4xl font-bold">10+</h3>
                <p className="italic">BUSINESSES got</p>
                <p className="font-semibold">TAX HOLIDAY</p>
                <p className="text-3xl font-bold mt-2">3 Years</p>
              </div>

              <div className="bg-purple-500 text-white rounded-full px-6 py-3 inline-block shadow">
                FUNDING GUIDE 2025
              </div>

              <p className="italic mt-6">
                <strong>92%</strong> of StartupVision clients reach the
                <br />
                <span className="text-xl">Interview</span> stage
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
