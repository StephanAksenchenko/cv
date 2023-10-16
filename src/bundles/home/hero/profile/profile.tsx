"use client";

import WithAppearance from "@/src/animations/appearance";
import css from "./profile.module.scss";

// TODO
function Profile() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/images/home/profile.png" alt="profile" className={css.root} />
  );
}

export default WithAppearance(Profile);
