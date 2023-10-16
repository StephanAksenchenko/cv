"use client";

import { useScopedI18n } from "@/src/locales/client";
import css from "./footer.module.scss";

export default function Footer() {
  const now = new Date();
  const t = useScopedI18n("layout.footer");

  return (
    <footer className={css.root}>
      <p className={css.createdBy}>
        {t("copyright")} ©&nbsp;{now.getFullYear()}
      </p>
    </footer>
  );
}
