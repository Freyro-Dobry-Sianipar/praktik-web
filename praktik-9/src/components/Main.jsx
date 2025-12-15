import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Main() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <>
          <main>
            <div>
              <h5>Main Components</h5>
              <p>Isi main component</p>
              <small>Tema sekarang : {theme}</small>
            </div>
          </main>
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default Main;
