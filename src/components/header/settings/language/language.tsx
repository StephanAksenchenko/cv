"use client";

import css from "./language.module.scss";
import { useChangeLocale, useCurrentLocale } from "@/src/locales/client";

export default function Language() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale({ preserveSearchParams: true });

  return (
    <span
      className={css.root}
      onClick={() => changeLocale(locale === "en" ? "ru" : "en")}
    >
      {locale === "ru" ? "ру" : "en"}
    </span>
  );
}
