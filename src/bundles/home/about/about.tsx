"use client";

import ListIcon from "@/src/components/icons/list";
import Card from "../card";
import H2 from "../h2";
import Text from "../text";
import css from "./about.module.scss";
import Location from "@/src/components/icons/location";
import PhoneIcon from "@/src/components/icons/phone";
import EmailIcon from "@/src/components/icons/email";
import Gender from "@/src/components/icons/gender";
import Clock from "@/src/components/icons/clock";
import WithActivationInView from "@/src/animations/activationOnView";
import { ForwardedRef, forwardRef } from "react";
import { useScopedI18n } from "@/src/locales/client";
import Phone from "./phone";
import Email from "./email";

const About = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const t = useScopedI18n("home.about");

  return (
    <div className={css.root} ref={ref}>
      <H2>{t("title")}</H2>
      <Card>
        <div className={css.headWrapper}>
          <div className={css.head}>
            <ListIcon />
          </div>
        </div>
        <div className={css.grid}>
          <div className={css.textWrapper}>
            <div className={css.helloWrapper}>
              <h3 className={css.hello}>{t("welcome")}</h3>
            </div>
            <Text>{t("info")}</Text>
          </div>
          <div className={css.divider} />
          <div className={css.detailsWrapper}>
            <ul className={css.details}>
              <li>
                <span className={css.icon}>
                  <Gender />
                </span>{" "}
                <span className={css.capitalize}>{t("male")}</span>
              </li>
              <li>
                <span className={css.icon}>
                  <Clock />
                </span>
                {t("age")}
              </li>
              <li>
                <span className={css.icon}>
                  <EmailIcon />
                </span>{" "}
                <Email />
              </li>
              <li>
                <span className={css.icon}>
                  <Location />
                </span>
                {t("location")}
              </li>
              <li>
                <span className={css.icon}>
                  <PhoneIcon />
                </span>{" "}
                <Phone />
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
});

About.displayName = "About";

export default WithActivationInView(About);
