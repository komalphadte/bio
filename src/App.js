import React from "react";

import "./App.css"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function App() {
  return(
   <div className="App">
     <Home/>
     <About/>
     <Skills />
     <Contact/>
     <Footer/>
    </div>
  );
}


