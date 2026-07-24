"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LangContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang, toggleLang } = useLang();

  return (
    <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-5 py-5 md:px-10 md:py-8 lg:px-20 lg:py-10">
      <ul className="hidden md:flex justify-center items-center gap-5">
        <li className="font-bold text-xl lg:text-3xl">{t.nav.portofolio}</li>
        <div className="w-0.5 h-7 lg:h-8 bg-white opacity-50"></div>
        <li className="font-semibold text-xl lg:text-2xl opacity-50 hover:opacity-100 transition-opacity"><Link href="#">{t.nav.home}</Link></li>
        <li className="font-semibold text-xl lg:text-2xl opacity-50 hover:opacity-100 transition-opacity"><Link href="#about">{t.nav.about}</Link></li>
        <li className="font-semibold text-xl lg:text-2xl opacity-50 hover:opacity-100 transition-opacity"><Link href="#projects">{t.nav.projects}</Link></li>
      </ul>

      <div className="flex md:hidden justify-between items-center w-full">
        <span className="font-bold text-lg text-white">{t.nav.portofolio}</span>
        <button
          className="text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            }
          </svg>
        </button>
      </div>

      <div className="hidden md:flex items-center gap-3">
        <button
          onClick={toggleLang}
          className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 text-white hover:border-[#FF4A11]/50 transition-colors"
          aria-label="Toggle language"
        >
          {lang === "en" ? "ID" : "EN"}
        </button>

        <div className="w-40 lg:w-48 h-12 lg:h-14 bg-white rounded-full justify-between items-center px-5 lg:px-6 cursor-pointer hover:scale-105 transition-transform hidden md:flex">
          <h1 className="font-bold text-black text-sm lg:text-base">{t.nav.getInTouch}</h1>
          <div className="rounded-full bg-[#FF4A11] w-7 h-7 lg:w-8 lg:h-8 flex justify-center items-center">
            <Link href="#getintouch">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 lg:size-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-0 left-0 w-full pt-20 bg-black/50 rounded-b-4xl backdrop-blur px-6 py-4 flex flex-col gap-4 z-0"
          >
            <div className="flex items-center justify-between">
              <Link href="#" className="font-semibold text-white text-lg" onClick={() => setMenuOpen(false)}>{t.nav.home}</Link>
              <button
                onClick={() => { toggleLang(); setMenuOpen(false); }}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 text-white"
              >
                {lang === "en" ? "ID" : "EN"}
              </button>
            </div>
            <Link href="#about" className="font-semibold text-white text-lg opacity-70" onClick={() => setMenuOpen(false)}>{t.nav.about}</Link>
            <Link href="#projects" className="font-semibold text-white text-lg opacity-70" onClick={() => setMenuOpen(false)}>{t.nav.projects}</Link>
            <Link href="#getintouch" className="font-semibold text-[#FF4A11] text-lg" onClick={() => setMenuOpen(false)}>{t.nav.getInTouch} →</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
