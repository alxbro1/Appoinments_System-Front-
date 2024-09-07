import "./App.css";
import { LogIn } from "./views/LoggIn";
import { Register } from "./views/Register";
import { Navbar } from "./components/Navbar";
import { Home } from "./views/Home";
import { MisTurnos } from "./views/MisTurnos";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { CreateAppoinment } from "./views/CreateAppoinment";
import { AboutUs } from "./components/Aboutus";
import { ContactUs } from "./components/Contactus";

function App() {
  const user = useSelector((state) => state.user.user);
  let location = useLocation();
  return (
    <>
      {!location.pathname.includes("login") &&
        !location.pathname.includes("register") && <Navbar />}

      <Routes>
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
        path="/aboutus"
        element={<AboutUs/>}
        />

        <Route
        path="/contactus"
        element={<ContactUs/>}/>
        {!user.id ? (
          <>
            <Route
              path="/login"
              element={<LogIn />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
          </>
        ) : (
          <>
            <Route path="/perfile" />
            <Route
              path="/perfile/appoinments"
              element={<MisTurnos />}
            />
            <Route
              path="/perfile/createappoinment"
              element={<CreateAppoinment />}
            />
          </>
        )}

        <Route
          path="*"
          element={<Home/>}
        />
      </Routes>
    </>
  );
}

export default App;
