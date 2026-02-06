"use client";
import Image from "next/image";
import { useState } from "react";

import bgHome from "@/public/bgHome.png";

export default function Home() {



  return (
    <div className="flex min-h-screen items-center justify-center  bg-zinc-50 font-sans dark:bg-black overflow-x-hidden">
      <main className="flex flex-col min-h-screen w-full max-w-screen h-1000 ">
        <Image src={bgHome} alt="home" className="min-w-screen max-h-320 rounded-b-[100px] z-10" />
        <div className="flex flex-col justify-between absolute min-h-screen max-w-screen w-full z-11">
          <ul className="flex justify-between items-start w-full p-10 ">
            <div className="flex justify-center items-start gap-5">
              <li className="font-semibold text-2xl">
                Portofolio
              </li>
              <div className="w-0.5 h-8 bg-white"></div>
              <li className="font-semibold text-2xl opacity-50">Home</li>
              <li className="font-semibold text-2xl opacity-50">About</li>
              <li className="font-semibold text-2xl opacity-50">Projects</li>
            </div>
            <div className="w-45 h-13 bg-white rounded-4xl flex justify-between items-center px-5">
              <h1 className="font-semibold text-black ">Get in touch</h1>
              <div className="rounded-full bg-orange-700  w-8 h-8 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
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
        <div className="bg-white/10 w-full h-120 -mt-20 rounded-b-[100px]"></div>

      </main>
    </div>
  );
}
