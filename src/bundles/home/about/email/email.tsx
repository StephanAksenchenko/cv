import { email } from "@/src/data/personal-info";
import css from "./email.module.scss";

export default function Email() {
  return (
    <a href={`mailto:${email}`} className={css.root}>
      {email}
    </a>
  );
}
