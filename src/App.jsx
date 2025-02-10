import { useState, useEffect } from "react";
import { ThemeContext } from "./context/themeContext";
import Homepage from "./pages/Homepage";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import NoiseOverlay from "./components/NoiseOverlay/NoiseOverlay";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  const handleLoadingComplete = () => {
    setLoading(false);
    // Enable scrolling after loading
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    // Disable scrolling during loading
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      <ThemeContext.Provider value={{ toggleTheme, theme }}>
        <CustomCursor />
        <NoiseOverlay />
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
        <div
          className={`transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Homepage />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
