import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Pages/Contacts";
import HoFD from "./Pages/HoFD";
import Dragon from "./Pages/Dragon";
import REAAL from "./Pages/REAAL";
import Stork from "./Pages/Stork";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact us" element={<Contacts />} />
        <Route path="/hofd" element={<HoFD />} />
        <Route path="/dragonsegg" element={<Dragon />} />
        <Route path="/reaal" element={<REAAL />} />
        <Route path="/stork" element={<Stork />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
