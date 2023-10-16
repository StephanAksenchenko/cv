import { ReactNode } from "react";
import css from "./text.module.scss";

type TextProps = {
  children: ReactNode;
};

export default function Text({ children }: TextProps) {
  return <p className={css.root}>{children}</p>;
}
