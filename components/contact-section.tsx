"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_5uw8fng",
        "template_ofism9x",
        formData,
        "VP06fx3tbCtpY-07Y"
      );

      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });

      // Auto close popup in 3 sec
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Email error:", err);
      setLoading(false);
      alert("Message failed! Please try again.");
    }
  };

  const mapsOpenUrl =
    "https://www.google.com/maps/search/?api=1&query=MRC+Complex+2nd+Floor+202+Ayyappa+Society+Madhapur+Hyderabad+500082";

  return (
    <section id="contact" className="py-20 bg-muted/40">
      {/* SUCCESS POPUP (MODAL) */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background Blur */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"></div>

          {/* Popup Box */}
          <div className="relative z-50 bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-[90%] text-center animate-popup">
            <svg
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="none"
              className="mx-auto mb-4 text-emerald-600"
            >
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Thank you for contacting us!
            </h3>

            <p className="text-gray-600 text-sm">
              Your message has been successfully sent. We will reach out to you
              soon.
            </p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-foreground">
            Let's Connect & Grow Together
          </h1>
          <p className="text-lg text-muted-foreground italic">
            “Great things are done by a series of small things brought
            together.”
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT FORM */}
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-neutral-200 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div className="floating-label">
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field peer"
                />
                <label className="input-label">Full Name</label>
              </div>

              {/* EMAIL */}
              <div className="floating-label">
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field peer"
                />
                <label className="input-label">Email Address</label>
              </div>

              {/* PHONE */}
              <div className="floating-label">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field peer"
                />
                <label className="input-label">Phone Number</label>
              </div>

              {/* SERVICE */}
              <div className="floating-label">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="input-field peer"
                >
                  <option value="">Select Service</option>
                  <option value="registration">
                    Documentation & Registration
                  </option>
                  <option value="funding">Funding & Growth</option>
                  <option value="branding">Branding & Digital</option>
                  <option value="other">Other</option>
                </select>
                <label className="input-label">Service</label>
              </div>

              {/* MESSAGE */}
              <div className="floating-label">
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field peer resize-none"
                />
                <label className="input-label">Your Message</label>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all flex justify-center items-center gap-3 disabled:opacity-50"
              >
                {loading && (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                )}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* RIGHT MAP */}
          <div className="space-y-6">
            <div className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-soft border border-neutral-200 animate-slide-left bg-white">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.74195911674!2d78.38266287415484!3d17.43989710358887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b1ebf60e57%3A0xf86e3d68a5c073e7!2sMRC%20Complex%2C%20Ayyappa%20Society%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1733384700000"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                loading="lazy"
              />

              <a
                href={mapsOpenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 cursor-pointer"
              />

              {/* Floating Map Pin */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 bg-red shadow-md rounded-full flex items-center justify-center backdrop-blur-md">
                  <MapPin size={26} className="text-accent" />
                </div>
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-neutral-600">info@startupvision.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-neutral-600">04045508829</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    MRC Complex, 2nd Floor 202,
                    <br /> Ayyappa Society, Madhapur,
                    <br /> Hyderabad – 500082, Telangana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM CSS */}
      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #d4d7dd;
          border-radius: 12px;
          background: white;
          outline: none;
          transition: 0.25s ease;
        }
        .input-field:focus {
          border-color: #06b6d4;
          box-shadow: 0 0 0 3px #06b6d433;
        }

        .floating-label {
          position: relative;
        }

        .input-label {
          position: absolute;
          left: 16px;
          top: 14px;
          pointer-events: none;
          transition: 0.25s ease;
          background: white;
          padding: 0 6px;
          color: #9ca3af;
        }

        .peer:focus + .input-label,
        .peer:not(:placeholder-shown) + .input-label {
          top: -9px;
          font-size: 12px;
          color: #06b6d4;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease both;
        }
        .animate-slide-left {
          animation: slideLeft 0.5s ease both;
        }

        /* NEW POPUP ANIMATIONS */
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes popup {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.35s ease-out;
        }
        .animate-popup {
          animation: popup 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .shadow-soft {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }

        .bg-accent {
          background: #06b6d4;
        }
      `}</style>
    </section>
  );
}