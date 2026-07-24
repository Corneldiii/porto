"use client";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { experiences } from "@/lib/data";
import { useLang } from "@/context/LangContext";

export default function ExperienceSection() {
  const { t } = useLang();

  return (
    <section className="flex flex-col justify-center items-center w-full h-fit my-12 md:my-20 lg:my-24" id="experience">
      <div className="container w-full h-full px-5 md:px-10 lg:px-20 max-w-screen-2xl">

        <Reveal>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
            {t.experience.title.split(" ")[0]} <span className="text-[#FF4A11]">{t.experience.title.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-8 lg:mb-14">
            {t.experience.subtitle}
          </p>
        </Reveal>

        <div className="relative flex flex-col gap-0 max-w-4xl">
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-[#2a2a2a] z-0" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex gap-5 md:gap-8 pb-8 last:pb-0 z-10"
            >
              <div className="flex flex-col items-center mt-1 shrink-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.15 + 0.2 }}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#121212] border border-[#FF4A11]/40 flex items-center justify-center z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-[#FF4A11]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                </motion.div>
              </div>

              <div className="flex-1 bg-[#121212] rounded-2xl p-4 md:p-5 lg:p-6 border border-[#222] hover:border-[#FF4A11]/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h2 className="text-white font-bold text-sm md:text-base lg:text-lg">{exp.role}</h2>
                    <p className="text-[#FF4A11] font-semibold text-xs md:text-sm mt-0.5">{exp.company}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{exp.location}</p>
                  </div>
                  <div className="flex flex-row md:flex-col items-start md:items-end gap-2 shrink-0">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full border border-[#FF4A11]/40 text-[#FF4A11] bg-[#FF4A11]/10 w-fit">
                      {exp.type}
                    </span>
                    <span className="text-gray-400 text-xs font-medium whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>
                <div className="w-full h-px bg-[#222] mb-3" />
                <ul className="flex flex-col gap-1.5 mb-4">
                  {exp.desc.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-400 text-xs md:text-sm">
                      <span className="text-[#FF4A11] mt-0.5 shrink-0">▸</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t, j) => (
                    <span key={j} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#1e1e1e] border border-[#333] text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
