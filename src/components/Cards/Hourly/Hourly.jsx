import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import api from "../../../api/weather.js";
import { useEffect, useState } from "react";
import style from "./Hourly.module.scss";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export const Hourly = ({ city, isActive }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    changeData();
  }, [isActive, city]);

  const changeData = async () => {
    if (Object.keys(city).length > 0) {
      const data = await api.hourly(city.name);

      setData(data)
    }
  }

  return (
    <>
      {isActive && data[0] &&
        <div className={style.hourly}>
          <h3 className={style.hourly__title}>Hourly forecast</h3>
          <Line options={{ responsive: true, }} data={{ labels: data.map(el => el.dt_txt.split(" ")[1]), datasets: [{ label: "Temperature", data: data.map(el => el.main.temp), borderColor: "#FFB36C", backgroundColor: "#FFB36C" }], }} />
        </div>}
    </>
  )
}

