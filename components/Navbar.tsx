"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/iniciativas", label: "Iniciativas" },
    { href: "/proceso", label: "Proceso" },
    { href: "/nosotros", label: "Empresa" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "glass-nav scrolled py-3 bg-white/95 backdrop-blur-lg shadow-lg" 
            : "py-5 bg-white"
        }`}
      >
        <div className="container-eco">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src="/images/logos/logo.png"
                  alt="Mundo Eco Verde"
                  className={`transition-all duration-300 ${
                    scrolled ? "w-12 h-12" : "w-16 h-16"
                  } object-contain`}
                />
              </div>
              <span className={`font-bold ${
                scrolled ? "text-2xl" : "text-3xl"
              } text-brand-dark group-hover:text-brand-green transition-colors hidden sm:block`}>
                Mundo<span className="text-brand-green">EcoVerde</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? "text-brand-green border-b-2 border-brand-green"
                      : "text-brand-gray hover:text-brand-green"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="btn-primary px-6 py-3 rounded-full font-bold text-sm shadow-green hover:shadow-none"
              >
                Empezar Ahora
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-brand-dark text-2xl focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl animate-slide-down">
              <div className="flex flex-col space-y-0 px-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`py-4 px-4 text-lg font-semibold transition-colors ${
                      pathname === link.href
                        ? "text-brand-green bg-brand-green/10 rounded-lg"
                        : "text-brand-gray hover:text-brand-green"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contacto"
                  onClick={closeMobileMenu}
                  className="btn-primary py-4 rounded-xl font-bold text-center mt-4"
                >
                  Empezar Ahora
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Backdrop para mobile */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}