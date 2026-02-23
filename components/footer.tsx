"use client"

import Image from "next/image"
import { MapPin, Instagram, Linkedin } from "lucide-react"
import { FaWhatsapp, FaYoutube } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-14 sm:py-16 md:py-20 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <div className="mb-10 flex justify-start">
          <Image
            src="/branding/logo-grey.png"
            alt="StartupVision Logo"
            width={120}
            height={50}
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            priority
          />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-5 italic">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
              <li><a href="#stories" className="hover:text-blue-600 transition">Success Stories</a></li>
              <li><a href="#incubation" className="hover:text-blue-600 transition">Incubation Center</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Refund Policy</a></li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-lg font-semibold mb-5 italic">Contact Us</h3>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>
                <strong>Email:</strong><br />
                info@startupvision.in
              </li>

              <li>
                <strong>Phone:</strong><br />
                04045508829
              </li>

              <li>
                <strong>Address:</strong><br />
                MCR Complex, 2nd Floor 202, Ayyappa Society,<br />
                Madhapur, Hyderabad – 500081
              </li>
            </ul>
          </div>

          {/* OFFICES */}
          <div>
            <h3 className="text-lg font-semibold mb-5 italic">Our Offices</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-600 mt-1 shrink-0" />
                <span>
                  MCR Complex, 2nd Floor 202,<br />
                  Ayyappa Society, Madhapur<br />
                  Hyderabad – 500081
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* SOCIAL MEDIA */}
        <div className="flex justify-center items-center gap-6 mb-6">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/startupvision_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Instagram size={22} className="text-pink-600" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <FaWhatsapp size={22} className="text-green-500" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Linkedin size={22} className="text-blue-600" />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <FaYoutube size={22} className="text-red-600" />
          </a>

        </div>

        {/* DISCLAIMER */}
        <p className="text-xs text-gray-600 text-center border-t border-gray-300 pt-6 leading-relaxed">
          <strong>Disclaimer:</strong> StartupVision is a consultancy service provider specializing in startup consultation.
          We are not associated with any Government or Non-Government body. All payments are made only to our official company account.
        </p>

        {/* COPYRIGHT */}
        <p className="text-sm text-gray-500 text-center mt-6">
          © 2026 StartupVision. All rights reserved.
        </p>

      </div>
    </footer>
  )
}