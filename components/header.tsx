"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

type NavType =
  | { type: "home"; label: string }
  | { type: "view"; view: string; label: string }
  | { type: "scroll"; target: string; label: string };

interface NewsItem {
  id: number;
  text: string;
  icon: string;
}

export function Header({ onSelectView }: { onSelectView?: (v: string) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => setIsHydrated(true), []);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ---------------- Navigation ---------------- */
  const navLinks: NavType[] = [
    { type: "home", label: "Home" },
    { type: "view", view: "information", label: "Information" },
    { type: "scroll", target: "services", label: "Services" },
    { type: "scroll", target: "incubation", label: "Incubation Center" },
    { type: "view", view: "careers", label: "Careers" },
    { type: "scroll", target: "contact", label: "Contact" },
  ];

  const newsItems: NewsItem[] = [
    { id: 1, icon: "🔵", text: "Startup India Recognition (DPIIT)" },
    { id: 2, icon: "🔵", text: "MSME Udyam Registration" },
    { id: 3, icon: "🔵", text: "CGTMSE – Collateral-Free Loans" },
    { id: 4, icon: "🔵", text: "PMEGP – Prime Minister Employment Scheme" },
    { id: 5, icon: "🔵", text: "Atal Innovation Mission (AIM)" },
    { id: 6, icon: "🔵", text: "Stand-Up India Scheme" },
    { id: 7, icon: "🔵", text: "Credit Guarantee Fund (CGS)" },
    { id: 8, icon: "🔵", text: "NAIF – Innovation & Growth Funding" },
    { id: 9, icon: "🔵", text: "MSME Subsidy & Incentive Schemes" },
    { id: 10, icon: "🔵", text: "SIDBI Startup Funding Support" },
  ];

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  const updateUrl = (path: string) => {
    try {
      const newPath = path.startsWith("/") ? path : `/${path}`;
      window.history.replaceState({}, "", newPath);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      {/* ================= TOP NEWS STRIP ================= */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-1 sm:py-2 overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll">
          {newsItems.map((item) => (
            <span key={item.id} className="mx-3 sm:mx-6 text-xs sm:text-sm">
              {item.icon} {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur border-b shadow-md"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">

            {/* ===== LOGO (RESPONSIVE FIX) ===== */}
            <button
              onClick={() => {
                onSelectView?.("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              {/* Logo Container */}
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12">
                <Image
                  src="/branding/logo.jpg"
                  alt="StartupVision Logo"
                  fill
                  sizes="(max-width: 640px) 36px, (max-width: 768px) 40px, 48px"
                  className="object-contain rounded-lg"
                  priority
                />
              </div>

              {/* Brand Text */}
              <div className="leading-tight">
                <span className="block font-bold text-base sm:text-lg md:text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  StartupVision
                </span>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  Empowering Entrepreneurs
                </p>
              </div>
            </button>

            {/* ===== DESKTOP NAV ===== */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((item, i) => {
                if (item.type === "home")
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        updateUrl("/home");
                        onSelectView?.("home");
                        scrollToSection("home");
                      }}
                      className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                    >
                      {item.label}
                    </button>
                  );

                if (item.type === "view")
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        updateUrl(`/${item.view}`);
                        onSelectView?.(item.view);
                      }}
                      className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                    >
                      {item.label}
                    </button>
                  );

                return (
                  <button
                    key={i}
                    onClick={() => {
                      updateUrl(`/${item.target}`);
                      onSelectView?.("home");
                      scrollToSection(item.target);
                    }}
                    className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* ===== CALL BUTTON ===== */}
            <div className="hidden md:flex">
              <a
                href="tel:04045508829"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold flex items-center gap-3 shadow hover:shadow-lg"
              >
                <Phone size={18} />
                <span className="text-lg font-bold">04045508829</span>
              </a>
            </div>

            {/* ===== MOBILE MENU ICON ===== */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* ===== MOBILE MENU ===== */}
          {isMobileMenuOpen && isHydrated && (
            <nav className="md:hidden bg-white border-t shadow-lg p-4 space-y-2">
              {navLinks.map((item, i) => {
                if (item.type === "home")
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        updateUrl("/home");
                        onSelectView?.("home");
                        setIsMobileMenuOpen(false);
                        scrollToSection("home");
                      }}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg"
                    >
                      {item.label}
                    </button>
                  );

                if (item.type === "view")
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        updateUrl(`/${item.view}`);
                        onSelectView?.(item.view);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg"
                    >
                      {item.label}
                    </button>
                  );

                return (
                  <button
                    key={i}
                    onClick={() => {
                      updateUrl(`/${item.target}`);
                      onSelectView?.("home");
                      scrollToSection(item.target);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg"
                  >
                    {item.label}
                  </button>
                );
              })}

              <a
                href="tel:04045508829"
                className="flex items-center justify-center gap-3 px-4 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold"
              >
                <Phone size={20} />
                <span className="font-bold">04045508829</span>
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* ===== SCROLL ANIMATION ===== */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
          display: inline-flex;
        }
      `}</style>
    </>
  );
}