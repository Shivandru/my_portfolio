"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsCategories } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="flex flex-col gap-8 text-center">
        {skillsCategories.map((group, groupIndex) => (
          <div key={group.category} className="flex flex-col items-center">
            <h3 className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 dark:text-white/60 mb-3 font-semibold">
              {group.category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 text-base sm:text-lg text-gray-800 dark:text-white/80">
              {group.skills.map((skill, index) => (
                <motion.li
                  className="bg-white borderBlack rounded-xl px-4 py-2 sm:px-5 sm:py-2.5 dark:bg-white/10 dark:text-white/80 shadow-sm"
                  key={skill}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={groupIndex * 6 + index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
