import React, { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    transition: "all 0.3s ease",
    padding: 15,
  };

  const fontColor = {
    color: theme === "light" ? "#000" : "#fff",
    transition: "all 0.3s ease",
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme, fontColor }}>
        <div style={style}>
          <Header />
          <Main />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
