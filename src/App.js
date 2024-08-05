import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Pricing from "./Routes/Pricing/Pricing";
import Training from "./Routes/Training/Training";
import Contact from "./Routes/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

function App() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  return (
    <div className="App">
      <AppContext.Provider
        value={{ click, setClick, color, setColor, activeNav, setActiveNav }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
