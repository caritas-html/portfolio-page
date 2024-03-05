"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experiencia");
  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>Experiência</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "white",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.35)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: "#ffffff",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">
                {experience.title}
              </h3>
              <p className="font-normal !mt-0">
                {experience.location}
              </p>
              <p className="font-normal !mt-1 text-gray-700">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}