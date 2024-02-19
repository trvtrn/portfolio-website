"use client";

import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section className="scroll-mt-28 mb-28" id="projects" ref={ref}>
      <SectionHeading heading="my projects" />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
