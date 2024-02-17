import React from "react";
import Nav from "../Nav/Nav";
import "./HomePage.css";
import Main from "../Main/Main";
import { useState } from "react";

function HomePage() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <Nav isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <Main />
    </div>
  );
}

export default HomePage;
