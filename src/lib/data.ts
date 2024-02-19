import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Bachelor of Computer Science",
    location: "UNSW",
    description: "In my final term of my computer science degree at UNSW.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-present",
  },
  {
    title: "Honours Reserach",
    location: "USYD | Westmead Institute of Medical Research (WIMR)",
    description:
      "Conducted Research at WIMR alongside leading reserach scientists. My research was focused on alternative treatment for bone infection. Graduated with First Class Honours.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Bachelor of Medical Science",
    location: "UNSW",
    description:
      "Graduated with a distinction in Medical Science, majoring in human pathology.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Moogi.",
    description:
      "A SaaS that allows users chat to an uploaded PDF using a chatbot. There are different levels of subscription plans that unlockes different functionalitites.",
    tags: ["React", "TypeScript", "Next.js", "Prisma", "Tailwind", "Stripe"],
    imageUrl: "/moogi.png",
    siteUrl: "https://moogi.vercel.app/",
  },
  {
    title: "Gym Landing Page",
    description:
      "A simple static gym landing page made with react and framer motion for a fluid and beautiful user experience.",
    tags: ["React", "Tailwind", "Framer Motion"],
    imageUrl: "/gymLanding.png",
    siteUrl: "https://evo-gym-landing.vercel.app/",
  },
  {
    title: "Ashurio.",
    description:
      "A digital marketplace where users can buy and sell digital assets like wallpapers, UI icon kits and theme packs.",
    tags: ["React", "Next.js", "TypeScript", "MongoDB", "Tailwind", "Stripe"],
    imageUrl: "/ashurio.png",
    siteUrl: "https://ashurio-production.up.railway.app",
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
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
