import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <footer>
        <div>&copy; 2025 Kelas C</div>
        <small>Tema Sekarang : {theme}</small>
      </footer>
    </>
  );
}

export default Footer;
