"use client"

import { MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 md:py-20 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm opacity-90">
              <li><a href="#home" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#stories" className="hover:text-blue-600">Success Stories</a></li>
              <li><a href="#incubation" className="hover:text-blue-600">Incubation Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Refund Policy</a></li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-bold mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm opacity-90">
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
                MRC Complex, 2nd Floor 202, Ayyappa Society,<br />
                Madhapur, Hyderabad – 500081
              </li>
            </ul>

            {/* SOCIAL MEDIA — INLINE SVG ICONS */}
            <div className="flex gap-4 mt-6">

              {/* Instagram */}
              <a href="https://www.instagram.com/startupvision_official/" target="_blank" className="hover:opacity-70 transition">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#C13584">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 
                  0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 
                  1.35 3 3v10c0 1.65-1.35 3-3 
                  3H7c-1.65 0-3-1.35-3-3V7c0-1.65 
                  1.35-3 3-3h10zm-5 3a5 5 0 100 
                  10 5 5 0 000-10zm0 2a3 3 0 110 
                  6 3 3 0 010-6zm4.5-.25a1.25 1.25 0 11-2.5 
                  0 1.25 1.25 0 012.5 0z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/918000000000" target="_blank" className="hover:opacity-70 transition">
                <svg width="26" height="26" viewBox="0 0 32 32" fill="#25D366">
                  <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 
                  5.57 2.15 7.99L.5 31.5l7.76-2.09A15.44 
                  15.44 0 0016 31.5c8.56 0 15.5-6.94 
                  15.5-15.5S24.56.5 16 .5zm0 28c-2.63 
                  0-5.2-.7-7.44-2.02l-.53-.31-4.6 
                  1.24 1.23-4.48-.35-.57A13.4 13.4 0 
                  012.5 16C2.5 8.54 8.54 2.5 16 
                  2.5S29.5 8.54 29.5 16 23.46 28.5 16 
                  28.5zm7.38-9.56c-.4-.2-2.38-1.17-2.75-1.3-.37-.13-.64-.2-.9.2-.27.4-1.03 
                  1.3-1.27 1.57-.23.27-.47.3-.87.1-.4-.2-1.68-.62-3.2-1.98-1.18-1.06-1.98-2.37-2.22-2.77-.23-.4-.02-.62.17-.82.17-.17.4-.47.6-.7.2-.23.27-.4.4-.67.13-.27.07-.5-.03-.7-.1-.2-.9-2.17-1.23-2.97-.33-.8-.67-.67-.9-.67-.23 
                  0-.5-.03-.76-.03-.27 0-.7.1-1.06.5-.37.4-1.4 
                  1.37-1.4 3.33 0 1.97 1.43 3.87 1.63 4.13.2.27 
                  2.82 4.3 6.9 6 .96.4 1.7.63 2.28.8.96.3 1.83.26 
                  2.52.16.77-.1 2.38-.97 2.73-1.9.33-.93.33-1.73.23-1.9-.1-.16-.37-.27-.77-.47z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" className="hover:opacity-70 transition">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 
                  6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 
                  1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 
                  8.5h3.8v2.1h.1c.5-.9 1.7-2.1 
                  3.6-2.1 3.8 0 4.5 2.5 4.5 
                  5.7V24h-4v-7.6c0-1.8 0-4-2.5-4s-2.9 
                  2-2.9 3.9V24h-4V8.5z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" className="hover:opacity-70 transition">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#FF0000">
                  <path d="M23.5 6.2s-.2-1.7-.8-2.5c-.8-.9-1.6-.9-2-1C17.6 
                  2.5 12 2.5 12 2.5h-.1s-5.6 0-8.7.2c-.4.1-1.2.1-2 
                  1C.7 4.6.5 6.3.5 6.3S0 8.2 0 10v2c0 1.8.5 3.7.5 
                  3.7s.2 1.7.8 2.5c.8.9 1.9.9 2.4 1 1.7.2 7.2.3 
                  7.2.3s5.6 0 8.7-.2c.4-.1 1.2-.1 2-1 .6-.8.8-2.5.8-2.5s.5-1.9.5-3.7v-2c0-1.8-.5-3.7-.5-3.7zM9.8 
                  15.3V8.7l6.2 3.3-6.2 3.3z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* OFFICES */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Our Offices</h3>

            <ul className="space-y-5 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <MapPin size={22} className="text-blue-600 mt-1" />
                <span>
                  MRC Complex, 2nd Floor 202,<br />
                  Ayyappa Society, Madhapur<br />
                  Hyderabad – 500081
                </span>
              </li>
            </ul>
          </div>

          {/* CAMPAIGN */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Our Campaign</h3>
            <ul className="space-y-5 text-lg font-semibold">
              <li className="text-red-600">Business सूचना</li>
              <li className="text-blue-500">Startup सूचना</li>
              <li className="text-green-600">MSME सूचना</li>
              <li className="text-purple-600">Digital Commerce सूचना</li>
              <li className="text-orange-500">Funding सूचना</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs opacity-70 leading-relaxed border-t border-gray-300 pt-6">
          <strong>Disclaimer:</strong> StartupVision is a consultancy service provider specializing in startup consultation.
          We are not associated with any Government or Non-Government body. All payments are made only to our official 
          company account.
        </p>

      </div>
    </footer>
  )
}