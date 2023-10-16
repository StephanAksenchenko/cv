import css from "./header.module.scss";
import Logo from "./logo";
import Nav from "./nav";
import Settings from "./settings";

export default function Header() {
  return (
    <header className={css.root}>
      <div className={css.grid}>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.nav}>
          <Nav />
        </div>
        <div className={css.settings}>
          <Settings />
        </div>
      </div>
    </header>
  );
}
