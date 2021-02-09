import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import img2 from "../images/svg2.svg";
import img3 from "../images/svg3.svg";
import img4 from "../images/svg4.svg";

import {
  homeObjOne,
  homeObjTwo,
  homeObjFour,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection pic={img3} {...homeObjOne} />
      <InfoSection pic={img2} {...homeObjTwo} />
      <Services />
      <InfoSection pic={img4} {...homeObjFour} />
      <Footer />
    </>
  );
};

export default Home;
