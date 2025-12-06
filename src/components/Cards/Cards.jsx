import style from "./Cards.module.scss";
import { Container } from "../Container/Container";
import Refresh from "../../images/refresh.svg";
import Heart from "../../images/heart.svg";
import Trash from "../../images/trash.svg";
import Sun from "../../images/sun.svg";

export const Cards = () => {
  return (
    <section className={style.cards}>
      <Container>
        <ul className={style.cards__list}>
          <li className={style.cards__item}>
            <div className={style.cards__top}>
              <p className={style.cards__city}>Prague</p>
              <p className={style.cards__country}>Czech Republic</p>
            </div>
            <p className={style.cards__hour}>14:00</p>
            <button className={style.cards__hourly}>Hourly forecast</button>
            <div className={style.cards__time}>
              <p className={style.cards__date}>13.10.2023</p>
              <p className={style.cards__day}>Friday</p>
            </div>
            <img className={style["cards__img-weather"]} src={Sun} />
            <p className={style.cards__temperature}>22°C</p>
            <div className={style.cards__bottom}>
              <div className={style.cards__actions}>
                <button className={style.cards__reload}>
                  <img className={style.cards__img} src={Refresh} />
                </button>
                <button className={style.cards__like}>
                  <img className={style.cards__img} src={Heart} />
                </button>
              </div>
              <button className={style.cards__load}>See more</button>
              <button className={style.cards__remove}>
                <img className={style.cards__img} src={Trash} />
              </button>
            </div>
          </li>
          <li className={style.cards__item}>
            <div className={style.cards__top}>
              <p className={style.cards__city}>Prague</p>
              <p className={style.cards__country}>Czech Republic</p>
            </div>
            <p className={style.cards__hour}>14:00</p>
            <button className={style.cards__hourly}>Hourly forecast</button>
            <div className={style.cards__time}>
              <p className={style.cards__date}>13.10.2023</p>
              <p className={style.cards__day}>Friday</p>
            </div>
            <img className={style["cards__img-weather"]} src={Sun} />
            <p className={style.cards__temperature}>22°C</p>
            <div className={style.cards__bottom}>
              <div className={style.cards__actions}>
                <button className={style.cards__reload}>
                  <img className={style.cards__img} src={Refresh} />
                </button>
                <button className={style.cards__like}>
                  <img className={style.cards__img} src={Heart} />
                </button>
              </div>
              <button className={style.cards__load}>See more</button>
              <button className={style.cards__remove}>
                <img className={style.cards__img} src={Trash} />
              </button>
            </div>
          </li>
          <li className={style.cards__item}>
            <div className={style.cards__top}>
              <p className={style.cards__city}>Prague</p>
              <p className={style.cards__country}>Czech Republic</p>
            </div>
            <p className={style.cards__hour}>14:00</p>
            <button className={style.cards__hourly}>Hourly forecast</button>
            <div className={style.cards__time}>
              <p className={style.cards__date}>13.10.2023</p>
              <p className={style.cards__day}>Friday</p>
            </div>
            <img className={style["cards__img-weather"]} src={Sun} />
            <p className={style.cards__temperature}>22°C</p>
            <div className={style.cards__bottom}>
              <div className={style.cards__actions}>
                <button className={style.cards__reload}>
                  <img className={style.cards__img} src={Refresh} />
                </button>
                <button className={style.cards__like}>
                  <img className={style.cards__img} src={Heart} />
                </button>
              </div>
              <button className={style.cards__load}>See more</button>
              <button className={style.cards__remove}>
                <img className={style.cards__img} src={Trash} />
              </button>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  )
}

