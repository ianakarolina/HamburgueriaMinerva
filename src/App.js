import { Page } from "./styles"
import "./App.css"
import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <Page>
      <Header/>
      <Main/>
      <Footer/>
    </Page>
  );

  
}

export default App;
