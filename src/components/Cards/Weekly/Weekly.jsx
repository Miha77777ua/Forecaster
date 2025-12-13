import { useState, useEffect } from "react";
import api from "../../../api/weather.js";
import style from "./Weekly.module.scss";

export const Weekly = ({ city, isActive }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    changeData();
  }, [isActive, city]);

  const changeData = async () => {
    if (Object.keys(city).length > 0) {
      const data = await api.weekly(city.name);

      setData(data);
    }
  }

  const getImage = (code) => {
    return `https://openweathermap.org/img/wn/${code}@2x.png`;
  }

  return (
    <>
      {data[0] && isActive &&
        <div className={style.weekly}>
          <ul className={style.weekly__list}>
            <li className={style.weekly__item}>
              <p className={style.weekly__desc}>Now</p>
              <p className={style.weekly__temp}>{data[0].toSorted((a, b) => b.main.temp_max - a.main.temp_max)[0].main.temp_max}°C/{data[0].toSorted((a, b) => a.main.temp_min - b.main.temp_min)[0].main.temp_min}°C</p>
              <img src={getImage(data[0][0].weather[0].icon)} className={style.weekly__img} />
            </li>
            <li className={style.weekly__item}>
              <p className={style.weekly__desc}>Tommorow</p>
              <p className={style.weekly__temp}>{data[1].toSorted((a, b) => b.main.temp_max - a.main.temp_max)[0].main.temp_max}°C/{data[1].toSorted((a, b) => a.main.temp_min - b.main.temp_min)[0].main.temp_min}°C</p>
              <img src={getImage(data[1][0].weather[0].icon)} className={style.weekly__img} />
            </li>
            <li className={style.weekly__item}>
              <p className={style.weekly__desc}>Next day</p>
              <p className={style.weekly__temp}>{data[2].toSorted((a, b) => b.main.temp_max - a.main.temp_max)[0].main.temp_max}°C/{data[2].toSorted((a, b) => a.main.temp_min - b.main.temp_min)[0].main.temp_min}°C</p>
              <img src={getImage(data[2][0].weather[0].icon)} className={style.weekly__img} />
            </li>
          </ul>
        </div>}
    </>
  )
}

