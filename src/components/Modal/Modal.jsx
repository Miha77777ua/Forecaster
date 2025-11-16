import { useEffect, useState } from "react";
import style from "./Modal.module.scss";

export const Modal = ({ isModalOpen, toggleModal }) => {
  const [mode, setMode] = useState("sign");

  return (
    <div className={(isModalOpen && `${style.backdrop}`) || `${style.backdrop} ${style.hidden}`} onClick={toggleModal} id="backdrop">
      <div className={style.modal}>
        <h2 className={style.modal__title}>{(mode === "sign" && "Sign up") || "Log in"}</h2>
        <form className={style.modal__form}>
          <div className={style.form__group}>
            <label htmlFor="user" className={style.modal__label}>{(mode === "sign" && "Username") || "Username/Email"}</label>
            <input type="text" className={style.modal__input} name="user" id="user" placeholder={(mode === "sign" && "Username") || "Username/Email"} />
          </div>
          {mode === "sign" && <div className={style.form__group}>
            <label htmlFor="email" className={style.modal__label}>Email</label>
            <input type="email" className={style.modal__input} name="email" id="email" placeholder="E-mail" />
          </div>}
          <div className={style.form__group}>
            <label htmlFor="password" className={style.modal__label}>Password</label>
            <input type="password" className={style.modal__input} name="password" id="password" placeholder="Password" />
          </div>
          <button className={style.modal__submit} type="submit">{(mode === "sign" && "Sign up") || "Log in"}</button>
        </form>
        <div className={style.modal__bottom}>
          <p className={style.bottom__text}>{(mode === "sign" && "Already have an account?") || "Don't have an account?"}</p>
          <button className={style.bottom__action}>{(mode === "sign" && "Log in") || "Sign up"}</button>
        </div>
      </div>
    </div>
  )
}

