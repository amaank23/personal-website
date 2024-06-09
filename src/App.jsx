import { useState } from "react";
import { ThemeContext } from "./context/themeContext";
import Homepage from "./pages/Homepage";

function App() {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }
  return (
    <>
      <ThemeContext.Provider value={{ toggleTheme, theme }}>
        <Homepage />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
