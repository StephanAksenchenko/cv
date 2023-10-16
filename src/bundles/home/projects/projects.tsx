"use client";

import WithActivationInView from "@/src/animations/activationOnView";
import H2 from "../h2";
import css from "./projects.module.scss";
import { ForwardedRef, forwardRef } from "react";
import { useScopedI18n } from "@/src/locales/client";

const Projects = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const t = useScopedI18n("home.projects");

  return (
    <div ref={ref}>
      <H2>{t("title")}</H2>
      <div className={css.content}>
        <p className={css.text}>{t("nda")}</p>
      </div>
    </div>
  );
});

Projects.displayName = "Projects";

export default WithActivationInView(Projects);
