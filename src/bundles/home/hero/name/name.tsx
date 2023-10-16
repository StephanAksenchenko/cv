"use client";

import WithAppearance from "@/src/animations/appearance";
import { ReactNode } from "react";
import css from "./name.module.scss";

type NameProps = {
  children: ReactNode;
};

function Name({ children }: NameProps) {
  return <h1 className={css.root}>{children}</h1>;
}

export default WithAppearance(Name);
