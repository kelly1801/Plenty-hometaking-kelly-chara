import React from "react";
import {
  SectionContainer,
  TextContainer,
  Line,
  StatsContainer,
} from "../styles";
import StatsItem from "./StatsItem";
const StatisticsSection = () => {
  interface Stat {
    icon: string;
    title: string;
    description: string;
  }
  const stats: Stat[] = [
    {
      icon: "brand-recognition",
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content",
    },
    {
      icon: "detailed-records",
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      icon: "fully-customizable",
      title: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];
  return (
    <SectionContainer>
      <TextContainer>
        <h3>Advanced Statistics</h3>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </TextContainer>

      <StatsContainer>
        {stats.map((stat, index) => (
          <StatsItem key={index} {...stat} />
        ))}
      </StatsContainer>

      <Line />
    </SectionContainer>
  );
};

export default StatisticsSection;
