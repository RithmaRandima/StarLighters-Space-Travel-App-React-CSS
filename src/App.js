import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Pricing from "./Routes/Pricing/Pricing";
import Training from "./Routes/Training/Training";
import SideBar from "./Components/ContactSection/ContactSection";
import Navbar from "./Components/Navbar/Navbar";
import { createContext, useState } from "react";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<SideBar />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
