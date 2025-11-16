import { Container } from "../Container/Container.jsx";
import Logo from "../../images/logo.svg";
import User from "../../images/user.svg";
import style from "./Header.module.scss";

export const Header = ({ toggleModal }) => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.header__wrap}>
          <img src={Logo} className={style.header__logo} />
          <nav className={style.nav}>
            <ul className={style.nav__list}>
              <li className={style.nav__item}><a href="." className={style.nav__link}>Who we are</a></li>
              <li className={style.nav__item}><a href="." className={style.nav__link}>Contacts</a></li>
              <li className={style.nav__item}><a href="." className={style.nav__link}>Menu</a></li>
            </ul>
          </nav>
          <div className={style.user}>
            <button className={style.signup} onClick={toggleModal} id="open">Sign Up</button>
            <img src={User} className={style.user__logo} />
          </div>
        </div>
      </Container>
    </header>
  )
}

