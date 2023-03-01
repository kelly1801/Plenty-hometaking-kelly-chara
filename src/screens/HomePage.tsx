import React from "react";
import { Navbar, Header, MainSection} from "../components";
import { PageContainer } from "../styles";

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Header />
      <MainSection/>
     
    </PageContainer>
  );
};

export default HomePage;
