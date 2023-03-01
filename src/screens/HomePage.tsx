import React from "react";
import { Navbar, Header, MainSection, BoostSection } from "../components";
import { PageContainer } from "../styles";

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Header />
      <MainSection />
      <BoostSection />
    </PageContainer>
  );
};

export default HomePage;
