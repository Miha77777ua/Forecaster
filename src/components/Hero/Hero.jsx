import data from "../../data/date.js";
import style from "./Hero.module.scss";
import Search from "../../images/search.svg";

export const Hero = ({ submit }) => {
  const getCurrentMonth = () => {
    const date = new Date();

    return `${data.months[date.getMonth()]} ${date.getFullYear()}`;
  }

  const getCurrentDay = () => {
    const date = new Date();
    const day = date.getDate().toString();

    return `${data.days[date.getDay()]}, ${day}${day[day.length - 1] === "1" ? "st" : day[day.length - 1] === "2" ? "nd" : day[day.length - 1] === "3" ? "rd" : "th"}`;
  }

  return (
    <div className={style.hero}>
      <h1 className={style.hero__title}>Weather dashboard</h1>
      <div className={style.hero__central}>
        <p className={style.hero__text}>Create your personal list of favorite cities and always be aware of the weather.</p>
        <div className={style.hero__date}>
          <p className={style.date__text}>{getCurrentMonth()}</p>
          <p className={style.date__text}>{getCurrentDay()}</p>
        </div>
      </div>
      <form className={style.hero__form} onSubmit={submit}>
        <input name="search" type="text" className={style.hero__search} placeholder="Search location..." required />
        <button type="submit" className={style.hero__submit}><img src={Search} className={style.hero__icon} /></button>
      </form>
    </div>
  )
}

