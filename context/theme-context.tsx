"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
interface themecontextprops {
  theme: Theme;
  toggletheme: () => void;
}
const ThemeContext = createContext<themecontextprops | null>(null);

interface themecontextproviderprops {
  children: React.ReactNode;
}
export default function ThemeContextProvider({
  children,
}: themecontextproviderprops) {
  const [theme, settheme] = useState<Theme>("light");

  const toggletheme = () => {
    if (theme === "light") {
      settheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.add("dark");
    } else {
      settheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    const storetheme = window.localStorage.getItem("theme") as Theme | null;
    if (storetheme) {
      settheme(storetheme);
      if (storetheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggletheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("Null")
  }
  return context
}
