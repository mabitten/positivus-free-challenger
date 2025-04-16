"use client";

import React, { useState } from "react";
import WorkingProcessCard from "../cards/WorkingProcessCard";
import { Accordion, Container, HeaderContainer } from "@/components";

const processesData = [
  {
    label: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    label: "02",
    title: "Research and Strategy Development",
    description:
      "02 - During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    label: "03",
    title: "Implementation",
    description:
      "03 - During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    label: "04",
    title: "Monitoring and Optimization",
    description:
      "04 - During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    label: "05",
    title: "Reporting and Communication",
    description:
      "05 - During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    label: "06",
    title: "Continual Improvement",
    description:
      "06 - During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

const OurWorkingProcessSection = () => {

  const [value, setValue] = useState("");

  const handleAccordionChange = (value: string) => {
    setValue(value);
  };
  return (
    <Container as="section" className="mt-[8.75rem]">
      <HeaderContainer title="Our Working Process ">
          Step-by-Step Guide to Achieving<br className="hidden md:block" /> Your Business Goals
        </HeaderContainer>

      <div className="mt-[5rem]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          onValueChange={handleAccordionChange}
        >
          {processesData.map((process, index) => (
            <WorkingProcessCard {...process} currentValue={value} key={index} />
          ))}
        </Accordion>
      </div>
    </Container>
  );
}

export default OurWorkingProcessSection;