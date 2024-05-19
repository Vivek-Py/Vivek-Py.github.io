"use client";

import { useEffect, useState } from "react";

interface CustomEvent {
  matches: boolean;
}

const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const mqListener = (e: CustomEvent) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mqListener);

    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);
  return isDarkTheme;
};

export default useThemeDetector;
