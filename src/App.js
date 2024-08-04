import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Pricing from "./Routes/Pricing/Pricing";
import Training from "./Routes/Training/Training";
import Contact from "./Routes/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
