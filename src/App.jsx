import "./App.css";
import MatchDetails from "./components/MatchDetails";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match/:id" element={<MatchDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
