"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Header from "@/components/Header.jsx";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <Head>
        <title>OP-DB</title>
      </Head>
      <html lang="en">
        <link rel="icon" href="/op-db-logo.png" sizes="any" />
        <body className={`${inter.className} ${theme}`}>
          <Header theme={theme} setTheme={setTheme} />
          {children}
        </body>
      </html>
    </>
  );
}
