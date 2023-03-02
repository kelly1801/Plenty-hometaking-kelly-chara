import React from "react";
import { Navbar, Header, MainSection, BoostSection,Footer } from "../components";
import { PageContainer } from "../styles";

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Header />
      <MainSection />
      <BoostSection />
      <Footer/>
    </PageContainer>
  );
};

export default HomePage;
