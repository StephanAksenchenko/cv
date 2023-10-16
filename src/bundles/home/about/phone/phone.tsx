import { phone } from "@/src/data/personal-info";
import css from "./phone.module.scss";

const formatted = (() => {
  const a = phone.slice(0, 2);
  const b = phone.slice(2, 5);
  const c = phone.slice(5, 8);
  const d = phone.slice(8, 10);
  const e = phone.slice(10, 12);

  return `${a} (${b}) ${c}-${d}-${e}`;
})();

export default function Phone() {
  return (
    <a href={`tel:${phone}`} className={css.root}>
      {formatted}
    </a>
  );
}
