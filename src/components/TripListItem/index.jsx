import style from './TripListItem.module.css';

const TripListItem = ({ trip, handleSelectTrip }) => {
  const { startDate, title, endDate, image, id } = trip;
//   console.log(trip);
  return (
    <li className={style.tripListItem} onClick={() => handleSelectTrip(trip)}>
      <img className={style.tripListImage} src={image} alt={title} />
    <div className={style.tripListInfo}>
    <h3>{title}</h3>
      <p>
        {startDate} - {endDate}
      </p>
    </div>
    </li>
  );
};

export default TripListItem;
