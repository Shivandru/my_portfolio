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
        <span className="font-medium">Mechanical Engineering</span>, I
        discovered a strong interest in technology and started learning to code.
        Over time, I became a{" "}
        <span className="font-medium">MERN stack developer</span> and also began
        working with <span className="font-medium">AI agents</span> using models
        like OpenAI, Claude, and Gemini. I enjoy solving real-world problems
        through code and building useful web applications. My core stack
        includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        , and I'm also comfortable with{" "}
        <span className="font-medium">TypeScript</span>. I'm always eager to
        learn and grow as a developer, and currently looking for a{" "}
        <span className="font-medium">full-time software development role</span>
        .
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, you’ll usually find
        me at the gym, cooking something new, or playing video games. I also
        enjoy exploring new ideas and keeping up with the latest in tech and AI.
      </p>
    </motion.section>
  );
}
