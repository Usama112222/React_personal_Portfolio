import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Home />
        <About />
        <Work />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;