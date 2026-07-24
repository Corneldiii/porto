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
import skl15 from "@/public/Skills/Postman.svg";
import skl16 from "@/public/Skills/Docker.svg";
import skl17 from "@/public/Skills/CI.svg";
import skl18 from "@/public/Skills/Git.svg";
import skl19 from "@/public/Skills/prisma.svg";
import skl20 from "@/public/Skills/supabase.svg";
import skl21 from "@/public/Skills/postgresql.svg";
import skl22 from "@/public/Skills/claude.png";
import skl23 from "@/public/Skills/chatGPT.png";
import skl24 from "@/public/Skills/gemini.png";
import skl25 from "@/public/Skills/deepseek.png";

import sm1 from "@/public/socialMedia/instagram.svg";
import sm2 from "@/public/socialMedia/twitter-x.svg";
import sm3 from "@/public/socialMedia/tiktok.svg";
import sm4 from "@/public/socialMedia/whatsapp.svg";
import sm5 from "@/public/socialMedia/linkedin.svg";

import L1 from "@/public/projects/Lokerin/L1.png";
import L2 from "@/public/projects/Lokerin/L2.png";
import L3 from "@/public/projects/Lokerin/L3.png";
import L4 from "@/public/projects/Lokerin/L4.png";

import B1 from "@/public/projects/SIGBanyumas/B1.png";
import B2 from "@/public/projects/SIGBanyumas/B2.png";
import B3 from "@/public/projects/SIGBanyumas/B3.png";
import B4 from "@/public/projects/SIGBanyumas/B4.png";

import C1 from "@/public/projects/CashierCafe/C1.png";
import C2 from "@/public/projects/CashierCafe/C2.png";
import C3 from "@/public/projects/CashierCafe/C3.png";
import C4 from "@/public/projects/CashierCafe/C4.png";

import G1 from "@/public/projects/Gereja/G1.png";
import G2 from "@/public/projects/Gereja/G2.png";
import G3 from "@/public/projects/Gereja/G3.png";
import G4 from "@/public/projects/Gereja/G4.png";

import M1 from "@/public/projects/MoodLy/M1.png";
import M2 from "@/public/projects/MoodLy/M2.png";
import M3 from "@/public/projects/MoodLy/M3.png";
import M4 from "@/public/projects/MoodLy/M4.png";

import A1 from "@/public/projects/Absensi/A1.png";
import A2 from "@/public/projects/Absensi/A2.png";
import A3 from "@/public/projects/Absensi/A3.png";
import A4 from "@/public/projects/Absensi/A4.png";

import RPG1 from "@/public/projects/RPG/R1.png";
import RPG2 from "@/public/projects/RPG/R2.png";
import RPG3 from "@/public/projects/RPG/R3.png";
import RPG4 from "@/public/projects/RPG/R4.png";

export const skills = [
  skl1, skl2, skl3, skl4, skl5, skl6, skl7, skl8,
  skl9, skl10, skl11, skl12, skl13, skl14, skl15,
  skl16, skl17, skl18, skl19, skl20, skl21, skl22,
  skl23, skl24, skl25,
];

export const socialMedia = [
  { name: "Instagram", handle: "@Corneldiii", url: "https://www.instagram.com/corneldiii/", icon: sm1, color: "bg-orange-500/10" },
  { name: "Twitter / X", handle: "@nyamukBerisik", url: "https://www.x.com/nyamukBerisik", icon: sm2, color: "bg-blue-500/10" },
  { name: "WhatsApp", handle: "+62 856 4083 5130", url: "", icon: sm4, color: "bg-green-500/10" },
  { name: "TikTok", handle: "@tireknodon", url: "https://www.tiktok.com/@notmeiswearrrrr", icon: sm3, color: "bg-purple-500/10" },
  { name: "LinkedIn", handle: "Aldian Octavius", url: "https://www.linkedin.com/in/aldian-soesanto-b7194531a/", icon: sm5, color: "bg-blue-500/10" },
];

export const traits = [
  { num: "01", label: "Problem Solver" },
  { num: "02", label: "Tech-Driven" },
  { num: "03", label: "Consistent Learner" },
  { num: "04", label: "Reliable & Detail-Oriented" },
];

export const infoCards = [
  { title: "University of Sanata Dharma", judul: "Bachelor of Informatics Degree\nGPA 3.73 / 4", icon: "education" },
  { title: "17 October 2003", judul: "22 years old", icon: "birthday" },
  { title: "Work Experience - 2 Years", judul: "", icon: "experience" },
  { title: "7 - Projects Created", judul: "", icon: "projects" },
];

export const experiences = [
  {
    role: "IT Development Staff",
    company: "PT. Malindo Feedmill Tbk",
    location: "Purbalingga",
    period: "Jun 2026 – Sekarang",
    type: "Full-time",
    desc: [
      "Transmigrate existing application to web-based system",
      "Develop and maintain reports using Jasper Reports",
      "Support internal IT development needs",
    ],
    tech: ["PHP", "Laravel", "Jasper Reports", "MySQL", "Git"],
  },
  {
    role: "Teaching Assistant / Informatics Projects",
    company: "Universitas Sanata Dharma",
    location: "Yogyakarta",
    period: "Aug 2024 – Dec 2025",
    type: "Part-time",
    desc: [
      "Supported students in building programming and information system projects. Helped them understand project workflows, apply best coding practices, and provided constructive technical feedback.",
    ],
    tech: ["ERD", "Logical Design", "MVC", "Laravel", "MySQL"],
  },
  {
    role: "Software Engineer / Programmer",
    company: "PT. Percetakan Kanisius",
    location: "Yogyakarta",
    period: "Feb 2025 – Jun 2025",
    type: "Internship",
    desc: [
      "Built a digital system for managing incoming/outgoing letters and memos",
      "Shifted document processing from paper-based to system-based workflows.",
      "Improved internal document distribution and tracking.",
    ],
    tech: ["PHP", "CodeIgniter 3", "Bootstrap", "Git", "MySql"],
  },
  {
    role: "Teaching Assistant / Query Language",
    company: "Universitas Sanata Dharma",
    location: "Yogyakarta",
    period: "Aug 2024 – Dec 2024",
    type: "Part-time",
    desc: [
      "Supported student learning by explaining essential database concepts and helping them build practical skills in SQL querying. Assisted with lab tasks, clarified complex operations, and provided feedback on query structure and logic.",
    ],
    tech: ["MySQL", "Query"],
  },
  {
    role: "Full Stack",
    company: "Freelance",
    location: "Purbalingga",
    period: "Jul 2024 – Jul 2024",
    type: "Freelance",
    desc: [
      "Built a digital system for managing incoming/outgoing letters and memos",
      "Shifted document processing from paper-based to system-based workflows.",
      "Improved internal document distribution and tracking.",
    ],
    tech: ["PHP", "Laravel", "Bootstrap", "Git", "MySql"],
  },
];

export const projects = [
  {
    img: [L1, L2, L3, L4],
    judul: "Sistem Rekomendasi Pekerjaan (Lokerin)",
    desc: "Lokerin is a job-search platform designed to deliver highly relevant and personalized job recommendations for every user. The system analyzes job descriptions together with each user's profile, interests, and career preferences to automatically present the most suitable opportunities. With its smart, recommendation-driven approach, Lokerin helps job seekers discover positions more quickly, accurately, and efficiently. It not only streamlines the search process but also encourages users to explore roles they may not have considered before. Over time, Lokerin aims to become a trusted hub for anyone seeking tailored, effective, and insightful career guidance.",
    teknologi: "React Js (Tailwind) - Flask(Python)",
    produksi: "Jun 2025 - Jan 2026",
    link: "https://github.com/Corneldiii/Lokerin.git",
  },
  {
    img: [B1, B2, B3, B4],
    judul: "Sistem Informasi Geografis (SIG Banyumas)",
    desc: "SIG Banyumas is a platform that provides comprehensive and interactive tourism information, equipped with digital maps, detailed destination descriptions, and an integrated visit-booking feature. Users can explore a wide range of attractions, discover recommended spots, and view optimal routes directly through the map for easier navigation. The platform also allows travelers to make bookings instantly, helping them plan trips more efficiently and stay organized. With its user-friendly design and complete set of features, SIG Banyumas enhances the overall travel experience by making destination discovery simpler, faster, and more intuitive.",
    teknologi: "Laravel",
    produksi: "10,Jul 2024 - 18,Jul 2024",
    link: "https://github.com/Corneldiii/Wisata-Banyumas.git",
  },
  {
    img: [C1, C2, C3, C4],
    judul: "Cashier Café",
    desc: "Cashier Café is a simple yet effective cashier system designed to streamline café transactions, making the ordering and payment process faster, more organized, and highly efficient. It offers essential features such as order recording, automatic total calculation, menu management, and receipt printing, allowing baristas and cashiers to serve customers with ease and accuracy. The system also helps café owners monitor daily sales in a clear and structured way, ensuring better oversight of business performance. With its practical and user-friendly design, Cashier Café supports smoother operations and contributes to a more professional and enjoyable customer experience.",
    teknologi: "React JS (Tailwinds) - Laravel",
    produksi: "Apr 2026 - Mei 2026",
    link: "https://github.com/Corneldiii/Cashier-Cafe-Frontend.git",
  },
  {
    img: [G1, G2, G3, G4],
    judul: "Landing Page Gereja Katolik Purbalingga (Unofficial)",
    desc: "Paroki Santo Agustinus Purbalingga is a landing-page website designed to provide comprehensive information about the church's life and activities. It features the parish profile, a brief history, and information about the priest serving the community, RD. FX. Handy Kristian Adi Putra, Pr., as the parish pastor. The site also offers daily Bible verses and spiritual reflections updated every day to support the faith growth of the congregation. Users can view the Mass schedule both daily and weekly as well as various parish activities such as catechetical programs, social services, and liturgical celebrations. This project aims to become an easily accessible and informative digital center that supports parish services for both the faithful and the wider community.",
    teknologi: "React JS (Tailwinds) - Laravel",
    produksi: "May 2026 - May 2026",
    link: "https://github.com/Corneldiii/Landing-Page-Gereja-Katolik-Purbalingga.git",
  },
  {
    img: [M1, M2, M3, M4],
    judul: "MoodLy",
    desc: "MoodLy is a daily journaling app that automatically analyzes users' emotional states whenever they write by reading text content and capturing behavioral signals like typing speed, deletion frequency, and pause patterns. It visualizes these findings as a three-dimensional mood vector valence, arousal, and dominance to recommend suitable activities, music, and work styles based on the user's mental state. With a burnout predictor that monitors seven-day mood trends and provides proactive warnings, plus features like one-tap quick check-ins and an AI-generated mood playlist, MoodLy built with Next.js, Supabase, and the Gemini API serves as a daily companion that truly understands your feelings.",
    teknologi: "Next.js (Tailwinds) - Supabase",
    produksi: "May 2026 - May 2026",
    link: "https://github.com/Corneldiii/Moodly.git",
  },
  {
    img: [A1, A2, A3, A4],
    judul: "School Digital Attendance",
    desc: "School Digital Attendance System is a modern web application built with Next.js and Prisma ORM, designed to automate, accelerate, and improve the accuracy of student attendance tracking through Barcode and QR Code scanning technology. Adopting a clean, bright, and premium Royal Blue School visual theme, this project seamlessly integrates live asynchronous scanning that automatically manages the camera stream upon detection, a responsive master data management panel for student profiles, and an analytical dashboard providing real-time daily attendance statistics alongside convenient report export features to Excel and PDF formats.",
    teknologi: "Next.js (Tailwinds) - Neon - Prisma",
    produksi: "May 2026 - May 2026",
    link: "https://github.com/Corneldiii/Absensi-App.git",
  },
  {
    img: [RPG1, RPG2, RPG3, RPG4],
    judul: "RPG Game turn-based Medieval Era",
    desc: "This RPG Battle project is a browser-based turn-based game built with TypeScript as the primary language, Phaser.js as the game framework handling sprites, animations, and scenes, and Vite as the bundler and dev server. It applies pure OOP principles — every character is modeled through a class hierarchy where Character serves as the base class, with Hero and Enemy each extending it, and all four elements (Fire, Earth, Water, Wind) having their own subclasses with hardcoded stats and skills. The player controls a party of 4 heroes with different elements to battle enemies in a turn-based combat system, where each hero has unique skills of type damage, ultimate, heal, or buff that consume MP, alongside an elemental weakness system (Fire → Earth → Water → Wind → Fire) that influences damage calculation. The game visuals are rendered over a multi-layered parallax background with per-frame PNG sprites for heroes and spritesheets for monsters, while the UI is designed as a transparent overlay so the background and characters remain fully visible — hero stats panels on the left, enemy panel on the top right, and the skill list appearing dynamically below the active hero card.",
    teknologi: "Typescript - Phaser.js - Vite - OOP - Claude AI - Gemini AI (Image)",
    produksi: "May 2026 - May 2026",
    link: "https://github.com/Corneldiii/RPG-Game.git",
  },
];

export const titleList = [
  "Application Developer",
  "Fullstack Developer",
  "System Analyst",
  "Vibe Coding",
];
