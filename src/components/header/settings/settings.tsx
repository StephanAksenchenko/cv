"use client";

import WithAppearance from "@/src/animations/appearance";
import Language from "./language";
import css from "./settings.module.scss";
import Theme from "./theme";

function Settings() {
  return (
    <div>
      <ul className={css.settings}>
        <li className={css.option}>
          <Language />
        </li>

        <li className={css.option}>
          <Theme />
        </li>
      </ul>
    </div>
  );
}

export default WithAppearance(Settings);
