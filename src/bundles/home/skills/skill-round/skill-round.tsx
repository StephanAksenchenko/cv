import css from "./skill-round.module.scss";

type SkillRoundProps = {
  title: string;
  progress: number;
  numberBackground: string;
};

export default function SkillRound({
  progress,
  title,
  numberBackground,
}: SkillRoundProps) {
  const deg = (360 / 100) * (100 - progress);

  return (
    <div>
      <div className={css.titleWrapper}>
        <h3 className={css.title}>{title}</h3>
      </div>
      <div
        className={css.roundProgress}
        style={{
          background: `conic-gradient(var(--color-neutral) 0 ${deg}deg, var(--color-accent) ${deg}deg 360deg)`,
        }}
      >
        <div
          className={css.number}
          style={{ backgroundColor: numberBackground }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}
