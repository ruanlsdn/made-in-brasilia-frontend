import React from "react";
import { About, Banner, Footer, Navbar } from "../../components";

const Home = () => {
  return (
    <>
      <div className="gradient-bg">
        <Navbar />
        <Banner />
      </div>
      <About />
      <Footer />
    </>
  );
};

export default Home;
