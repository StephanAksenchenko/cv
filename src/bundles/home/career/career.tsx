"use client";

import H2 from "../h2";
import css from "./career.module.scss";
import careerHistory from "@/src/data/career-history";
import CardTimeline from "../card-timeline";
import WithActivationInView from "@/src/animations/activationOnView";
import { ForwardedRef, forwardRef } from "react";
import { useScopedI18n } from "@/src/locales/client";

// TODO
const Career = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const t = useScopedI18n("home.career");

  return (
    <div ref={ref}>
      <H2>{t("title")}</H2>
      <div className={css.grid}>
        {careerHistory.map(
          ({ id, company, end, options, position, start, intro }) => (
            <CardTimeline start={start} end={end} key={id}>
              <div className={css.positionWrapper}>
                {/* @ts-ignore TODO */}
                <span className={css.position}>{t(position)}</span>
              </div>
              <div className={css.titleWrapper}>
                {/* @ts-ignore TODO */}
                <h3 className={css.title}>{t(company)}</h3>
              </div>
              <div className={css.introWrapper}>
                {/* @ts-ignore TODO */}
                <p className={css.intro}>{t(intro)}</p>
              </div>

              <ul className={css.responsibilities}>
                {options.map(({ id, text }) => (
                  // @ts-ignore TODO
                  <li key={id}>{t(text)}</li>
                ))}
              </ul>
            </CardTimeline>
          )
        )}
      </div>
    </div>
  );
});

Career.displayName = "Career";

export default WithActivationInView(Career);
