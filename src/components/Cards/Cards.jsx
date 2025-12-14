import style from "./Cards.module.scss";
import { Container } from "../Container/Container";
import { Details } from "./Details/Details.jsx";
import { Hourly } from "./Hourly/Hourly.jsx";
import { Weekly } from "./Weekly/Weekly.jsx";
import Refresh from "../../images/refresh.svg";
import Heart from "../../images/heart.svg";
import FullHeart from "../../images/full-heart.svg";
import Trash from "../../images/trash.svg"; import data from "../../data/date.js";
import { useState } from "react";

export const Cards = ({ cities, update, remove, favorite, isLogged }) => {
  const [activeCard, setActiveCard] = useState({});
  const [seeMore, setSeeMore] = useState(false);
  const [hourly, setHourly] = useState(false);
  const [weekly, setWeekly] = useState(false);

  const getImage = (id) => {
    return `https://openweathermap.org/img/wn/${cities[id].weather[0].icon}@2x.png`;
  }

  const changeActiveCard = (ev) => {
    if (activeCard === cities[ev.target.parentElement.parentElement.id]) {
      setSeeMore(!seeMore);
    } else {
      setSeeMore(true);
    }

    setActiveCard(cities[ev.target.parentElement.parentElement.id]);
  }

  const enableDailyForecast = (ev) => {
    if (activeCard === cities[ev.target.parentElement.id]) {
      setHourly(!hourly);
    } else {
      setHourly(true);
    }

    setActiveCard(cities[ev.target.parentElement.id]);
  }

  const enableWeeklyForecast = (ev) => {
    if (activeCard === cities[ev.target.parentElement.id]) {
      setWeekly(!weekly);
    } else {
      setWeekly(true);
    }

    setActiveCard(cities[ev.target.parentElement.id]);
  }

  return (
    <section className={(cities[0] && style.cards) || `${style.cards} ${style.none}`} id="cards">
      <Container>
        {(cities[0] &&
          <ul className={style.cards__list}>
            {cities.map((el, id) => (
              <li className={style.cards__item} key={id} id={id}>
                <div className={style.cards__top}>
                  <p className={style.cards__city}>{el.name}</p>
                  <p className={style.cards__country}>{el.sys.country}</p>
                </div>
                <p className={style.cards__hour}>{el.time.hours}</p>
                <button className={style.cards__hourly} onClick={enableDailyForecast}>Hourly forecast</button>
                {isLogged && <button className={style.cards__hourly} onClick={enableWeeklyForecast}>3-day forecast</button>}
                <div className={style.cards__time}>
                  <p className={style.cards__date}>{el.time.date}</p>
                  <p className={style.cards__day}>{data.days[el.time.day]}</p>
                </div>
                <img className={style["cards__img-weather"]} src={getImage(id)} />
                <p className={style.cards__temperature}>{el.main.temp}°C</p>
                <div className={style.cards__bottom}>
                  <div className={style.cards__actions}>
                    <button className={style.cards__reload} onClick={() => update(id, el.name)}>
                      <img className={style.cards__img} src={Refresh} />
                    </button>
                    <button className={style.cards__like} onClick={() => favorite(id)}>
                      {el.liked && <img width={30} height={30} className={style.cards__img} src={FullHeart} /> || <img width={30} height={30} className={style.cards__img} src={Heart} />}
                    </button>
                  </div>
                  <button className={style.cards__load} onClick={changeActiveCard}>See more</button>
                  <button className={style.cards__remove} onClick={() => { remove(id); setActiveCard({}); setSeeMore(false) }}>
                    <img className={style.cards__img} src={Trash} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) || <p className={style.cards__error}>No cities added at the moment</p>}
        <Details card={activeCard} isActive={seeMore} />
        {hourly && <Hourly city={activeCard} isActive={hourly} />}
        {weekly && <Weekly city={activeCard} isActive={weekly} />}
      </Container>
    </section>
  )
}

