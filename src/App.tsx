import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cities, Home, Places, SinglePlace } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"cities"} element={<Cities />} />
        <Route path={"places/:cityId"} element={<Places />} />
        <Route path={"single-place/:placeId"} element={<SinglePlace />} />
      </Routes>
    </div>
  );
}

export default App;
