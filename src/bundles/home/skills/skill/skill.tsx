import css from "./skill.module.scss";

export type SkillProps = {
  title: string;
  progress: number;
};

export default function Skill({ progress, title }: SkillProps) {
  return (
    <div className={css.root}>
      <div className={css.titleWrapper}>
        <h4 className={css.title}>{title}</h4>
      </div>
      <div className={css.barWrapper}>
        <div className={css.bar}>
          <div
            className={css.progress}
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
      <div className={css.pointsWrapper}>
        <div className={css.points}>{progress}/100</div>
      </div>
    </div>
  );
}
