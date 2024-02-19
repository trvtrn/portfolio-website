"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

function AboutMe() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className="scroll-mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      id="about"
    >
      <SectionHeading heading="about me" />
      <p className="mb-6">
        After graduating with a degree in{" "}
        <span className="font-medium">Science</span>, I made a leap of faith and
        decided to instead pursue my passion for programming and enrolled in a
        computer science degree at UNSW.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. Throughout my degree I
        have programmed in{" "}
        <span className="font-medium">Python, Rust, C and Java</span>. I am
        always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a junior
        software developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        building gunpla (mecha-robot model kits), making small handmade leather
        goods as well as watching footy on the weekends with friends and family.
      </p>
    </motion.section>
  );
}

export default AboutMe;
