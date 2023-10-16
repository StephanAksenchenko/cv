"use client";

import WithAppearance from "@/src/animations/appearance";
import WithLevitation from "@/src/animations/levitation";
import css from "./down.module.scss";
import DownIcon from "@/src/components/icons/down";

function Down() {
  return (
    <div className={css.down}>
      <a href="#about">
        <DownIcon />
      </a>
    </div>
  );
}

export default WithLevitation(WithAppearance(Down));
