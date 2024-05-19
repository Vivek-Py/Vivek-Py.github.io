import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import BaseLayout from "./widgets/base-layout";

import "@radix-ui/themes/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivek Pandey",
  description:
    "Web developer who loves to build apps which'll help millions, if not billions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkTheme = true;
  return (
    <BaseLayout>
      <body
        className={
          inter.className +
          "  bg-[#ffefd5] dark:bg-slate-900 leading-relaxed text-[#112A46] dark:text-[#BCC5D2] antialiased selection:bg-teal-300 selection:text-[#112A46]"
        }
        style={{
          color: "#112A46",
        }}
      >
        <Theme>{children}</Theme>
      </body>
    </BaseLayout>
  );
}
