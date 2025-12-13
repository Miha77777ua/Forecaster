import { Container } from "../Container/Container.jsx";
import Logo from "../../images/logo.svg";
import LogoMob from "../../images/logo-mob.svg";
import User from "../../images/user.svg";
import style from "./Header.module.scss";
import { useEffect, useState } from "react";

export const Header = ({ toggleModal, username, toggleProfile }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateMedia = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <header className={style.header}>
      <Container>
        <div className={style.header__wrap}>
          <img src={width >= 768 ? Logo : LogoMob} className={style.header__logo} />
          <nav className={style.nav}>
            <ul className={style.nav__list}>
              <li className={style.nav__item}><a href="#hero" className={style.nav__link}>Who we are</a></li>
              <li className={style.nav__item}><a href="#footer" className={style.nav__link}>Contacts</a></li>
              <li className={style.nav__item}><a href="#cards" className={style.nav__link}>Menu</a></li>
            </ul>
          </nav>
          <div className={style.user}>
            {username === "" &&
              <button className={style.signup} onClick={toggleModal} id="open">Sign Up</button> ||
              <img src={User} className={style.user__logo} onClick={toggleProfile} id="profile" />}
          </div>
        </div>
      </Container>
    </header>
  )
}

