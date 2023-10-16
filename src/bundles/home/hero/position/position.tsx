"use client";

import WithAppearance from "@/src/animations/appearance";
import css from "./position.module.scss";
import { ReactNode } from "react";

type PositionProps = {
  children: ReactNode;
};

function Position({ children }: PositionProps) {
  return <p className={css.position}>{children}</p>;
}

export default WithAppearance(Position);
