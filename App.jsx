import React, { useState } from "react";
import Navbar from "./Componeents/Navbar/Navbar";
import Hero from "./Componeents/Hero/Hero";
import Programs from "./Componeents/Programs/Programs";
import Title from "./Componeents/Title/Title";
import About from "./Componeents/About/About";
import Campus from "./Componeents/Campus/Campus";
import Testimonials from "./Componeents/Testimonials/Testimonials";
import Contact from "./Componeents/Contact/Contact";
import Footer from "./Componeents/Footer/Footer";
import VideoPlayer from "./Componeents/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
