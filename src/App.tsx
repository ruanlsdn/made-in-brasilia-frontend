import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ProtectedLayout } from "./components";
import { Cities, Home, Login, Places, Register, SinglePlace } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path={"cities"}
          element={
            <ProtectedLayout>
              <Cities />
            </ProtectedLayout>
          }
        />
        <Route
          path={"places/:cityId"}
          element={
            <ProtectedLayout>
              <Places />
            </ProtectedLayout>
          }
        />
        <Route
          path={"single-place/:placeId"}
          element={
            <ProtectedLayout>
              <SinglePlace />
            </ProtectedLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
