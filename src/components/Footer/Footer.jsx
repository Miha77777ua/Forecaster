import Logo from "../../images/logo.svg";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";
import Whatsapp from "../../images/whatsapp.svg";
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <img src={Logo} alt="logo" className={style.footer__logo} />
      <address className={style.footer__addres}>
        <p className={style.address__title}>Address</p>
        <ul className={style.adress__list}>
          <li className={style.adress__item}>
            <p className={style.address__street}>Svobody str.35</p>
          </li>
          <li className={style.adress__item}>
            <p className={style.address__city}>Kyiv</p>
          </li>
          <li className={style.adress__item}>
            <p className={style.address__country}>Ukraine</p>
          </li>
        </ul>
      </address>
      <div className={style.footer__contacts}>
        <p className={style.contacts__title}>Contact us</p>
        <ul className={style.contacts__list}>
          <li className={style.contacts__item}>
            <img src={Instagram} alt="instagram" className={style.contacts__icon} />
          </li>
          <li className={style.contacts__item}>
            <img src={Facebook} alt="facebook" className={style.contacts__icon} />
          </li>
          <li className={style.contacts__item}>
            <img src={Whatsapp} alt="whatsapp" className={style.contacts__icon} />
          </li>
        </ul>
      </div>
    </footer>
  )
}

