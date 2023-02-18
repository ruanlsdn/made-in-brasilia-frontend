import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, ProtectedLayout } from "./components";
import {
  Chats,
  Cities,
  Error,
  Home,
  Login,
  Places,
  Register,
  SinglePlace,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"*"} element={<Error />} />
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
        <Route
          path={"chats"}
          element={
            <ProtectedLayout>
              <Chats />
            </ProtectedLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
