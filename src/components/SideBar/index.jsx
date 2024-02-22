import getDayOfWeek from "../../helpers/getDayOfWeek";
import CountdownTimer from "../Countdown";
import Avatar from "../../../public/assets/icons/penguin.svg";
import style from "./SideBar.module.css";
import Icon from "../Icon";

import WeatherIcons from "../BackgroundIcon";

const SideBar = ({ dayData, selectedTrip }) => {
  const { days } = dayData;

  return (
    <aside className={style.asideContainer}>
      <p className={style.avatar}>
        <a href="#">
          <img src={Avatar} alt="Avatar Icon" />
        </a>
      </p>
      {days ? (
        <div>
          <p className={style.dayOfWeek}>{getDayOfWeek(days[0].datetime)}</p>
          <div className={style.temperatureContainer}>
            <div className={style.iconContainer}>
              <Icon iconName={days[0].icon} />
            </div>
            <p className={style.temperature}>
              {Math.round(days[0].temp)} <span className={style.celsiusMark}>&deg;С</span>
            </p>
          </div>
          <p className={style.cityTitle}>{selectedTrip.title}</p>
          <WeatherIcons iconName={days[0].icon} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <CountdownTimer targetDate={selectedTrip.startDate} />
    </aside>
  );
};

export default SideBar;
