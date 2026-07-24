"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import Modal from "../modal";
import { projects } from "@/lib/data";
import { useLang } from "@/context/LangContext";

export default function ProjectsSection() {
  const [open, setOpen] = useState({ data: NaN, status: false });
  const [mainImgIdx, setMainImgIdx] = useState(0);
  const { t } = useLang();

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full h-fit my-16 md:my-24 lg:my-32" id="projects">
        <div className="container w-full h-full px-5 md:px-10 lg:px-20">

          <Reveal>
            <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] text-center font-extrabold text-white">{t.projects.title}</h1>
          </Reveal>

          <div className="flex flex-col gap-6 mt-10 md:hidden">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative w-full h-60 rounded-3xl overflow-hidden cursor-pointer border border-[#222]"
                onClick={() => { setOpen({ data: i, status: true }); setMainImgIdx(0); }}
              >
                <Image src={p.img[0]} alt="" fill placeholder="blur" className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-5">
                  <span className="text-white font-bold text-lg">Project {i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:grid lg:hidden grid-cols-3 gap-5 mt-10">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative w-full h-64 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => { setOpen({ data: i, status: true }); setMainImgIdx(0); }}
              >
                <Image src={p.img[0]} alt="" fill placeholder="blur" className="object-cover" />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex flex-wrap justify-center items-center mt-24 gap-10 w-full max-h-240 no-scrollbar overflow-y-scroll"
          >
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative w-87.5 xl:w-100 h-112.5 rounded-3xl overflow-hidden cursor-pointer group border border-[#333]"
                onClick={() => { setOpen({ data: i, status: true }); setMainImgIdx(0); }}
              >
                <Image
                  src={p.img[0]}
                  alt={`Project ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h1 className="text-2xl font-bold text-white mb-2">Project {i + 1}</h1>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {p.judul || t.projects.clickDetail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {open.status && (
          <Modal
            isOpen={open.status}
            onClose={() => { setOpen({ data: NaN, status: false }); setMainImgIdx(0); }}
          >
            {!isNaN(open.data) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 40 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col md:flex-row h-full max-h-[92vh] md:max-h-[88vh]"
              >
                <div className="relative w-full md:w-[75%] bg-[#0a0a0a] flex flex-col gap-3 p-4 md:p-6 shrink-0">
                  <button
                    className="md:hidden absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 border border-[#333] flex items-center justify-center text-white hover:border-[#FF4A11] transition-colors"
                    onClick={() => { setOpen({ data: NaN, status: false }); setMainImgIdx(0); }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="relative w-full aspect-video md:aspect-auto md:flex-1 rounded-2xl overflow-hidden border border-[#222]">
                    <Image
                      src={projects[open.data].img[mainImgIdx]}
                      alt=""
                      fill
                      placeholder="blur"
                      className="object-fill transition-all duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#FF4A11] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Project {open.data + 1}
                    </div>
                  </div>

                  <div className="flex gap-2 md:gap-3">
                    {projects[open.data].img.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setMainImgIdx(idx)}
                        className={`relative flex-1 aspect-video rounded-xl overflow-hidden border transition-all duration-200 ${mainImgIdx === idx
                          ? "border-[#FF4A11] opacity-100 scale-[1.03]"
                          : "border-[#222] opacity-50 hover:opacity-80"
                        }`}
                      >
                        <Image src={img} alt="" fill placeholder="blur" className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col flex-1 min-h-0 overflow-y-auto no-scrollbar">
                  <div className="hidden md:flex justify-end p-5 pb-0 shrink-0">
                    <button
                      className="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF4A11] transition-colors"
                      onClick={() => { setOpen({ data: NaN, status: false }); setMainImgIdx(0); }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex flex-col gap-5 p-5 md:p-6 md:pt-4">
                    <div>
                      <p className="text-[#FF4A11] text-xs font-semibold uppercase tracking-widest mb-1">
                        {projects[open.data].produksi}
                      </p>
                      <h2 className="text-white font-bold text-lg md:text-xl lg:text-2xl leading-snug">
                        {projects[open.data].judul}
                      </h2>
                    </div>

                    <div className="w-full h-px bg-[#222]" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">{t.projects.about}</p>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify">
                        {projects[open.data].desc}
                      </p>
                    </div>

                    <div className="w-full h-px bg-[#222]" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">{t.projects.techStack}</p>
                      <div className="flex flex-wrap gap-2">
                        {projects[open.data].teknologi.split(" - ").map((te, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#333] text-gray-300 hover:border-[#FF4A11]/50 hover:text-white transition-colors"
                          >
                            {te}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-full h-px bg-[#222]" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">{t.projects.repositories}</p>
                      <div className="flex gap-5 justify-start items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github size-5" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                        <a href={projects[open.data].link} className="text-[#FF4A11] hover:text-[#eb715e] font-semibold text-xs">{projects[open.data].link}</a>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 mt-auto">
                      <button
                        onClick={() => { setOpen({ data: (open.data - 1 + projects.length) % projects.length, status: true }); setMainImgIdx(0); }}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#FF4A11] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-full border border-[#333] group-hover:border-[#FF4A11]/50 flex items-center justify-center transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                          </svg>
                        </div>
                        {t.projects.prev}
                      </button>
                      <span className="text-xs text-gray-600 font-medium">
                        {open.data + 1} / {projects.length}
                      </span>
                      <button
                        onClick={() => { setOpen({ data: (open.data + 1) % projects.length, status: true }); setMainImgIdx(0); }}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#FF4A11] transition-colors group"
                      >
                        {t.projects.next}
                        <div className="w-8 h-8 rounded-full border border-[#333] group-hover:border-[#FF4A11]/50 flex items-center justify-center transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
