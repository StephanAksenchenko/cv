"use client";

import WithActivationInView from "@/src/animations/activationOnView";
import H2 from "../h2";
import Skill from "./skill";
import SkillRound from "./skill-round";
import css from "./skills.module.scss";
import { ForwardedRef, forwardRef } from "react";
import { useScopedI18n } from "@/src/locales/client";

const skills = {
  base: [
    {
      title: "html",
      progress: 98,
    },
    {
      title: "css",
      progress: 97,
    },
    {
      title: "javascript",
      progress: 96,
    },
    {
      title: "typescript",
      progress: 93,
    },
    {
      title: "next js",
      progress: 89,
    },
  ],
  professional: [
    {
      title: "debugging",
      progress: 100,
    },
    {
      title: "optimisation",
      progress: 90,
    },
    {
      title: "vs code",
      progress: 100,
    },
    {
      title: "jest",
      progress: 81,
    },
    {
      title: "cypress",
      progress: 74,
    },
    {
      title: "figma",
      progress: 74,
    },
    {
      title: "nest js",
      progress: 68,
    },
    {
      title: "jenkins",
      progress: 63,
    },
  ],
};

const Skills = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const t = useScopedI18n("home.skills");

  return (
    <div ref={ref}>
      <H2>{t("title")}</H2>
      <div className={css.baseSkillWrapper}>
        <div className={css.gridForBase}>
          {skills.base.map(({ title, progress }) => (
            <div className={css.cellForBase} key={title}>
              <SkillRound
                title={title}
                progress={progress}
                numberBackground={"var(--color-section)"}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={css.gridForProfessional}>
        {skills.professional.map(({ title, progress }) => (
          <Skill key={title} title={title} progress={progress} />
        ))}
      </div>
    </div>
  );
});

Skills.displayName = "Skills";

export default WithActivationInView(Skills);
