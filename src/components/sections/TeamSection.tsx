import React from "react";

import { TeamCard, Button, HeaderContainer, Container } from "@/components";

const teamsData = [
  {
    name: "John Smith",
    position: "CEO and Founder",
    experience:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: "/images/t-1.png",
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    experience:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    image: "/images/t-2.png",
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    experience:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    image: "/images/t-3.png",
  },
  {
    name: "Emily Johnson",
    position: "PPC Manager",
    experience:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: "/images/t-4.png",
  },
  {
    name: "Brian Williams",
    position: "Social Media Specialist",
    experience:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    image: "/images/t-5.png",
  },
  {
    name: "Sarah Kim",
    position: "Content Creator",
    experience:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    image: "/images/t-6.png",
  },
];

function TeamSection() {
  return (
    <Container as="section" className="mt-8 md:mt-[8.75rem]">
      <HeaderContainer title="Our Team">
        Meet the skilled and experienced team behind our successful digital<br className="hidden md:block" />
        marketing strategies
      </HeaderContainer>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10 mt-5 md:mt-20">
        {teamsData.map((team, index) => (
          <TeamCard {...team} key={index} />
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <Button className="w-full lg:w-[16.8125rem] lg:h-[4.25rem] mt-10 lg:px-9" size="lg">See all team</Button>
      </div>
    </Container>
  );
}

export default TeamSection;