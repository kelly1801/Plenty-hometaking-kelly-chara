import React from "react"
import {PageContainer} from "./styles/containers";
import {Navbar} from "./components/Navbar";
import {Header} from "./components/Header";

const App = () => {
  return (
    <PageContainer maxWidth="sm">
        <Navbar/>
<Header/>

    </PageContainer>
  )
}

export default App
