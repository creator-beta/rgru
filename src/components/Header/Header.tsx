import { Link } from "react-router-dom";
import Styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={Styles["header"]}>
      <div className={`container ${Styles["header__container"]}`}>
        <img className={Styles["logo"]} src="./logo.svg" alt="Логотип RG.RU" />
        <nav className={Styles["nav"]}>
          <ul className={Styles["nav__list"]}>
            <li className={Styles["nav__link"]}>
              <Link to="/">Новости</Link>
            </li>
            <li className={Styles["nav__link"]}>
              <a href="https://github.com/creator-beta/rg-ru" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
