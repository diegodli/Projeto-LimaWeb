import React from 'react';
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Service from "./components/Service"
import About from "./components/About"
import Results from "./components/Results"
import Verticais from "./components/Verticais"


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Verticais/>
    <About/>
    <Results/>
    
    
    </>
  );
}

export default App;
