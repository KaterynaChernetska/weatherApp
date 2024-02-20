import TripListItem from "../TripListItem";
import style from './TripList.module.css';

const TripsList = ({ trips, handleSelectTrip }) => {
  return (
    <ul className={style.tripsList}>
      {trips.map((trip) => (
        <TripListItem
          key={trip.id}
          trip={trip}
          handleSelectTrip={handleSelectTrip}
        />
      ))}
    </ul>
  );
};
export default TripsList;
