"use client";

import { useEffect, useState } from "react";

interface CustomEvent {
  matches: boolean;
}

const useThemeDetector = (): String => {
  const [isDarkTheme, setIsDarkTheme] = useState("dark");
  const mqListener = (e: CustomEvent) => {
    setIsDarkTheme(e.matches ? "dark" : "light");
  };
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    mqListener(darkThemeMq);
    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);
  return isDarkTheme;
};

export default useThemeDetector;
