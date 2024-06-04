import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const darkModeToggle = function (theme, setTheme) {
  if (theme === "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};
function Header({ theme, setTheme }) {
  const pathname = usePathname();
  return (
    <div className="w-full h-[60px] text-lg font-semibold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex flex-row items-center justify-evenly p-1 fixed top-0 z-30">
      <a href="/">
        <div className="flex flex-row justify-center items-center">
          <Image
            src="/op-db-logo.png"
            alt="op-db logo"
            width={50}
            height={50}
          />
          <p className="text-2xl font-bold">OP-DB</p>
        </div>
      </a>

      <a href="/docs" className={pathname === "/docs" ? "underline" : ""}>
        docs
      </a>
      <a href="/api" className={pathname === "/api" ? "underline" : ""}>
        api
      </a>
      <Link href="https://github.com/shing1Sks/op-db">github</Link>
      <button
        onClick={() => darkModeToggle(theme, setTheme)}
        className="p-2 rounded-md bg-slate-900 dark:bg-slate-200"
      >
        {theme === "light" ? "🌙" : "🌞"}
      </button>
    </div>
  );
}

export default Header;
