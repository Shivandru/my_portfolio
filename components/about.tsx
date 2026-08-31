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
        <span className="font-medium">Mechanical Engineering</span>, I developed
        a strong interest in technology and began learning to code. Over time, I
        grew into a{" "}
        <span className="font-medium">Full-Stack MERN Developer</span> and
        started working with{" "}
        <span className="font-medium">AI-driven systems</span> using platforms
        and models like OpenAI, Gemini, Seedance, and Claude. I enjoy solving
        real-world problems through code and building scalable, user-focused
        applications.
      </p>

      <p className="mb-3">
        My core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB, and TypeScript
        </span>
        , and I currently focus more on backend development, building real-time
        and data-driven systems using{" "}
        <span className="font-medium">
          Redis, WebSockets, BullMQ, and cloud services
        </span>
        . I also enjoy optimizing application performance and designing
        efficient system architectures.
      </p>

      <p>
        <span className="italic">When I’m not coding</span>, you’ll usually find
        me at the gym, cooking something new, or playing video games. I also
        enjoy exploring new ideas and staying up to date with developments in
        tech and AI.
      </p>
    </motion.section>
  );
}
