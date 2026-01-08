"use client";

import { useState, useEffect } from "react";

// Header & Footer
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Home sections
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import GrowthWithFlora from "@/components/growth-with-flora";
import { GrowthJourney } from "@/components/growth-journey";
import { GuideMeTabs } from "@/components/guide-me-tabs";
import { ServicesSection } from "@/components/services-section";
import { IndiaMapSection } from "@/components/india-map-section";
import { ContactSection } from "@/components/contact-section";

// Information Page
import InformationPage from "@/components/information-page";

export default function HomeClient() {
  const [view, setView] = useState<
    "home" | "information" | "careers" | "jobForm"
  >("home");

  const [submitted, setSubmitted] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [coverName, setCoverName] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  return (
    <main className="min-h-screen bg-background">
      <Header onSelectView={(v) => setView(v as any)} />

      {/* ================= HOME ================= */}
      {view === "home" && (
        <>
          <HeroSection />
          <StatsSection />
          <GrowthWithFlora />
          <GrowthJourney />
          <GuideMeTabs />
          <ServicesSection />
          <IndiaMapSection />
          <ContactSection />
        </>
      )}

      {/* ================= INFORMATION ================= */}
      {view === "information" && <InformationPage />}

      {/* ================= CAREERS ================= */}
      {view === "careers" && (
        <div className="py-24 px-6 max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">
            StartupVision Careers
          </h1>

          <p className="text-center text-gray-700 mb-8">
            Join the Vision-Driven Team at StartupVision.
          </p>

          <button
            onClick={() => setView("jobForm")}
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white
                       text-xl font-bold py-4 rounded-lg shadow-md mb-12"
          >
            Apply Now
          </button>

          <div className="grid md:grid-cols-2 gap-8">
            <CareerBox title="📈 Business Development" items={[
              "Business Development Manager",
              "Sales Manager",
              "Partnership Executive",
            ]} />

            <CareerBox title="💻 Digital Transformation & Technology" items={[
              "Frontend Developer",
              "Backend Developer",
              "UI/UX Designer",
              "QA Automation Tester",
              "Technical Support Engineer",
            ]} />

            <CareerBox title="📣 Digital Marketing" items={[
              "SEO Specialist",
              "Social Media Manager",
              "Content Writer",
              "Video Editor",
            ]} />

            <CareerBox title="⚖️ Startup & Legal Services" items={[
              "Startup Consultant",
              "Chartered Accountant",
              "Company Secretary",
              "Legal Associate",
              "Tax Filing Expert",
            ]} />
          </div>
        </div>
      )}

      {/* ================= JOB FORM ================= */}
      {view === "jobForm" && (
        <div className="py-24 px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 mb-8">
            StartupVision Job Application Form
          </h1>

          {submitted && (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
              ✅ Application submitted successfully!
            </div>
          )}

          <form
            action="/api/job-apply"
            method="POST"
            encType="multipart/form-data"
            onSubmit={() => setSubmitted(true)}
            className="bg-white shadow-xl p-10 rounded-2xl grid gap-6 border"
          >
            <input name="fullName" placeholder="Full Name" className="p-4 border rounded-lg" required />
            <input name="email" type="email" placeholder="Email" className="p-4 border rounded-lg" required />
            <input name="phone" placeholder="Phone Number" className="p-4 border rounded-lg" required />

            <select name="position" className="p-4 border rounded-lg" required>
              <option value="">Select Position</option>
              <option>Business Development</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Digital Marketing</option>
              <option>Internship</option>
            </select>

            <textarea name="coverLetterMessage" rows={5} placeholder="Cover Letter (Optional)" className="p-4 border rounded-lg" />

            <FileUpload
              label="Upload Resume"
              color="emerald"
              required
              onChange={setResumeName}
              value={resumeName}
              id="resume"
            />

            <FileUpload
              label="Upload Cover Letter (Optional)"
              color="blue"
              onChange={setCoverName}
              value={coverName}
              id="coverLetterFile"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-xl font-bold">
              Submit Application
            </button>
          </form>

          <div className="text-center mt-8">
            <button onClick={() => setView("careers")} className="text-blue-600 underline text-lg">
              ← Back to Careers
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

/* ===== Reusable Components ===== */

function CareerBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow border">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <ul className="list-disc ml-6 text-gray-700">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}

function FileUpload({
  label,
  id,
  color,
  required,
  value,
  onChange,
}: any) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`block bg-${color}-500 hover:bg-${color}-600 text-white font-semibold px-6 py-3 rounded-lg text-center cursor-pointer shadow`}
      >
        {label}
      </label>
      <input
        id={id}
        type="file"
        name={id}
        accept=".pdf,.doc,.docx"
        className="hidden"
        required={required}
        onChange={(e: any) => onChange(e.target.files?.[0]?.name || "")}
      />
      {value && <p className="mt-2 text-sm text-gray-600">{value}</p>}
    </div>
  );
}
