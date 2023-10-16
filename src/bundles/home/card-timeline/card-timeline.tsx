import { ReactNode } from "react";
import Card from "../card";
import css from "./card-timeline.module.scss";
import cn from "classnames";
import { useCurrentLocale } from "@/src/locales/client";

type CardTimeline = {
  start: Date;
  end: Date;
  children: ReactNode;
};

const formatDate = (date: Date, locale: string) =>
  date.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
  });

export default function CardTimeline({ start, end, children }: CardTimeline) {
  const locale = useCurrentLocale();

  return (
    <div className={css.root}>
      <span className={cn(css.date, css.dateStart)}>
        {formatDate(start, locale)}
      </span>
      <Card>{children}</Card>
      <span className={cn(css.date, css.dateEnd)}>
        {formatDate(end, locale)}
      </span>
    </div>
  );
}
