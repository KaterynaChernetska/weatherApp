import getDayOfWeek from "../../helpers/getDayOfWeek";
import Icon from "../Icon";
import style from "./WeatherList.module.css";

const WeatherList = ({ weeklyData }) => {
  const { days } = weeklyData;

  return (
    <section>
      <h2>Week</h2>
      <ul className={style.weatherList}>
        {days &&
          days.map((day) => (
            <li key={day.datetimeEpoch}>
              <p className={style.dayOfTheWeek}>{getDayOfWeek(day.datetime)}</p>
              <p className={style.icon}>
                <Icon iconName={day.icon} />
              </p>
              <p className={style.temperature}>
                {Math.round(day.tempmax)}&deg;/{Math.round(day.tempmin)}&deg;
              </p>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default WeatherList;
