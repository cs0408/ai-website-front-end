import React from "react";
import "./App.css";

import { Brand, CTA, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        {/* Navbar completed */}
        <Navbar />
        {/* Header completed */}
        <Header />
      </div>
      {/* Brand Completed */}
      <Brand />
      {/* Completed */}
      <WhatGPT3 />
      {/* completed */}
      <Features />
      {/* completed */}
      <Possibility />
      {/* completed */}
      <CTA />
      {/* completed */}
      <Blog />
      {/* completed */}
      <Footer />
    </div>
  );
};

export default App;
