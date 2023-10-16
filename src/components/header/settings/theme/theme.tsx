"use client";

import Moon from "@/src/components/icons/moon";
import Sun from "@/src/components/icons/sun";
import css from "./theme.module.scss";
import { ReactNode, useEffect, useState } from "react";

type Theme = "theme-light" | "theme-dark";

const icons: Record<Theme, ReactNode> = {
  "theme-light": <Sun />,
  "theme-dark": <Moon />,
};

export default function Theme() {
  const [theme, setTheme] = useState<Theme>("theme-dark");

  const onClick = () =>
    setTheme((cur) => (cur === "theme-dark" ? "theme-light" : "theme-dark"));

  useEffect(() => {
    if (theme === "theme-light") {
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark");
    } else {
      document.body.classList.add("theme-dark");
      document.body.classList.remove("theme-light");
    }
  }, [theme]);

  return (
    <span className={css.root} onClick={onClick}>
      {icons[theme]}
    </span>
  );
}
