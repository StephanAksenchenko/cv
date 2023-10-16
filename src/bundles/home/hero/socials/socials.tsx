"use client";

import css from "./socials.module.scss";
import LinkedIn from "@/src/components/icons/linkedIn";
import Telegram from "@/src/components/icons/telegram";
import Github from "@/src/components/icons/github";
import WithAppearance from "@/src/animations/appearance";
import { github, linkedIn, telegram } from "@/src/data/personal-info";

function Socials() {
  return (
    <div className={css.root}>
      <a href={linkedIn} target="_blank" className={css.social}>
        <LinkedIn />
      </a>
      <a href={telegram} target="_blank" className={css.social}>
        <Telegram />
      </a>
      <a href={github} target="_blank" className={css.social}>
        <Github />
      </a>
    </div>
  );
}

export default WithAppearance(Socials);
