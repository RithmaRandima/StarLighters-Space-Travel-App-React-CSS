import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Pricing from "./Routes/Pricing/Pricing";
import Training from "./Routes/Training/Training";
import Contact from "./Routes/Contact/Contact";

function App() {
  return (
    <div className="App">
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
