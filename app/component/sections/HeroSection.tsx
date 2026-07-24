"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RollingText from "../RollingText";
import Navbar from "../Navbar";
import ParticleBackground from "../ParticleBackground";
import bgHome from "@/public/bgHome.png";
import { traits, infoCards, titleList } from "@/lib/data";
import { useLang } from "@/context/LangContext";

function InfoIcon({ icon }: { icon: string }) {
  const cls = "w-10 h-10 md:w-20 md:h-20 lg:w-20 lg:h-20 lg:stroke-1 lg:text-[#ff4a11] lg:opacity-40 text-[#FF4A11]";
  switch (icon) {
    case "education":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cls}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814" />
        </svg>
      );
    case "birthday":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cls}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
        </svg>
      );
    case "experience":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cls}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
      );
    case "projects":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cls}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLang();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % titleList.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const traitIcons = [
    <svg key="0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#FF4A11] mb-3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814" /></svg>,
    <svg key="1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#FF4A11] mb-3"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>,
    <svg key="2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#FF4A11] mb-3"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>,
    <svg key="3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#FF4A11] mb-3"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>,
  ];

  const traitLabels = [
    t.traits.problemSolver,
    t.traits.techDriven,
    t.traits.consistentLearner,
    t.traits.detailOriented,
  ];

  const infoCardData = [
    { title: t.infoCards.university, judul: t.infoCards.bachelor },
    { title: t.infoCards.birthday, judul: t.infoCards.age },
    { title: t.infoCards.workExp, judul: "" },
    { title: t.infoCards.projectsCreated, judul: "" },
  ];

  return (
    <>
      <div className="relative w-full h-[85vh] md:h-screen lg:h-screen lg:min-h-212.5 lg:max-h-none">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-0 w-full h-[60vh] md:h-full lg:h-full z-0"
        >
          <Image
            src={bgHome}
            alt="home"
            fill
            priority
            className="object-cover object-top md:rounded-b-[70px] lg:rounded-b-none"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a] md:hidden"></div>
        </motion.div>

        <ParticleBackground />
        <Navbar />

        <div className="absolute bottom-0 md:top-1/3 lg:top-[40%] lg:-translate-y-1/2 left-0 w-full px-5 md:px-10 lg:px-20 z-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-10 md:pb-0">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-semibold w-full lg:w-[31%] flex flex-col"
          >
            <h1 className="text-white text-lg md:text-4xl lg:text-4xl mb-1 lg:mb-4">{t.hero.hey}</h1>
            <RollingText title={titleList} currentIndex={currentIndex} />
            <h1 className="text-xl md:text-4xl lg:text-4xl text-[#FF4A11] mt-2 lg:mt-2 font-bold lg:w-full lg:text-right lg:pr-2 xl:pr-4">{t.hero.intermediate}</h1>
            <div className="w-16 h-0.5 bg-[#FF4A11] my-6 md:hidden"></div>
            <div className="md:hidden font-semibold max-w-sm">
              <h1 className="text-white text-lg">{t.hero.name}</h1>
              <h1 className="text-sm text-gray-400 mt-2 leading-relaxed">{t.hero.desc}</h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:block font-semibold max-w-full lg:max-w-md xl:max-w-xl mb-4 lg:mb-0 lg:text-left lg:translate-y-12"
          >
            <h1 className="text-lg md:text-2xl lg:text-4xl text-white font-bold">{t.hero.name}</h1>
            <h1 className="text-xs md:text-lg lg:text-xl text-gray-400 mt-2 lg:mt-4 leading-relaxed font-normal">
              {t.hero.desc}
            </h1>
          </motion.div>
        </div>

        <div className="w-full px-5 md:px-14 z-20 md:mt-10 lg:absolute lg:bottom-12 lg:left-0 lg:mt-0 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-items-center lg:justify-items-start lg:gap-16 xl:gap-24">
            {traits.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                className="bg-[#121212] md:bg-transparent rounded-[20px] w-full p-5 flex flex-col justify-center items-center text-center lg:p-0 lg:items-start lg:text-left"
              >
                <div className="lg:hidden">{traitIcons[i]}</div>
                <div className="font-bold text-2xl md:text-3xl lg:text-[40px] flex items-center justify-center lg:justify-start gap-1 lg:mb-1">
                  <h1 className="text-[#FF4A11]">#</h1>
                  <h1 className="text-white">{item.num}</h1>
                </div>
                <h1 className="text-xs md:text-base lg:text-xl text-gray-400 mt-2 lg:mt-0 font-medium">{traitLabels[i]}</h1>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full mt-10 md:mt-16 px-5 flex justify-center pb-16 border-b border-[#222] lg:border-none lg:mt-0 lg:bg-[#1a1a1a] lg:rounded-b-[80px] xl:rounded-b-[120px] lg:pt-10 lg:pb-5 lg:relative lg:z-10 lg:-translate-y-6"
      >
        <div className="flex flex-col md:grid md:grid-cols-4 w-full max-w-5xl lg:max-w-7xl lg:px-10 gap-8 md:gap-4 lg:gap-10 justify-items-start md:justify-items-center">
          {infoCardData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-row md:flex-col lg:flex-col items-center md:items-center md:text-center gap-6 md:gap-4 lg:gap-4 lg:w-full"
            >
              <div className="shrink-0 flex items-center justify-center p-3 md:bg-[#121212] md:rounded-2xl lg:bg-transparent lg:p-0">
                <InfoIcon icon={infoCards[i].icon} />
              </div>
              <div className="flex flex-col text-left md:text-center lg:text-center">
                <h1 className="text-white text-sm md:text-base lg:text-sm font-bold">{item.title}</h1>
                {item.judul && (
                  <h1 className="text-gray-400 text-xs md:text-sm lg:text-xs whitespace-pre-line mt-1 lg:mt-2 font-semibold">
                    {item.judul}
                  </h1>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
