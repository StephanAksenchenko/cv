import { ReactNode } from "react";
import css from "./section.module.scss";

type SectionProps = {
  id?: string;
  children: ReactNode;
};

export default function Section({ children, id }: SectionProps) {
  return (
    <section className={css.root} id={id}>
      {children}
    </section>
  );
}
