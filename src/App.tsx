import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cities, Home, Login, Places, Register, SinglePlace } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path={"cities"} element={<Cities />} />
        <Route path={"places"} element={<Places />} />
        <Route path={"single-place"} element={<SinglePlace />} />
      </Routes>
    </div>
  );
}

export default App;
