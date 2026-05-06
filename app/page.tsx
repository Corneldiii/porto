"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "./component/modal";

import bgHome from "@/public/bgHome.png";
import me1 from "@/public/me1.png";
import me2 from "@/public/me2.jpeg";
import skl1 from "@/public/Skills/jav.svg";
import skl2 from "@/public/Skills/php.svg";
import skl3 from "@/public/Skills/bs.svg";
import skl4 from "@/public/Skills/css.svg";
import skl5 from "@/public/Skills/html.svg";
import skl6 from "@/public/Skills/js.svg";
import skl7 from "@/public/Skills/laravel.svg";
import skl8 from "@/public/Skills/mysql.svg";
import skl9 from "@/public/Skills/next.svg";
import skl10 from "@/public/Skills/node.svg";
import skl11 from "@/public/Skills/py.svg";
import skl12 from "@/public/Skills/react.svg";
import skl13 from "@/public/Skills/tailwind.svg";
import skl14 from "@/public/Skills/ts.svg";

import sm1 from "@/public/socialMedia/instagram.svg";
import sm2 from "@/public/socialMedia/twitter-x.svg";
import sm3 from "@/public/socialMedia/tiktok.svg";
import sm4 from "@/public/socialMedia/whatsapp.svg";
import sm5 from "@/public/socialMedia/linkedin.svg";

import L1 from "@/public/projects/Lokerin/L1.png";
import L2 from "@/public/projects/Lokerin/L2.png";
import L3 from "@/public/projects/Lokerin/L3.png";
import L4 from "@/public/projects/Lokerin/L4.png";

import R1 from "@/public/projects/Resep/R1.png";
import R2 from "@/public/projects/Resep/R2.png";
import R3 from "@/public/projects/Resep/R3.png";
import R4 from "@/public/projects/Resep/R4.png";

import B1 from "@/public/projects/SIGBanyumas/B1.png";
import B2 from "@/public/projects/SIGBanyumas/B2.png";
import B3 from "@/public/projects/SIGBanyumas/B3.png";
import B4 from "@/public/projects/SIGBanyumas/B4.png";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mainImgIdx, setMainImgIdx] = useState(0);
  const [open, setOpen] = useState({
    data: NaN,
    status: false,
  });

  const project = [
    {
      img: [L1, L2, L3, L4],
      judul: "Sistem Rekomendasi Pekerjaan (Lokerin)",
      desc: "Lokerin adalah platform pencarian lowongan kerja yang berfokus pada pemberian rekomendasi pekerjaan paling relevan untuk setiap pengguna. Sistem ini menganalisis deskripsi lowongan serta profil atau minat pengguna, lalu menampilkan daftar peluang kerja yang paling sesuai secara otomatis. Dengan pendekatan rekomendasi yang dipersonalisasi, Lokerin membantu pencari kerja menemukan posisi yang tepat dengan lebih cepat, akurat, dan efisien.",
      teknologi: "React Js (Tailwind) - Flask(Python)"
    },
    {
      img: [R1, R2, R3, R4],
      judul: "Kumpulan Resep Masakan (Kuresep Masak)",
      desc: "Kuresep Masak adalah platform yang menyajikan berbagai pilihan menu dan resep masakan, mulai dari hidangan sederhana hingga menu spesial. Pengguna bisa mencari inspirasi masakan, melihat bahan serta langkah pembuatannya, dan menemukan ide menu yang sesuai dengan kebutuhan sehari-hari. Platform ini membantu siapa pun memasak dengan lebih mudah, praktis, dan terarah.",
      teknologi: "Laravel"
    },
    {
      img: [B1, B2, B3, B4],
      judul: "Sistem Informasi Geografis (SIG Banyumas)",
      desc: "SIG Banyumas adalah platform yang menyediakan informasi lokasi wisata secara interaktif, lengkap dengan peta digital, detail destinasi, hingga fitur pemesanan kunjungan. Pengguna dapat menjelajahi berbagai objek wisata, melihat rute terbaik melalui peta, serta melakukan booking secara langsung sehingga perencanaan perjalanan menjadi lebih mudah, cepat, dan terarah.",
      teknologi: "Laravel"
    },
  ];

  async function sendEmail(e: any) {
    e.preventDefault();
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        from: email,
        subject: "Hai Lets Talk!",
        message: message,
      }),
    });
    const status = await res.json();
    if (status) {
      setEmail("");
      setMessage("");
    }
    console.log(status);
  }

  return (
    <div className="flex min-h-screen justify-center bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      <main className="relative flex flex-col min-h-screen w-full max-w-screen">

        {/* ── HERO SECTION ── */}
        <div className="relative w-full h-[85vh] md:h-screen lg:h-screen lg:min-h-212.5 lg:max-h-none">
          <div className="absolute top-0 w-full h-[60vh] md:h-full lg:h-full z-0">
            <Image
              src={bgHome}
              alt="home"
              fill
              className="object-cover object-top md:rounded-b-[70px] lg:rounded-b-none"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a] md:hidden"></div>
          </div>

          {/* ── NAVBAR ── */}
          <nav className="absolute top-0 w-full z-50 flex justify-between items-center px-5 py-5 md:px-10 md:py-8 lg:px-20 lg:py-10">
            <ul className="hidden md:flex justify-center items-center gap-5">
              <li className="font-bold text-xl lg:text-3xl">Portofolio</li>
              <div className="w-0.5 h-7 lg:h-8 bg-white opacity-50"></div>
              <li className="font-semibold text-xl lg:text-2xl opacity-50 hover:opacity-100 transition-opacity"><Link href="#">Home</Link></li>
              <li className="font-semibold text-xl lg:text-2xl opacity-50 hover:opacity-100 transition-opacity"><Link href="#about">About</Link></li>
              <li className="font-semibold text-xl lg:text-2xl opacity-50 hover:opacity-100 transition-opacity"><Link href="#projects">Projects</Link></li>
            </ul>

            {/* Mobile: brand + hamburger */}
            <div className="flex md:hidden justify-between items-center w-full">
              <span className="font-bold text-lg text-white">Portofolio</span>
              <button
                className="text-white p-2 "
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

            {/* Desktop CTA */}
            <div className="hidden md:flex w-40 lg:w-48 h-12 lg:h-14 bg-white rounded-full justify-between items-center px-5 lg:px-6 cursor-pointer hover:scale-105 transition-transform">
              <h1 className="font-bold text-black text-sm lg:text-base">Get in touch</h1>
              <div className="rounded-full bg-[#FF4A11] w-7 h-7 lg:w-8 lg:h-8 flex justify-center items-center">
                <Link href="#getintouch">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 lg:size-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div className="md:hidden absolute top-0 left-0 w-full pt-20 bg-black/50 rounded-b-4xl backdrop-blur px-6 py-4 flex flex-col gap-4 z-0 animate-fadeIn">
              <Link href="#" className="font-semibold text-white text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="#about" className="font-semibold text-white text-lg opacity-70" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="#projects" className="font-semibold text-white text-lg opacity-70" onClick={() => setMenuOpen(false)}>Projects</Link>
              <Link href="#getintouch" className="font-semibold text-[#FF4A11] text-lg" onClick={() => setMenuOpen(false)}>Get in touch →</Link>
            </div>
          )}

          {/* ── HERO TEXT ── */}
          <div className="absolute bottom-0 md:top-1/3 lg:top-[40%] lg:-translate-y-1/2 left-0 w-full px-5 md:px-10 lg:px-20 z-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-10 md:pb-0">
            <div className="font-semibold w-full  lg:w-[30%] flex  flex-col">
              <h1 className="text-white text-lg md:text-4xl lg:text-4xl mb-1 lg:mb-4">Hey, i'm a</h1>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[90px] xl:text-[100px] lg:w-50 font-extrabold leading-tight md:leading-none tracking-tight">Software<br className="md:hidden lg:hidden" /> Developer</h1>

              <h1 className="text-xl md:text-4xl lg:text-4xl text-[#FF4A11] mt-2 lg:mt-2 font-bold lg:w-full lg:text-right  lg:pr-2 xl:pr-4">Beginner</h1>
              <div className="w-16 h-0.5 bg-[#FF4A11] my-6 md:hidden"></div>

              <div className="md:hidden font-semibold max-w-sm">
                <h1 className="text-white text-lg">Aldian Octavius Soesanto</h1>
                <h1 className="text-sm text-gray-400 mt-2 leading-relaxed">
                  Fresh Graduate of Bachelor in informatics degree. That love to making Website
                </h1>
              </div>
            </div>

            {/* Name & judul for Desktop (right aligned) */}
            <div className="hidden md:block font-semibold max-w-full lg:max-w-md xl:max-w-xl mb-4 lg:mb-0 lg:text-left lg:translate-y-12">
              <h1 className="text-lg md:text-2xl lg:text-4xl text-white font-bold">Aldian Octavius Soesanto</h1>
              <h1 className="text-xs md:text-lg lg:text-xl text-gray-400 mt-2 lg:mt-4 leading-relaxed font-normal">
                Fresh Graduate of Bachelor in informatics degree.<br className="hidden lg:block" /> That love to making Website
              </h1>
            </div>
          </div>

          {/* ── TRAITS ROW ── */}
          <div className="w-full px-5 md:px-14 z-20 md:mt-10 lg:absolute lg:bottom-12 lg:left-0 lg:mt-0 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 justify-items-center lg:justify-items-start lg:gap-16 xl:gap-24">
              {[
                { num: "01", label: "Problem Solver", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#FF4A11] mb-3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814" /></svg> },
                { num: "02", label: "Tech-Driven", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#FF4A11] mb-3"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg> },
                { num: "03", label: "Consistent Learner", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#FF4A11] mb-3"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg> },
                { num: "04", label: "Reliable & Detail-Oriented", icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#FF4A11] mb-3"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg> },
              ].map((item) => (
                <div key={item.num} className="bg-[#121212] md:bg-transparent rounded-[20px] w-full p-5 flex flex-col justify-center items-center text-center lg:p-0 lg:items-start lg:text-left">
                  <div className="lg:hidden">{item.icon}</div>
                  <div className="font-bold text-2xl md:text-3xl lg:text-[40px] flex items-center justify-center lg:justify-start gap-1 lg:mb-1">
                    <h1 className="text-[#FF4A11]">#</h1>
                    <h1 className="text-white">{item.num}</h1>
                  </div>
                  <h1 className="text-xs md:text-base lg:text-xl text-gray-400 mt-2 lg:mt-0 font-medium">{item.label}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── INFO LIST (Vertical Mobile / Horizontal Desktop) ── */}
        <div className="w-full mt-10 md:mt-16 px-5 flex justify-center pb-16 border-b border-[#222] lg:border-none lg:mt-0 lg:bg-[#1a1a1a] lg:rounded-b-[80px] xl:rounded-b-[120px] lg:pt-10 lg:pb-5 lg:relative lg:z-10 lg:-translate-y-6">
          <div className="flex flex-col md:grid md:grid-cols-4 w-full max-w-5xl lg:max-w-7xl lg:px-10 gap-8 md:gap-4 lg:gap-10 justify-items-start md:justify-items-center">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-20 md:h-20 lg:w-20 lg:h-20 lg:stroke-1 lg:text-[#ff4a11] lg:opacity-40 text-[#FF4A11]"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814" /></svg>,
                title: "University of Sanata Dharma",
                judul: "Bachelor of Informatics Degree\nGPA 3.73 / 4",
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-20 md:h-20 lg:w-20 lg:h-20 lg:stroke-1 lg:text-[#ff4a11] lg:opacity-40 text-[#FF4A11]"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" /></svg>,
                title: "17 October 2003",
                judul: "23 years old",
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-20 md:h-20 lg:w-20 lg:h-20 lg:stroke-1 lg:text-[#ff4a11] lg:opacity-40 text-[#FF4A11]"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>,
                title: "Work Experience - 1 Years",
                judul: "",
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-20 md:h-20 lg:w-20 lg:h-20 lg:stroke-1 lg:text-[#ff4a11] lg:opacity-40 text-[#FF4A11]"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>,
                title: "4 - Projects Created",
                judul: "",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-row md:flex-col lg:flex-col items-center md:items-center md:text-center gap-6 md:gap-4 lg:gap-4 lg:w-full">
                <div className="shrink-0 flex items-center justify-center p-3 md:bg-[#121212] md:rounded-2xl lg:bg-transparent lg:p-0">
                  {item.icon}
                </div>
                <div className="flex flex-col text-left md:text-center lg:text-center">
                  <h1 className="text-white text-sm md:text-base lg:text-sm font-bold">{item.title}</h1>
                  {item.judul && (
                    <h1 className="text-gray-400 text-xs md:text-sm lg:text-xs whitespace-pre-line mt-1 lg:mt-2 font-semibold">
                      {item.judul}
                    </h1>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ── ABOUT ME ── */}
        <section className="w-full h-fit flex justify-center z-40 my-12 md:my-24 lg:my-0 lg:pt-24 lg:pb-32" id="about">
          <div className="container w-full h-full px-5 md:px-10 lg:px-20 max-w-screen-2xl">

            {/* Header section About Mobile */}
            <div className="flex flex-col mb-6 lg:hidden">
              <h3 className="text-[#FF4A11] font-bold text-lg mb-1">About Me</h3>
              <h1 className="text-5xl font-extrabold text-white">Aldian</h1>
              <h1 className="text-3xl font-bold text-[#FF4A11]">Octavius Soesanto</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Photo single rounded untuk mobile (menggantikan dua foto miring) */}
              <div className="block w-full lg:hidden">
                <Image src={me2} alt="Aldian" className="w-full h-72 md:h-96 rounded-4xl object-cover bg-gray-800" />
              </div>

              {/* Desktop Overlapping Photos */}
              <div className="hidden lg:block relative w-full h-150 xl:h-175">
                <Image src={me2} alt="Aldian" className="absolute w-[320px] xl:w-95 h-120 xl:h-137.5 rounded-[40px] -rotate-12 left-10 xl:left-20 top-10 object-cover border-8 border-transparent shadow-2xl z-10" />
                <Image src={me1} alt="Aldian" className="absolute w-[320px] xl:w-95 h-120 xl:h-137.5 rounded-[40px] rotate-12 top-28 xl:top-32 left-60 xl:left-72 object-cover border-8 border-transparent shadow-2xl z-20" />
              </div>

              {/* Text content desktop & judul mobile */}
              <div className="col-span-1 flex flex-col justify-center">
                {/* Desktop Titles (Hidden on Mobile) */}
                <div className="hidden lg:flex flex-col mb-10">
                  <h1 className="text-[75px] xl:text-[90px] font-extrabold text-white leading-none tracking-tight">Aldian</h1>
                  <h1 className="text-[42px] xl:text-[50px] font-bold text-[#FF4A11] leading-tight">Octavius Soesanto</h1>
                </div>

                <div className="font-semibold mb-10 lg:mb-14">
                  <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed text-justify md:text-left">
                    My name is Aldian Octavius Soesanto, and I am 22 years old. I live in Purbalingga, central java, and I am currently a fresh graduate of bachelor informatics degree with a strong interest in technology and continuous learning. I enjoy exploring new topics, improving my skills, and working on small projects that help me grow personally and professionally.
                  </p>
                </div>

                {/* Education Card */}
                <div className="mb-8 lg:mb-12 w-full">
                  <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#FF4A11] mb-4 lg:mb-8">Education</h1>
                  <div className="bg-[#121212] lg:bg-transparent lg:p-0 rounded-[24px] p-5 flex items-start gap-5 lg:flex-row lg:justify-between lg:items-center">
                    <div className="border border-[#FF4A11] rounded-full p-2 flex items-center justify-center flex-shrink-0 lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FF4A11]"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814" /></svg>
                    </div>
                    <div className="lg:w-full lg:flex lg:justify-between lg:items-center">
                      <div className="lg:flex lg:flex-col">
                        <h1 className="text-white font-semibold text-sm md:text-base lg:text-xl lg:text-gray-400">University of Sanata Dharma</h1>
                        <h2 className="text-gray-400 lg:text-[#ff4a11] text-xs md:text-sm lg:text-lg mt-1 lg:mt-2 lg:font-bold">Bachelor of Informatics Degree - GPA 3.73/4</h2>
                      </div>
                      <div className="flex items-center gap-2 mt-4 lg:mt-0 text-gray-400 text-xs md:text-sm lg:text-lg lg:text-[#ff4a11] font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#FF4A11] lg:hidden"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
                        <span>Sep 22 - Jan 26</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Language Card */}
                <div className="mb-10 w-full">
                  <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#FF4A11] mb-4 lg:mb-8">Language</h1>
                  <div className="bg-[#121212] lg:bg-transparent lg:p-0 rounded-[24px] p-5 flex flex-col lg:flex-row lg:justify-between lg:items-center">

                    {/* Mobile Wrapper */}
                    <div className="flex justify-between items-center py-2 lg:hidden">
                      <span className="text-white text-sm md:text-base font-semibold">Bahasa Indonesia</span>
                      <span className="text-[#FF4A11] text-sm md:text-base font-medium">Fluent</span>
                    </div>
                    <div className="w-full h-[1px] bg-[#222] my-2 lg:hidden"></div>
                    <div className="flex justify-between items-center py-2 lg:hidden">
                      <span className="text-white text-sm md:text-base font-semibold">English</span>
                      <span className="text-[#FF4A11] text-sm md:text-base font-medium">Beginner</span>
                    </div>

                    {/* Desktop Flex Language Format */}
                    <div className="hidden lg:flex lg:justify-between lg:w-full lg:items-center">
                      <h1 className="text-gray-400 text-xl">Bahasa Indonesia - <span className="text-white font-bold">Fluent</span></h1>
                      <h1 className="text-gray-400 text-xl">English - <span className="text-white font-bold">Beginner</span></h1>
                    </div>

                  </div>
                </div>

                {/* What I Do Section (Mobile Only as per design differences, but wrapped nicely if needed) */}
                <div className="mb-10 w-full lg:hidden">
                  <h1 className="text-xl md:text-2xl font-bold text-[#FF4A11] mb-4">What I Do</h1>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
                    I build modern, responsive, and user-friendly websites with clean code and great attention to detail.
                  </p>
                  <Link href="#projects" className="w-full flex items-center justify-center gap-3 py-4 rounded-full border border-[#FF4A11] text-[#FF4A11] font-semibold text-sm hover:bg-[#FF4A11] hover:text-white transition-colors">
                    See My Projects
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>

              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-col justify-center items-start lg:items-center w-full h-fit mt-10 md:mt-20 lg:mt-32">
              <h1 className="text-xl md:text-4xl lg:text-[50px] font-bold text-[#FF4A11]">Skills</h1>
              <div className="mt-6 lg:mt-12 bg-[#121212] lg:bg-transparent w-full rounded-[24px] md:rounded-[40px] py-4 px-4 md:px-8 lg:px-0 overflow-x-auto no-scrollbar lg:flex lg:justify-center">
                <div className="flex gap-3 md:gap-4 lg:gap-8 w-max py-2 lg:flex-wrap lg:justify-center lg:max-w-6xl">
                  {[skl1, skl2, skl3, skl4, skl5, skl6, skl7, skl8, skl9, skl10, skl11, skl12, skl13, skl14].map((skl, i) => (
                    <div key={i} className="bg-[#1e1e1e] lg:bg-[#1a1a1a] flex justify-center items-center w-14 h-14 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-xl lg:rounded-3xl shrink-0 hover:scale-110 transition-transform cursor-pointer">
                      <Image src={skl} alt="" className="w-7 h-7 md:w-12 md:h-12 lg:w-14 lg:h-14" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="flex flex-col justify-center items-center w-full h-fit my-16 md:my-24 lg:my-32 " id="projects">
          <div className="container w-full h-full px-5 md:px-10 lg:px-20">
            <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px] text-center font-extrabold text-white">My Recap Projects</h1>

            {/* Mobile: stacked cards */}
            <div className="flex flex-col gap-6 mt-10 md:hidden">
              {project.map((p, i) => (
                <div
                  key={i}
                  className="relative w-full h-60 rounded-3xl overflow-hidden cursor-pointer border border-[#222]"
                  onClick={() => setOpen({ data: i, status: true })}
                >
                  <Image src={p.img[0]} alt="" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5">
                    <span className="text-white font-bold text-lg">Project {i + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet: 3-col grid */}
            <div className="hidden md:grid lg:hidden grid-cols-3 gap-5 mt-10">
              {project.map((p, i) => (
                <div
                  key={i}
                  className="relative w-full h-64 rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setOpen({ data: i, status: true })}
                >
                  <Image src={p.img[0]} alt="" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
                </div>
              ))}
            </div>

            {/* Desktop: original bento layout */}
            <div className="hidden lg:flex flex-wrap justify-center items-center mt-24 gap-10 w-full max-h-240 no-scrollbar overflow-y-scroll">
              {project.map((p, i) => (
                <div
                  key={i}
                  className="relative w-87.5 xl:w-100 h-112.5 rounded-3xl overflow-hidden cursor-pointer group border border-[#333]"
                  onClick={() => setOpen({ data: i, status: true })}
                >
                  <Image
                    src={p.img[0]}
                    alt={`Project ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">

                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h1 className="text-2xl font-bold text-white mb-2 ">
                        Project {i + 1}
                      </h1>
                      <p className="text-sm text-gray-300 line-clamp-2">
                        {p.judul || "Klik untuk melihat detail project ini."}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GET IN TOUCH ── */}
        <section className="flex flex-col justify-center items-center w-full h-fit my-10 md:my-24 lg:my-32 pb-10" id="getintouch">
          <div className="container w-full h-full px-5 md:px-10 lg:px-20 py-10 bg-[#0f0f0f] md:bg-transparent rounded-4xl md:rounded-none lg:max-w-7xl lg:mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-[80px] font-bold text-center md:text-left text-white lg:mb-20">Lets Get A Talk!</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-fit mt-10 md:mt-16 gap-12 lg:gap-20">

              {/* Form */}
              <div className="flex flex-col gap-6 lg:gap-8">
                <div className="flex flex-col gap-3 lg:gap-5">
                  <label htmlFor="emailField" className="text-sm md:text-2xl font-semibold text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="emailField"
                    value={email}
                    className="bg-[#1a1a1a] border border-[#333] w-full h-14 lg:h-16 rounded-2xl px-5 text-white focus:outline-none focus:border-[#FF4A11] lg:text-lg"
                    placeholder="Your Email (e.g abdul@gmail.com)"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-3 lg:gap-5">
                  <label htmlFor="messageField" className="text-sm md:text-2xl font-semibold text-gray-300">Message</label>
                  <textarea
                    name="message"
                    id="messageField"
                    value={message}
                    className="bg-[#1a1a1a] border border-[#333] w-full h-40 lg:h-56 rounded-2xl p-5 text-white resize-none focus:outline-none focus:border-[#FF4A11] lg:text-lg"
                    placeholder="Lets keep in touch"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full md:w-fit px-10 py-4 lg:px-14 lg:py-5 lg:text-lg rounded-full font-bold hover:bg-[#e0400f] cursor-pointer bg-[#FF4A11] text-white transition-colors"
                  onClick={sendEmail}
                >
                  Submit
                </button>
              </div>

              {/* Social links */}
              <div className="flex flex-col gap-6 mt-8 md:mt-0 lg:pt-12 lg:w-200">
                <h1 className="text-center md:text-left font-semibold text-xl md:text-3xl lg:text-4xl text-gray-300 lg:mb-6">Or maybe try another ways</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#1a1a1a] md:bg-transparent p-6 rounded-3xl md:p-0  w-full">
                  <div className="flex flex-col gap-5 lg:gap-8 lg:w-full ">
                    <a href="https://www.instagram.com/corneldiii/" className="flex items-center gap-4 lg:gap-6 group">
                      <Image src={sm1} alt="Instagram" className="invert w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 group-hover:scale-110 transition-transform" />
                      <h1 className="text-white font-medium text-sm md:text-xl lg:text-2xl group-hover:text-[#FF4A11] transition-colors">@Corneldiii</h1>
                    </a>
                    <div className="flex items-center gap-4 lg:gap-6 group cursor-pointer">
                      <Image src={sm2} alt="Twitter" className="invert w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 group-hover:scale-110 transition-transform" />
                      <h1 className="text-white font-medium text-sm md:text-xl lg:text-2xl group-hover:text-[#FF4A11] transition-colors">@nyamukBerisik</h1>
                    </div>
                    <div className="flex items-center gap-4 lg:gap-6 group cursor-pointer">
                      <Image src={sm4} alt="WhatsApp" className="invert w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 group-hover:scale-110 transition-transform" />
                      <h1 className="text-white font-medium text-sm md:text-xl lg:text-2xl group-hover:text-[#FF4A11] transition-colors">+62 85640835130</h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 lg:gap-8">
                    <div className="flex items-center gap-4 lg:gap-6 group cursor-pointer">
                      <Image src={sm3} alt="TikTok" className="invert w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 group-hover:scale-110 transition-transform" />
                      <h1 className="text-white font-medium text-sm md:text-xl lg:text-2xl group-hover:text-[#FF4A11] transition-colors">@tireknodon</h1>
                    </div>
                    <div className="flex items-center gap-4 lg:gap-6 group cursor-pointer">
                      <Image src={sm5} alt="LinkedIn" className="invert w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 group-hover:scale-110 transition-transform" />
                      <h1 className="text-white font-medium text-sm md:text-xl lg:text-2xl group-hover:text-[#FF4A11] transition-colors">Aldian Octavius</h1>
                    </div>
                    <div className="flex items-center gap-4 lg:gap-6 group cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 shrink-0 text-white group-hover:scale-110 group-hover:text-[#FF4A11] transition-all">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                      <h1 className="text-white font-medium text-sm md:text-lg lg:text-xl break-all group-hover:text-[#FF4A11] transition-colors">aldianocta178@gmail.com</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col items-center justify-center mt-10 md:mt-20 mb-6 absolute bottom-0 text-xs lg:text-sm text-gray-500">
            <p>© 2024 Aldian Octavius Soesanto</p>
            <p>All rights reserved.</p>
          </div>
        </section>

      </main>

      {/* ── MODAL ── */}
      <Modal
        isOpen={open.status}
        onClose={() => {
          setOpen({ data: NaN, status: false });
          setMainImgIdx(0); // Reset gambar utama kembali ke awal saat modal ditutup
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[80vh] overflow-y-auto bg-[#1a1a1a] p-4 rounded-xl">
          <div className="flex flex-col gap-3">

            {/* ── GAMBAR UTAMA (INDUK) ── */}
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden transition-all duration-300">
              {!isNaN(open.data) && (
                <Image
                  src={project[open.data]?.img[mainImgIdx]}
                  alt=""
                  fill
                  className="object-cover border border-[#333]"
                />
              )}
            </div>

            {/* ── GAMBAR ANAK (THUMBNAILS) ── */}
            <div className="grid grid-cols-3 gap-2">
              {!isNaN(open.data) && [0, 1, 2, 3]
                .filter((idx) => idx !== mainImgIdx)
                .map((idx) => (
                  <div
                    key={idx}
                    className="relative w-full h-24 md:h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={() => setMainImgIdx(idx)}
                  >
                    <Image
                      src={project[open.data]?.img[idx]}
                      alt=""
                      fill
                      className="object-cover border border-[#333]"
                    />
                  </div>
                ))}
            </div>

          </div>

          <div className="px-2 md:px-4 py-2">
            <h1 className="text-gray-300 font-semibold text-sm md:text-base text-center lg:text-2xl">
              {!isNaN(open.data) && project[open.data]?.judul}
            </h1>
            <h1 className="text-gray-400 font-semibold text-sm md:text-base text-justify lg:w-full lg:text-xl lg:mt-10">
              {!isNaN(open.data) && project[open.data]?.desc}
            </h1>
            <div className="w-full h-fit flex flex-col justify-between items-start">
              <h1 className="text-gray-50 font-semibold text-sm md:text-base text-justify lg:w-full lg:text-xl lg:mt-10">
                Teknologi :
              </h1>
              <h1 className="text-gray-400 font-semibold text-sm md:text-base text-justify lg:w-full lg:text-xl">
                {!isNaN(open.data) && project[open.data]?.teknologi}
              </h1>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}