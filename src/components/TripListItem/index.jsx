import formatDate from "../../helpers/formatDate";
import style from "./TripListItem.module.css";

const TripListItem = ({ trip, handleSelectTrip }) => {
  const { startDate, title, endDate, image } = trip;
  return (
    <li className={style.tripListItem} onClick={() => handleSelectTrip(trip)}>
      <img className={style.tripListImage} src={image} alt={title} />
      <div className={style.tripListInfo}>
        <h3>{title}</h3>
        <p>
          {formatDate(startDate)} - {formatDate(endDate)}
        </p>
      </div>
    </li>
  );
};

export default TripListItem;
