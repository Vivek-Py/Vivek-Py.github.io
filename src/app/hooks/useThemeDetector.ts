"use client";

import { useEffect, useState } from "react";

interface CustomEvent {
  matches: boolean;
}

const useThemeDetector = () => {
  let initialVal = false;
  if (typeof window !== "undefined") {
    initialVal = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  const [isDarkTheme, setIsDarkTheme] = useState(initialVal);
  const mqListener = (e: CustomEvent) => {
    setIsDarkTheme(e.matches);
  };
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkTheme(darkThemeMq.matches);
    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);
  return isDarkTheme;
};

export default useThemeDetector;
