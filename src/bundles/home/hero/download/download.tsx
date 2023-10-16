"use client";

import WithAppearance from "@/src/animations/appearance";
import css from "./download.module.scss";
import { ReactNode } from "react";
import DownloadIcon from "@/src/components/icons/download";
import { useCurrentLocale } from "@/src/locales/client";

type DownloadProps = {
  children: ReactNode;
};

const cvLink = {
  ru: "/cv/cv-aksenchenko stefan(ru).pdf",
  en: "/cv/cv-aksenchenko stefan(en).pdf",
};

function Download({ children }: DownloadProps) {
  const locale = useCurrentLocale();

  return (
    <a href={cvLink[locale]} className={css.download}>
      {children}
      <DownloadIcon />
    </a>
  );
}

export default WithAppearance(Download);
