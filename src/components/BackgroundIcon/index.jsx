import style from "./BackgroundIcon.module.css";

const WeatherIcons = ({ iconName }) => {
 
  return (
    <div className={style.IconsContainer}>
      <div
        className={style.backgroundIcon1}
        style={{
          backgroundImage: `url(/weatherApp/public/assets/icons/weather/${iconName}.svg`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
      <div
        className={style.backgroundIcon2}
        style={{
          backgroundImage: `url(/weatherApp/public/assets/icons/weather/${iconName}.svg`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
      <div
        className={style.backgroundIcon3}
        style={{
          backgroundImage: `url(/weatherApp/public/assets/icons/weather/${iconName}.svg`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
      <div
        className={style.backgroundIcon4}
        style={{
          backgroundImage: `url(/weatherApp/public/assets/icons/weather/${iconName}.svg`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
    </div>
  );
};

export default WeatherIcons;
