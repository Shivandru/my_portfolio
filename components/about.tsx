"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Mechanical Engineering</span>, I transitioned
        into software engineering through a rigorous full-stack curriculum. Today, I work as an{" "}
        <span className="font-medium">SDE-1 / Full-Stack MERN Developer</span>,
        building high-throughput architectures and AI-driven platforms.
      </p>

      <p className="mb-3">
        My core stack covers{" "}
        <span className="font-medium">
          Node.js, Express, React, Next.js, TypeScript, and MongoDB / Firestore
        </span>
        . On the backend, I specialize in high-concurrency, real-time distributed systems with{" "}
        <span className="font-medium">
          Redis (Pub/Sub), WebSockets, BullMQ, and FastAPI
        </span>
        — scaling products to 2,000+ DAU (150K MAU), designing DAG-based startup workflows, and implementing ETL pipelines moving 82M+ event records.
      </p>

      <p>
        I also build production AI agents using{" "}
        <span className="font-medium">LangGraph, OpenAI, and Gemini</span>, and adhere to strict engineering hygiene with{" "}
        <span className="font-medium">Jest (95%+ unit test coverage)</span>. Outside of code, you’ll find me at the gym, cooking, or exploring the latest developments in AI and cloud systems.
      </p>
    </motion.section>
  );
}
