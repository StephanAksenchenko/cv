"use client";

import WithAppearance from "@/src/animations/appearance";
import css from "./logo.module.scss";

function Logo() {
  return (
    <a className={css.logo} href="#hero">
      <span className={css.s}>S</span>
    </a>
  );
}

export default WithAppearance(Logo);
