"use client";

import useThemeDetector from "@/app/hooks/useThemeDetector";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isDarkTheme = useThemeDetector();
  return (
    <html
      lang="en"
      className={`scroll-smooth ${isDarkTheme ? "dark" : "light"}`}
    >
      {children}
    </html>
  );
};

export default Layout;
