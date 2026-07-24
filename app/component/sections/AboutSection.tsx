"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import me1 from "@/public/me1.png";
import me2 from "@/public/me2.jpeg";
import { skills } from "@/lib/data";
import { useLang } from "@/context/LangContext";

export default function AboutSection() {
  const { t } = useLang();

  return (
    <section className="w-full h-fit flex justify-center z-40 my-12 md:my-24 lg:my-0 lg:pt-24 lg:pb-32" id="about">
      <div className="container w-full h-full px-5 md:px-10 lg:px-20 max-w-screen-2xl">

        <Reveal>
          <div className="flex flex-col mb-6 lg:hidden">
            <h3 className="text-[#FF4A11] font-bold text-lg mb-1">{t.about.aboutMe}</h3>
            <h1 className="text-5xl font-extrabold text-white">{t.about.nameFirst}</h1>
            <h1 className="text-3xl font-bold text-[#FF4A11]">{t.about.nameLast}</h1>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-56 items-center">

          <div className="block w-full lg:hidden">
            <Image src={me2} alt="Aldian" className="w-full h-72 md:h-96 rounded-4xl object-cover bg-gray-800" />
          </div>

          <Reveal y={0} className="hidden lg:block relative w-full h-150 xl:h-175">
            <motion.div
              initial={{ opacity: 0, rotate: -12 }}
              whileInView={{ opacity: 1, rotate: -12 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute w-[320px] xl:w-95 h-120 xl:h-137.5 rounded-[40px] -left-10 xl:left-20 top-10 object-cover border-8 border-transparent shadow-2xl z-10"
            >
              <Image src={me2} alt="Aldian" fill className="rounded-[40px] object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 12 }}
              whileInView={{ opacity: 1, rotate: 12 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute w-[320px] xl:w-95 h-120 xl:h-137.5 rounded-[40px] top-28 xl:top-32 left-40 xl:left-72 object-cover border-8 border-transparent shadow-2xl z-20"
            >
              <Image src={me1} alt="Aldian" fill className="rounded-[40px] object-cover" />
            </motion.div>
          </Reveal>

          <div className="col-span-1 flex flex-col justify-center">
            <Reveal>
              <div className="hidden lg:flex flex-col mb-10">
                <h1 className="text-[75px] xl:text-[90px] font-extrabold text-white leading-none tracking-tight">{t.about.nameFirst}</h1>
                <h1 className="text-[42px] xl:text-[50px] font-bold text-[#FF4A11] leading-tight">{t.about.nameLast}</h1>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="font-semibold mb-10 lg:mb-14">
                <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed text-justify md:text-left">
                  {t.about.desc}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mb-8 lg:mb-12 w-full">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#FF4A11] mb-4 lg:mb-8">{t.about.education}</h1>
                <div className="bg-[#121212] lg:bg-transparent lg:p-0 rounded-3xl p-5 flex items-start gap-5 lg:flex-row lg:justify-between lg:items-center">
                  <div className="border border-[#FF4A11] rounded-full p-2 flex items-center justify-center shrink-0 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FF4A11]"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814" /></svg>
                  </div>
                  <div className="lg:w-full lg:flex lg:justify-between lg:items-center">
                    <div className="lg:flex lg:flex-col">
                      <h1 className="text-white font-semibold text-sm md:text-base lg:text-xl lg:text-gray-400">{t.about.university}</h1>
                      <h2 className="text-gray-400 lg:text-[#ff4a11] text-xs md:text-sm lg:text-lg mt-1 lg:mt-2 lg:font-bold">{t.about.bachelorDetail}</h2>
                    </div>
                    <div className="flex items-center gap-2 mt-4 lg:mt-0 text-gray-400 text-xs md:text-sm lg:text-lg lg:text-[#ff4a11] font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#FF4A11] lg:hidden"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
                      <span>{t.about.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mb-10 w-full">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#FF4A11] mb-4 lg:mb-8">{t.about.language}</h1>
                <div className="bg-[#121212] lg:bg-transparent lg:p-0 rounded-3xl p-5 flex flex-col lg:flex-row lg:justify-between lg:items-center">
                  <div className="flex justify-between items-center py-2 lg:hidden">
                    <span className="text-white text-sm md:text-base font-semibold">{t.about.indo}</span>
                    <span className="text-[#FF4A11] text-sm md:text-base font-medium">{t.about.fluent}</span>
                  </div>
                  <div className="w-full h-px bg-[#222] my-2 lg:hidden"></div>
                  <div className="flex justify-between items-center py-2 lg:hidden">
                    <span className="text-white text-sm md:text-base font-semibold">{t.about.english}</span>
                    <span className="text-[#FF4A11] text-sm md:text-base font-medium">{t.about.beginner}</span>
                  </div>
                  <div className="hidden lg:flex lg:justify-between lg:w-full lg:items-center">
                    <h1 className="text-gray-400 text-xl">{t.about.indo} - <span className="text-white font-bold">{t.about.fluent}</span></h1>
                    <h1 className="text-gray-400 text-xl">{t.about.english} - <span className="text-white font-bold">{t.about.beginner}</span></h1>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mb-10 w-full lg:hidden">
                <h1 className="text-xl md:text-2xl font-bold text-[#FF4A11] mb-4">{t.about.whatIDo}</h1>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
                  {t.about.whatIDoDesc}
                </p>
                <Link href="#projects" className="w-full flex items-center justify-center gap-3 py-4 rounded-full border border-[#FF4A11] text-[#FF4A11] font-semibold text-sm hover:bg-[#FF4A11] hover:text-white transition-colors">
                  {t.about.seeProjects}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="flex flex-col justify-center items-start lg:items-center w-full h-fit mt-10 md:mt-20 lg:mt-32">
            <h1 className="text-xl md:text-4xl lg:text-[50px] font-bold text-[#FF4A11]">{t.about.skills}</h1>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 lg:mt-12 bg-[#121212] lg:bg-transparent w-full rounded-3xl md:rounded-[40px] py-4 px-4 md:px-8 lg:px-0 overflow-x-auto no-scrollbar lg:flex lg:justify-center"
            >
              <div className="flex gap-3 md:gap-4 lg:gap-8 w-max py-2 lg:flex-wrap lg:justify-center lg:max-w-6xl">
                {skills.map((skl, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="bg-[#1e1e1e] lg:bg-[#1a1a1a] flex justify-center items-center w-14 h-14 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-xl lg:rounded-3xl shrink-0 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Image src={skl} alt="" className="w-7 h-7 md:w-12 md:h-12 lg:w-14 lg:h-14" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
