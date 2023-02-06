import "./App.css";
import { Banner, LastUpdatedPlaces, Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="gradient-bg">
          <Navbar />
          <Banner />
          <LastUpdatedPlaces />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
