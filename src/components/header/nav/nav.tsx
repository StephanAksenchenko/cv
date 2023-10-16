import NavLaptop from "./nav-laptop";
import css from "./nav.module.scss";

export default function Nav() {
  return (
    <nav className={css.root}>
      <div className={css.forLaptop}>
        <NavLaptop />
      </div>
    </nav>
  );
}
