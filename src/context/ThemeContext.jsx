import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    
    if (theme === "dark") {
      document.documentElement.style.setProperty("--bg-primary", "#0a192f");
      document.documentElement.style.setProperty("--bg-secondary", "#0d2a3f");
      document.documentElement.style.setProperty("--bg-card", "rgba(255,255,255,0.05)");
      document.documentElement.style.setProperty("--text-primary", "#ffffff");
      document.documentElement.style.setProperty("--text-secondary", "rgba(255,255,255,0.7)");
      document.documentElement.style.setProperty("--accent", "#22d3ee");
      document.documentElement.style.setProperty("--accent-secondary", "#9333ea");
      document.documentElement.style.setProperty("--accent-tertiary", "#22c55e");
      document.documentElement.style.setProperty("--border-color", "rgba(34,211,238,0.2)");
      document.documentElement.style.setProperty("--navbar-bg", "rgba(10,25,47,0.95)");
      document.documentElement.style.setProperty("--gradient-1", "#22d3ee");
      document.documentElement.style.setProperty("--gradient-2", "#9333ea");
      document.documentElement.style.setProperty("--gradient-3", "#22c55e");
      document.documentElement.style.setProperty("--shadow-color", "rgba(34,211,238,0.3)");
      document.documentElement.style.setProperty("--card-hover-bg", "rgba(255,255,255,0.08)");
    } else {
      document.documentElement.style.setProperty("--bg-primary", "#f8fafc");
      document.documentElement.style.setProperty("--bg-secondary", "#f1f5f9");
      document.documentElement.style.setProperty("--bg-card", "#ffffff");
      document.documentElement.style.setProperty("--text-primary", "#0a192f");
      document.documentElement.style.setProperty("--text-secondary", "#334155");
      document.documentElement.style.setProperty("--accent", "#0891b2");
      document.documentElement.style.setProperty("--accent-secondary", "#7e22ce");
      document.documentElement.style.setProperty("--accent-tertiary", "#16a34a");
      document.documentElement.style.setProperty("--border-color", "rgba(8,145,178,0.2)");
      document.documentElement.style.setProperty("--navbar-bg", "rgba(255,255,255,0.95)");
      document.documentElement.style.setProperty("--gradient-1", "#0891b2");
      document.documentElement.style.setProperty("--gradient-2", "#7e22ce");
      document.documentElement.style.setProperty("--gradient-3", "#16a34a");
      document.documentElement.style.setProperty("--shadow-color", "rgba(8,145,178,0.3)");
      document.documentElement.style.setProperty("--card-hover-bg", "rgba(8,145,178,0.05)");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};