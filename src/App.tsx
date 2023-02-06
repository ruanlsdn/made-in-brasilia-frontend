import "./App.css";
import { Banner, LastUpdatedPlaces, Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}

export default App;
