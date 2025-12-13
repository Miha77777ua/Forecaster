import style from "./Details.module.scss";

export const Details = ({ card, isActive }) => {
  return (
    <>
      {Object.keys(card).length > 0 && isActive &&
        <div className={style.details}>
          <ul className={style.details__list}>
            <li className={style.details__item}>
              <p className={style.details__desc}>Feels like</p>
              <p className={style.details__info}>{card.main.feels_like}°C</p>
            </li>
            <li className={style.details__item}>
              <p className={style.details__desc}>Min temp</p>
              <p className={style.details__info}>{card.main.temp_min}°C</p>
              <p className={style.details__desc}>Max temp</p>
              <p className={style.details__info}>{card.main.temp_max}°C</p>
            </li>
            <li className={style.details__item}>
              <p className={style.details__desc}>Humidity</p>
              <p className={style.details__info}>{card.main.humidity}%</p>
            </li>
            <li className={style.details__item}>
              <p className={style.details__desc}>Pressure</p>
              <p className={style.details__info}>{card.main.pressure} Pa</p>
            </li>
            <li className={style.details__item}>
              <p className={style.details__desc}>Wind speed</p>
              <p className={style.details__info}>{card.wind.speed} m/s</p>
            </li>
            <li className={style.details__item}>
              <p className={style.details__desc}>Visibility</p>
              <p className={style.details__info}>{card.visibility} m</p>
            </li>
          </ul>
        </div>
      }
    </>
  )
}

