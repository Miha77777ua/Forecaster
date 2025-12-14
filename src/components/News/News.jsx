import { useEffect, useState } from "react";
import { Container } from "../Container/Container";
import api from "../../api/news.js";
import style from "./News.module.scss";

export const News = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const loadApi = async (page) => {
    const response = await api.news(page);

    setData([...data, ...response.articles]);
  }

  const loadMore = () => {
    loadApi(page + 1);

    setPage(page + 1);
  }

  useEffect(() => {
    loadApi(page);
  }, []);

  return (
    <section className={(data[0] && style.news) || `${style.news} ${style.none}`}>
      <Container>
        {(data[0] && <>
          <h2 className={style.news__title}>Nature news</h2>
          <ul className={style.news__list}>
            {data.map((el, id) => (
              <li className={style.news__item} key={id}>
                <a href={el.url} className={style.news__link} target="_blank">
                  <img src={el.urlToImage} className={style.news__img} alt="Image" />
                  <p className={style.news__desc}>{el.title}</p>
                </a>
              </li>
            ))}
            <button className={style.news__more} onClick={loadMore}>See more</button>
          </ul>
        </>) || <p className={style.news__error}>News are not avaible at the time :(</p>}
      </Container>
    </section>
  )
}

