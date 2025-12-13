import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import feedbackWfImg from "@/public/feedbackWf.png";
import hiveImg from "@/public/hive.png";
import gretaImg from "@/public/greta.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mechanical Engineering",
    location: "Sikkim Manipal Institue of Technology",
    description:
      "Finished my mechanical‑engineering degree and spent some time preparing for PCS government exams.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Operations specialist",
    location: "Remote",
    description:
      "Worked online for two years handling day‑to‑day operations and team support.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Career Accelator Program by MASAI SCHOOL",
    location: "remote",
    description:
      "Jump‑started my software journey: learned React, Next.js, Node.js, Express, MongoDB and TypeScript. Earned two scholarships and qualified for Masai placement drives.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Full Stack Developer Intern, Questera - SaaS",
    location: "Remote",
    description:
      "Spent 10 months building and improving web apps as a full‑stack developer intern.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
  {
    title: "Node.js Backend Developer, TerraByte Solutions - Game",
    location: "Bengaluru, Karnataka",
    description:
      "Working in a team on production-scale gaming and AI platforms, including mid-core games, AI-driven gaming apps, and a micro-drama product. Contribute to backend systems using Node.js, Redis, and WebSockets, build internal tools used by game developers and designers, develop AI-powered performance insights using Gemini, and implement data pipelines to move large-scale analytics data from Mixpanel to Google Cloud Storage and BigQuery.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2025 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "Feedback Workflow App",
    description:
      "Worked as a Frontend Developer on this project, my first at Questera. Built user-facing features for collecting public feedback for companies. The product was ranked #4 Product of the Day on Product Hunt.",
    tags: [
      "React",
      "Tailwind",
      "Jotai",
      "Sentry",
      "@questlabs/react-sdk",
      "Framer-Motion",
    ],
    imageUrl: feedbackWfImg,
    link: "https://www.producthunt.com/products/plgos#feedback-flows",
  },
  {
    title: "Hive - Internal Team Management Tool",
    description:
      "Developed an internal team management platform. This was my first end-to-end full-stack project at Questera and is actively used by the team for day-to-day operations.",
    tags: [
      "React",
      "Node.js",
      "Jotai",
      "Express",
      "MongoDB",
      "@questlabs/react-sdk",
      "Framer-Motion",
      "Tailwind",
      "Mongoose",
    ],
    imageUrl: hiveImg,
    link: "https://hive.plgos.com/",
  },
  {
    title: "Greta - AI Website Generator",
    description:
      "Used OpenAI's 4.o model is used for creating websites. User would input a single prompt and it can generate and deploy the wesites.",
    tags: ["React", "OpenAI", "Node", "Express", "Tailwind", "Framer-Motion"],
    imageUrl: gretaImg,
    link: "https://greta.questera.ai/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "Git",
  "Tailwind",
  "Mongoose",
  "Zod",
  "MongoDB",
  "Redis",
  "Firestore",
  "Google-Cloud-Platform",
  "Redux",
  "Express",
  "Python",
  "Web Sockets",
  "Framer Motion",
  "OpenAI",
  "Claude",
  "Gemini",
  "langgraph",
] as const;
