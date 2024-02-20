import TripListItem from "../TripListItem";

const TripsList = ({ trips, handleSelectTrip }) => {
  return (
    <ul>
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
