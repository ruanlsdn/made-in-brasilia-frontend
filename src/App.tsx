import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cities, Home, Places } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"cities"} element={<Cities />} />
        <Route path={"places"} element={<Places />} />
      </Routes>
    </div>
  );
}

export default App;
