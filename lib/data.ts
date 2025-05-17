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
    title: "Full Stack Developer Intern, Questera",
    location: "Remote",
    description:
      "Spent 10 months building and improving web apps as a full‑stack developer intern.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Feedback Workflow App",
    description:
      "I worked as a frontend developer on this project. It was my very first project at Quest labs which is Questera now. Users can give public feedback to companies. It was ranked as 4th product of the day on producthunt.",
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
      "When I joined the company, they were using using ClickUp, but later they decided to use their own. It was my first fullstack project, which is still being used in Questera.",
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
      "During Diwali, we had a intra company Hackathon. Our team of 3 developers built a website generator, which later went through much more enhancements and became our compnay's official product. OpenAI's 4.o model is used for creating websites. User would input a single prompt and it can generate and deploy the wesites.",
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
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Mongoose",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Web Sockets",
  "Framer Motion",
  "OpenAI",
  "Claude",
  "Gemini",
] as const;
