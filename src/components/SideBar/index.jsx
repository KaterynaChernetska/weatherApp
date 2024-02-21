import getDayOfWeek from "../../helpers/getDayOfWeek";
import CountdownTimer from "../Countdown";
import Avatar from "../../assets/icons/penguin.svg";
import style from "./SideBar.module.css";
import Icon from "../Icon";

import WeatherIcons from "../BackgroundIcon";

const SideBar = ({ dayData, selectedTrip }) => {
  const { days } = dayData;
  console.log(days);
  console.log(selectedTrip);
  // const {daytime} = days;
  //   const day = getDayOfWeek(dayData.days[0].daytime)
  return (
    <aside className={style.asideContainer}>
      {/* <div
        className={style.backgroundIcon}
        style={{
          backgroundImage: `url(weatherApp/src/assets/icons/weather/${days[0].icon}.svg`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain"
        }}
      /> */}
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
              {days[0].temp} <span className={style.celsiusMark}>&deg;С</span>
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
