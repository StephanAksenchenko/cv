import { ReactNode } from "react";
import css from "./grid.module.scss";

type GridProps = {
  profile: ReactNode;
  socials: ReactNode;
  position: ReactNode;
  h1: ReactNode;
  download: ReactNode;
  down: ReactNode;
};

export default function Grid({
  download,
  h1,
  position,
  profile,
  socials,
  down,
}: GridProps) {
  return (
    <div className={css.root}>
      <div className={css.profile}>{profile}</div>
      <div className={css.socials}>{socials}</div>
      <div className={css.position}>{position}</div>
      <div className={css.h1}>{h1}</div>
      <div className={css.download}>{download}</div>
      <div className={css.down}>{down}</div>
    </div>
  );
}
