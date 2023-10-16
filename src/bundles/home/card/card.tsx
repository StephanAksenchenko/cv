import { ReactNode } from "react";
import css from "./card.module.scss";
import cn from "classnames";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return <div className={cn(css.root, className)}>{children}</div>;
}
