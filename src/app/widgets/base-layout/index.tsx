"use client";

import useThemeDetector from "@/app/hooks/useThemeDetector";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useThemeDetector();
  return (
    <html lang="en" className={`scroll-smooth ${theme}`}>
      {children}
    </html>
  );
};

export default Layout;
