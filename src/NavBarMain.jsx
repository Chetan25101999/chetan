// App.js
import React from "react";
import NavBar from "./NavBar";
import { ThemeProvider } from "./ThemeContext";
import "./App.css"; // optional global styles

const App = () => {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <ThemeProvider>
      <NavBar links={navLinks} />
      <main style={{ paddingTop: "100px" }}>
        <section style={{ height: "150vh", padding: "2rem" }}>
          <h2>Scroll down to test NavBar</h2>
          <p>Content goes here...</p>
        </section>
      </main>
    </ThemeProvider>
  );
};

export default App;
