import React, { useState, useEffect } from "react";
import style from "./Countdown.module.css";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <ul className={style.timerContainer}>
      <li className={style.timerItem}>
        <p>{timeLeft.days}</p> DAYS
      </li>
      <li className={style.timerItem}>
        <p>{timeLeft.hours}</p> HOURS
      </li>
      <li className={style.timerItem}>
        <p>{timeLeft.minutes}</p> MINUTES
      </li>
      <li className={style.timerItem}>
        <p>{timeLeft.seconds}</p> SECONDS
      </li>
      {!Object.keys(timeLeft).length && <span>Have a nice trip!</span>}
    </ul>
  );
};

export default CountdownTimer;
