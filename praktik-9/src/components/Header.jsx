import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeToggle = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  return (
    <>
      <header>
        <h1>Toko Kelas C</h1>
        <small>Tema sekarang : {theme}</small>
      </header>
      <div>
        <button onClick={themeToggle}>Ganti Tema</button>
      </div>
    </>
  );
}

export default Header;
