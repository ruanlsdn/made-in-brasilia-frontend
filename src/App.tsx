import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cities, Culture, Entertainment, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"cities"} element={<Cities />} />
        <Route path={"culture"} element={<Culture />} />
        <Route path={"entertainment"} element={<Entertainment />} />
      </Routes>
    </div>
  );
}

export default App;
