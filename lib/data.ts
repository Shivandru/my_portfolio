import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import feedbackWfImg from "@/public/feedbackWf.png";
import hiveImg from "@/public/hive.png";
import gretaImg from "@/public/greta.png";
import mixpanelImg from "@/public/mixpanel_ai_pic.png";

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
    title: "Node.js Backend Developer (SDE-1)",
    location: "TerraByte Technologies Private Limited — Bengaluru, Karnataka",
    description:
      "Scaled Terra from 5 to 2,000+ DAU (150K MAU) by redesigning backend architecture using Node.js, Redis (Pub/Sub), BullMQ, and WebSockets. Cut startup latency by designing a DAG-based initialization workflow parallelizing tasks. Built an AI insights system using LangGraph and multiple LLMs analyzing Mixpanel data, designed ETL pipelines moving 82M+ event records, and integrated Google Play Billing, App Store, Stripe, and Codapay payments.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2025 – Present",
  },
  {
    title: "Full-Stack Web Developer",
    location: "Questera — Remote",
    description:
      "Built end-to-end SaaS products across frontend and backend using MERN, integrating LLMs to automate workflows. Developed and deployed 3+ production-ready features using Agile methodology, implementing RESTful APIs with Jest for unit testing to maintain 95%+ code coverage.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 – April 2025",
  },
  {
    title: "Full-Stack Software Engineering",
    location: "Masai School — Bengaluru, Karnataka",
    description:
      "Completed rigorous career accelerator program in full-stack software development: built end-to-end applications with React, Next.js, Node.js, Express, MongoDB, and TypeScript. Earned two scholarships and qualified for placement drives.",
    icon: React.createElement(FaReact),
    date: "2023 – 2024",
  },
  {
    title: "B.Tech in Mechanical Engineering",
    location: "Sikkim Manipal Institute of Technology — Majitar, Sikkim",
    description:
      "Completed Bachelor of Technology degree before transitioning into software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Feedback Workflow App",
    description:
      "Built user-facing feedback collection platform for companies. Integrated LLMs for automated workflow analysis. Ranked #4 Product of the Day on Product Hunt.",
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
      "Developed an end-to-end internal team management platform at Questera with role-based access, actively used by team members for operational workflows.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Jotai",
      "Tailwind",
      "Mongoose",
    ],
    imageUrl: hiveImg,
    link: "https://hive.plgos.com/",
  },
  {
    title: "Greta - AI Website Generator",
    description:
      "AI-powered website generator built with MERN and OpenAI (GPT-4o). Generates, previews, and deploys responsive websites from natural language prompts.",
    tags: ["React", "OpenAI", "Node.js", "Express", "Tailwind", "MERN"],
    imageUrl: gretaImg,
    link: "https://greta.questera.ai/",
  },
  {
    title: "Mixpanel_AI — AI Product Analytics",
    description:
      "AI-powered product analytics system that uses LangGraph and Gemini to analyze Mixpanel data and generate actionable insights on user retention, funnels, and behavior.",
    tags: [
      "React",
      "Gemini",
      "LangGraph",
      "FastAPI",
      "Tailwind",
      "Google Cloud Platform",
    ],
    imageUrl: mixpanelImg,
    link: "https://terra-analytics-ui-v5.vercel.app/",
  },
] as const;

export const skillsCategories = [
  {
    category: "Backend & Distributed Systems",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "Python",
      "MongoDB",
      "Redis (Pub/Sub)",
      "BullMQ",
      "WebSockets",
      "Firestore",
      "REST APIs",
      "Mongoose",
    ],
  },
  {
    category: "Frontend & Mobile",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Flutter",
      "Dart",
      "Tailwind CSS",
      "Redux",
      "Shadcn",
      "ChakraUI",
      "HTML5 / CSS3",
    ],
  },
  {
    category: "Cloud, AI & Data",
    skills: [
      "Google Cloud Platform",
      "LangGraph",
      "OpenAI",
      "Gemini",
      "Anthropic Claude",
      "BigQuery",
      "Cloud Storage",
      "ETL Pipelines",
      "Seedance",
    ],
  },
  {
    category: "DevOps, Testing & Tools",
    skills: [
      "Docker",
      "Jest (Unit Testing)",
      "Git & GitHub",
      "Sentry",
      "Mixpanel",
      "Firebase",
      "Claude Code",
      "Codex",
      "Agile / Scrum",
    ],
  },
] as const;

export const skillsData = [
  "Node.js",
  "Express",
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "FastAPI",
  "MongoDB",
  "Redis",
  "BullMQ",
  "WebSockets",
  "Firestore",
  "Google Cloud Platform",
  "BigQuery",
  "Cloud Storage",
  "Docker",
  "Jest",
  "LangGraph",
  "OpenAI",
  "Gemini",
  "Flutter",
  "Dart",
  "Tailwind",
  "Redux",
  "Shadcn",
  "ChakraUI",
  "Git",
  "Sentry",
  "Mixpanel",
  "Firebase",
  "Claude Code",
  "Codex",
] as const;
