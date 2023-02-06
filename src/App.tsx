import "./App.css";
import { About, Banner, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Banner />
      </div>
      <About />
    </div>
  );
}

export default App;
