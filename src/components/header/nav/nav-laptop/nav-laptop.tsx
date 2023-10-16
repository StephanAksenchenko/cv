"use client";

import { useScopedI18n } from "@/src/locales/client";
import WithAnimation from "./nav-laptop.animation";
import css from "./nav-laptop.module.scss";

const links = [
  {
    title: "about",
    href: "#about",
  },
  {
    title: "skills",
    href: "#skills",
  },
  {
    title: "career",
    href: "#career",
  },
  {
    title: "education",
    href: "#education",
  },
  {
    title: "projects",
    href: "#projects",
  },
];

// TODO
function NavLaptop() {
  const t = useScopedI18n("layout.nav");

  return (
    <div className={css.root}>
      <ul className={css.links}>
        {links.map(({ title, href }) => (
          <li key={title}>
            <a href={href} className={css.link}>
              {/* @ts-ignore TODO */}
              {t(title)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WithAnimation(NavLaptop);
