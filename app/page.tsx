"use client";
import Image from "next/image";
import { useState } from "react";
import { Resend } from 'resend';
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

import L1 from "@/public/projects/Lokerin/L1.png"
import L2 from "@/public/projects/Lokerin/L2.png"
import L3 from "@/public/projects/Lokerin/L3.png"
import L4 from "@/public/projects/Lokerin/L4.png"

import R1 from "@/public/projects/Resep/R1.png"
import R2 from "@/public/projects/Resep/R2.png"
import R3 from "@/public/projects/Resep/R3.png"
import R4 from "@/public/projects/Resep/R4.png"

import B1 from "@/public/projects/SIGBanyumas/B1.png"
import B2 from "@/public/projects/SIGBanyumas/B2.png"
import B3 from "@/public/projects/SIGBanyumas/B3.png"
import B4 from "@/public/projects/SIGBanyumas/B4.png"
import Link from "next/link";


export default function Home() {


  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [open, setOpen] = useState({
    data: NaN,
    status: false
  });

  const project = [
    {
      img: [L1, L2, L3, L4],
      desc: "cekcekckekcekke"

    },
    {
      img: [R1, R2, R3, R4],
      desc: "cocokcockock"
    },
    {
      img: [B1, B2, B3, B4],
      desc: "cikcickcick"
    }

  ]

  async function sendEmail(e: any) {
    e.preventDefault();

    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        from: email,
        subject: "Hai Lets Talk!",
        message: message,
      }),
    })

    const status = await res.json()
    if (status) {
      setEmail("")
      setMessage("")
    }
    console.log(status)


  }

  return (
    <div className="flex min-h-screen items-center justify-center  bg-zinc-50 font-sans dark:bg-black overflow-x-hidden">
      <main className="relative flex flex-col min-h-screen w-full max-w-screen h-1000 ">

        <Image src={bgHome} alt="home" className="min-w-screen max-h-320 rounded-b-[100px] z-10" />
        <div className="flex flex-col justify-between absolute min-h-screen max-w-screen w-full z-11">
          <ul className="flex justify-between items-start w-full p-10 ">
            <div className="flex justify-center items-start gap-5">
              <li className="font-semibold text-2xl">
                Portofolio
              </li>
              <div className="w-0.5 h-8 bg-white"></div>
              <li className="font-semibold text-2xl opacity-50" ><Link href="#">Home</Link> </li>
              <li className="font-semibold text-2xl opacity-50"><Link href="#about">About</Link></li>
              <li className="font-semibold text-2xl opacity-50"><Link href="#projects">Projects</Link></li>

            </div>
            <div className="w-45 h-13 bg-white rounded-4xl flex justify-between items-center px-5">
              <h1 className="font-semibold text-black ">Get in touch</h1>
              <div className="rounded-full bg-orange-700  w-8 h-8 flex justify-center items-center">
                <Link href="#getintouch">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </ul>
          <div className="p-10 font-semibold pl-30 w-full flex justify-between items-center ">
            <div className="font-semibold w-fit">
              <h1 className="text-4xl">Hey, i'm a</h1>
              <h1 className="text-9xl font-extrabold">Software</h1>
              <h1 className="text-9xl font-extrabold">Developer</h1>
              <h1 className="text-4xl text-end">Beginner</h1>
            </div>
            <div className="font-semibold w-150">
              <h1 className="text-3xl">Aldian Octavius Soesanto</h1>
              <h1 className="text-2xl opacity-50 line-clamp-4">Fresh Graduate of Bachelor in informatics degree. That love to making Website</h1>
            </div>
          </div>
          <div className="grid grid-cols-4 justify-items-center py-10 px-50">
            <div className="col-span-1 flex flex-col justify-center items-start ">
              <div className="font-semibold text-4xl flex">
                <h1 className="text-orange-700">#</h1>
                <h1>01</h1>
              </div>
              <h1 className="text-2xl opacity-50">Problem Solver</h1>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-start ">
              <div className="font-semibold text-4xl flex">
                <h1 className="text-orange-700">#</h1>
                <h1>02</h1>
              </div>
              <h1 className="text-2xl opacity-50">Tech-Driven</h1>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-start ">
              <div className="font-semibold text-4xl flex">
                <h1 className="text-orange-700">#</h1>
                <h1>03</h1>
              </div>
              <h1 className="text-2xl opacity-50">Consistent Learner</h1>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-start ">
              <div className="font-semibold text-4xl flex">
                <h1 className="text-orange-700">#</h1>
                <h1>04</h1>
              </div>
              <h1 className="text-2xl opacity-50">Reliable & Detail-Oriented</h1>
            </div>
          </div>
        </div>
        <div className="bg-[#151515] w-full h-120 -mt-20 rounded-b-[100px] flex justify-center items-start z-9">
          <div className="grid grid-cols-4 mt-15 w-450 p-10">
            <div className="col-span-1 flex flex-col justify-between items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="size-40 mt-20 opacity-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
              <h1 className="text-2xl text-center font-semibold opacity-50">University of Sanata Dharma <br /> Bachelor of Informatics Degree <br /> GPA 3.73 /4 </h1>

            </div>

            <div className="col-span-1 flex flex-col justify-between items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="size-40 mt-20 opacity-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
              </svg>
              <h1 className="text-2xl text-center font-semibold opacity-50">17 October 2003 <br /> 23 years old</h1>

            </div>
            <div className="col-span-1 flex flex-col justify-between items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="size-40 mt-20 opacity-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
              </svg>
              <h1 className="text-2xl text-center font-semibold opacity-50">Work Experiance - 1 Years</h1>

            </div>
            <div className="col-span-1 flex flex-col justify-between items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="size-40 mt-20 opacity-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              <h1 className="text-2xl text-center font-semibold opacity-50">4 - Projects Created</h1>

            </div>
          </div>

        </div>
        <div className=" absolute top-300  w-full h-300 bg-[radial-gradient(circle_farthest-side_at_top,rgba(150,0,0,0.7),#000)]"></div>





        <section className="w-full h-fit flex justify-center z-40 my-30 " id="about">
          <div className="container  w-full h-full pt-50">
            <div className="grid grid-cols-2">
              <div className="col-span-1 relative">
                <Image src={me2} alt="" className="absolute w-80 h-120 rounded-[25px] -rotate-25 -left-20" />
                <Image src={me1} alt="" className="absolute w-80 h-120 rounded-[25px] rotate-25 top-50 left-60" />
              </div>
              <div className="col-span-1">
                <div className="flex flex-col">
                  <h1 className="text-7xl font-extrabold ">Aldian</h1>
                  <h1 className="text-5xl font-semibold text-orange-700">Octavius Soesanto</h1>
                </div>
                <div className="font-semibold mt-10">
                  <h1 className="line-clamp-5 text-lg text-white/50">
                    My name is Aldian Octavius Soesanto, and I am 22 years old. I live in Purbalingga, central java, and I am currently a fresh graduate of bachelor informatics degree with a strong interest in technology and continuous learning. I enjoy exploring new topics, improving my skills, and working on small projects that help me grow personally and professionally.
                  </h1>
                </div>

                <div className="mt-10">
                  <h1 className="text-5xl font-semibold text-orange-700">Education</h1>
                  <div className="flex justify-between items-start py-10 font-semibold">
                    <h1 className="text-white/50">
                      Univeristy of Santa Dharma <br /> Bachelor of Informatics Degree - GPA 3.73/4
                    </h1>
                    <h1 className="text-white/50">
                      Sep 22 - Jan 26
                    </h1>
                  </div>
                </div>

                <div className="mt-10">
                  <h1 className="text-5xl font-semibold text-orange-700">Language</h1>

                  <div className="mt-10 flex justify-between items-center font-semibold text-white/50">
                    <h1>
                      Bahasa Indonesia - Fluent
                    </h1>
                    <h1>
                      English - Beginner
                    </h1>
                  </div>

                </div>

              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full h-fit mt-50">
              <h1 className="text-5xl font-semibold text-orange-700">Skills</h1>
              <div className="mt-10 bg-[#151515] w-full h-35 rounded-[40px] py-2 px-15 overflow-x-scroll overflow-y-hidden no-scrollbar -scroll-mb-10">
                <div className="grid grid-cols-14 w-500 h-fit pt-3">

                  <div className="col-span-1 bg-[#333333] flex justify-center items-center w-25 h-25 rounded-2xl">
                    <Image src={skl1} alt="" className=" w-15 h-fit" />
                  </div>
                  <div className="col-span-1 bg-[#333333] flex justify-center items-center w-25 h-25 rounded-2xl">
                    <Image src={skl2} alt="" className=" w-15 h-fit" />
                  </div>
                  <div className="col-span-1 bg-[#333333] flex justify-center items-center w-25 h-25 rounded-2xl">
                    <Image src={skl3} alt="" className=" w-15 h-fit" />
                  </div>
                  <div className="col-span-1 bg-[#333333] flex justify-center items-center w-25 h-25 rounded-2xl">
                    <Image src={skl4} alt="" className=" w-15 h-fit" />
                  </div>
                  <div className="col-span-1 bg-[#333333] flex justify-center items-center w-25 h-25 rounded-2xl">
                    <Image src={skl5} alt="" className=" w-15 h-fit" />
                  </div>
                  <div className="col-span-1 bg-[#333333] flex justify-center items-center w-25 h-25 rounded-2xl">
                    <Image src={skl6} alt="" className=" w-15 h-fit" />
                  </div>
                  <div className="col-span-1 bg-[#333333] flex justify-center items-center w-25 h-25 rounded-2xl">
                    <Image src={skl7} alt="" className=" w-15 h-fit" />
                  </div>
                  <div className="col-span-1 bg-[#333333] flex justify-center items-center w-25 h-25 rounded-2xl">
                    <Image src={skl8} alt="" className=" w-15 h-fit" />
                  </div>
                  <div className="col-span-1 bg-[#333333] flex justify-center items-center w-25 h-25 rounded-2xl">
                    <Image src={skl9} alt="" className=" w-15 h-fit" />
                  </div>
                  <div className="col-span-1 bg-[#333333] flex justify-center items-center w-25 h-25 rounded-2xl">
                    <Image src={skl10} alt="" className=" w-15 h-fit" />
                  </div>
                  <div className="col-span-1 bg-[#333333] flex justify-center items-center w-25 h-25 rounded-2xl">
                    <Image src={skl11} alt="" className=" w-15 h-fit" />
                  </div>
                  <div className="col-span-1 bg-[#333333] flex justify-center items-center w-25 h-25 rounded-2xl">
                    <Image src={skl12} alt="" className=" w-15 h-fit" />
                  </div>
                  <div className="col-span-1 bg-[#333333] flex justify-center items-center w-25 h-25 rounded-2xl">
                    <Image src={skl13} alt="" className=" w-15 h-fit" />
                  </div>
                  <div className="col-span-1 bg-[#333333] flex justify-center items-center w-25 h-25 rounded-2xl">
                    <Image src={skl14} alt="" className=" w-15 h-fit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full h-fit my-30" id="projects">
          <div className="container w-full h-full pt-50 ">
            <h1 className="text-9xl text-center font-extrabold">My Recap Projects</h1>
            <div className="flex justify-center items-center my-20 gap-10">
              {/* <div className="w-100 h-190 bg-white cursor-pointer" onClick={() => setOpen({ data: 1, status: true })}></div> img 1 */}
              <Image src={project[1]?.img[0]} alt="" className="w-100 h-190 object-left object-cover cursor-pointer" onClick={() => setOpen({ data: 1, status: true })} />
              <div className="flex flex-col justify-center items-center gap-10">
                <div className="flex justify-center items-center gap-10">
                  <Image src={project[0]?.img[0]} alt="" className=" w-270 h-90 object-cover object-top  cursor-pointer" onClick={() => setOpen({ data: 0, status: true })} />
                </div>
                <div className="flex justify-center items-center gap-10">
                  <Image src={project[2]?.img[0]} alt="" className="w-83 h-90 bg-white object-cover object-right cursor-pointer" onClick={() => setOpen({ data: 2, status: true })} />
                  <Image src={project[2]?.img[0]} alt="" className="w-83 h-90 bg-white object-cover object-right cursor-pointer" onClick={() => setOpen({ data: 2, status: true })} />
                  <Image src={project[2]?.img[0]} alt="" className="w-83 h-90 bg-white object-cover object-right cursor-pointer" onClick={() => setOpen({ data: 2, status: true })} />
                </div>
              </div>
            </div>

          </div>
        </section>


        <section className="flex flex-col justify-center items-center w-full h-fit my-30" id="getintouch">
          <div className="container w-full h-full py-50">
            <h1 className="text-7xl font-semibold">Lets Get A Talk ! </h1>

            <div className="grid grid-cols-2 w-full h-fit mt-25">
              <div className="grid col-span-1 gap-20">
                <div className="flex flex-col justify-center items-start gap-5">
                  <label htmlFor="emailField" className="text-2xl font-semibold">Email</label>
                  <input type="email" name="email" id="emailField" className="bg-[#151515] w-full h-10 rounded-xl px-5" placeholder="Your Email (e.g abdul@gmail.com)" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col justify-center items-start gap-5">
                  <label htmlFor="emailField" className="text-2xl font-semibold">Message</label>
                  <textarea name="message" id="messageField" className="bg-[#151515] w-full h-50 rounded-xl p-5" placeholder="Lets keep in touch" onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button type="submit" className="w-fit h-fit px-15 py-3 rounded-2xl font-semibold hover:bg-gray-900 cursor-pointer bg-[#151515]" onClick={sendEmail}>Submit</button>
              </div>

              <div className="grid cols-span-1 p-5">
                <h1 className="text-center font-semibold text-5xl">Or maybe try another ways</h1>
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-1 flex flex-col justify-between items-start px-5">
                    <div className="flex justify-center items-center gap-5">
                      <a href="https://www.instagram.com/corneldiii/" className="flex justify-center items-center gap-5">
                        <Image src={sm1} alt="" className="invert size-15 cursor-pointer" />
                        <h1 className="text-white font-semibold text-2xl">@Corneldiii</h1>
                      </a>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                      <Image src={sm2} alt="" className="invert size-15" />
                      <h1 className="text-white font-semibold text-2xl">@nyamukBerisik</h1>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                      <Image src={sm4} alt="" className="invert size-15" />
                      <h1 className="text-white font-semibold text-2xl">+62 85640835130</h1>
                    </div>
                  </div>
                  <div className="col-span-1 flex flex-col justify-between items-start px-5">
                    <div className="flex justify-center items-center gap-5">
                      <Image src={sm3} alt="" className="invert size-15" />
                      <h1 className="text-white font-semibold text-2xl">@tireknodon</h1>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                      <Image src={sm5} alt="" className="invert size-15" />
                      <h1 className="text-white font-semibold text-2xl">Aldian Octavius</h1>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-15">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>

                      <h1 className="text-white font-semibold text-2xl">aldianocta178@gmail.com</h1>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Modal isOpen={open.status} onClose={() => setOpen({ data: NaN, status: false })}>
        <div className="h-200 grid grid-cols-2 max-h-200">
          <div className="col-span-1 flex flex-col justify-between items-center">
            {/* <div className="bg-gray-500 w-full h-145"></div> */}
            <Image src={project[open.data]?.img[0]} alt="" className="w-full h-145 border-solid border-black/60 border-2 object-cover" />
            <div className="grid grid-cols-3 gap-5 w-full">
              <Image src={project[open.data]?.img[1]} alt="" className=" col-span-1 w-full h-50 border-solid object-cover border-black/60 border-2" />
              <Image src={project[open.data]?.img[2]} alt="" className=" col-span-1 w-full h-50 border-solid object-cover border-black/60 border-2" />
              <Image src={project[open.data]?.img[3]} alt="" className=" col-span-1 w-full h-50 border-solid object-cover border-black/60 border-2" />
            </div>
          </div>
          <div className="col-span-1 px-5">
            <h1 className="text-black/80 font-semibold text-justify">
              {project[open.data]?.desc}

            </h1>

          </div>

        </div>
      </Modal>
    </div>
  );
}
