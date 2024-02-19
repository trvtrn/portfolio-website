"use client";

import { useActiveSectionContext, useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: "0.2",
            }}
          >
            <Image
              src="/profile.jpeg"
              alt="profile picture"
              width={192}
              height={192}
              quality="100"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            ></Image>
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I&apos;m Travolta</span>
        <br /> a Junior <span className="font-bold">
          Software Engineer.
        </span>{" "}
        <br />I enjoy building <span className="italic">websites & apps</span>{" "}
        <br />
        in <span className="underline">React and Next.js</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-gray-900 text-white px-7 py-3
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-7 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="flex items-center gap-2 rounded-full bg-white px-7 py-3 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition group cursor-pointer
          border border-black/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/travoltatran/"
          target="_blank"
          className="flex items-center gap-2 text-gray-700 rounded-full bg-white p-4 border border-black/10 focus:scale-110 hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:text-gray-950"
        >
          <BsLinkedin className="h-4.5 w-4.5" />
        </a>

        <a
          href="https://github.com/trvtrn"
          target="_blank"
          className="flex items-center gap-2 text-gray-700 rounded-full bg-white p-4 border border-black/10 focus:scale-110 hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:text-gray-950"
        >
          <FaGithubSquare className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
