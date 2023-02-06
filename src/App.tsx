import "./App.css";
import { About, Banner, Footer, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Banner />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
