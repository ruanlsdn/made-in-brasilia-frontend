import { About, Banner, Footer, Navbar } from "../../components";

const Home = () => {
  return (
    <div className="scale-up-hor-center">
      <div className="gradient-bg">
        <Navbar />
        <Banner />
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default Home;
