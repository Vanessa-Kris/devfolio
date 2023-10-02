import React from "react";
import Intro from "../Sections/Intro";
import About from "../Sections/About";
import Experience from "../Sections/Experience";
import Portfolio from "../Sections/Portfolio";
import Services from "../Sections/Services";
import Reviews from "../Sections/Reviews";
import Blogs from "../Sections/Blogs";
import Contact from "../Sections/Contact";

export default function Right() {
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Reviews />
      <Blogs />
      <Contact />
    </>
  );
}
