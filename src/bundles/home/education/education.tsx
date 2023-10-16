"use client";

import University from "@/src/components/icons/university";
import H2 from "../h2";
import css from "./education.module.scss";
import CardTimeline from "../card-timeline";
import educationHistory from "@/src/data/education-history";
import WithActivationInView from "@/src/animations/activationOnView";
import { ForwardedRef, forwardRef } from "react";
import { useScopedI18n } from "@/src/locales/client";

//TODO
const Education = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const t = useScopedI18n("home.education");

  return (
    <div ref={ref}>
      <H2>{t("title")}</H2>
      <div className={css.educationHistory}>
        {educationHistory.map(
          ({ start, end, id, university, degree, department }) => (
            <CardTimeline start={start} end={end} key={id}>
              <div className={css.iconWrapper}>
                <div className={css.icon}>
                  <University />
                </div>
              </div>
              <div className={css.titleWrapper}>
                {/* @ts-ignore TODO */}
                <h3 className={css.title}>{t(university)}</h3>
              </div>
              <div className={css.detailsWrapper}>
                <p className={css.text}>
                  {/* @ts-ignore TODO */}
                  {t("degree")}: <span className={css.accent}>{t(degree)}</span>
                </p>
                <p className={css.text}>
                  {t("department")}: {/* @ts-ignore TODO */}
                  <span className={css.accent}>{t(department)}</span>
                </p>
              </div>
            </CardTimeline>
          )
        )}
      </div>
    </div>
  );
});

Education.displayName = "Education";

export default WithActivationInView(Education);
