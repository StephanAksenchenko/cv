"use client";

import WithAppearance from "@/src/animations/appearance";
import css from "./download.module.scss";
import { ReactNode } from "react";
import DownloadIcon from "@/src/components/icons/download";

type DownloadProps = {
  children: ReactNode;
};

function Download({ children }: DownloadProps) {
  return (
    <a href="#" className={css.download}>
      {children}
      <DownloadIcon />
    </a>
  );
}

export default WithAppearance(Download);
