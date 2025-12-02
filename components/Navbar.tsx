// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 glass-nav transition-all duration-300 py-2 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-24"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-4 cursor-pointer group"
          >
            <div className="relative flex items-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/logos/logo.png"
                alt="MundoEcoVerde Logo"
                className={`transition-all duration-300 ${
                  scrolled ? "w-12 h-12" : "w-16 h-16"
                } object-contain`}
              />
            </div>

            <span className="font-extrabold text-2xl tracking-tight text-brand-dark group-hover:text-brand-green transition-colors hidden md:block">
              Mundo<span className="text-brand-green">EcoVerde</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-semibold text-brand-gray hover:text-brand-green transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="text-sm font-semibold text-brand-gray hover:text-brand-green transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/proceso"
              className="text-sm font-semibold text-brand-gray hover:text-brand-green transition-colors"
            >
              Proceso
            </Link>
            <Link
              href="/nosotros"
              className="text-sm font-semibold text-brand-gray hover:text-brand-green transition-colors"
            >
              Empresa
            </Link>
            <Link
              href="/contacto"
              className="btn-primary px-6 py-3 rounded-full font-bold text-sm shadow-green hover:shadow-none"
            >
              Empezar Ahora
            </Link>
          </div>

          <button className="md:hidden text-brand-dark text-2xl focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
