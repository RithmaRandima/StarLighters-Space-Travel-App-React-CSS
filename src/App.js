import { Route, Routes } from "react-router-dom";
import SideBar from "./Components/ContactSection/ContactSection";
import Navbar from "./Components/Navbar/Navbar";
import { createContext, useState } from "react";
import { lazy } from "react";
import { Suspense } from "react";

const Home = lazy(() => import("./Routes/Home/Home"));
const Pricing = lazy(() => import("./Routes/Pricing/Pricing"));
const Training = lazy(() => import("./Routes/Training/Training"));

export const AppContext = createContext(null);

function App() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          click,
          setClick,
          color,
          setColor,
          activeNav,
          setActiveNav,
          contactOpen,
          setContactOpen,
        }}
      >
        <Navbar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/training" element={<Training />} />
            <Route path="/contact" element={<SideBar />} />
          </Routes>
        </Suspense>
      </AppContext.Provider>
    </div>
  );
}

export default App;
