import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Cosmetics from "./pages/Cosmetics";
import Rbnb from "./pages/Rbnb";
import Spa from "./pages/Spa";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark class to html globally
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/rbnb" element={<Rbnb />} />
        <Route path="/spa" element={<Spa />} />
      </Routes>
    </>
  );
}

export default App;
