import { useState } from "react";
import { ThemeContext } from "./context/themeContext";
import Homepage from "./pages/Homepage";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import NoiseOverlay from "./components/NoiseOverlay/NoiseOverlay";

function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <div className="relative min-h-screen bg-black">
      <ThemeContext.Provider value={{ toggleTheme, theme }}>
        <CustomCursor />
        <NoiseOverlay />
        <Homepage />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
