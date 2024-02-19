import TripListItem from "../TripListItem";

const TripsList = ({ trips }) => {
  return (
    <ul>
 
      {trips.map((trip) => (
        <TripListItem key={trip.id} trip={trip} />
      ))}
    </ul>
  );
};
export default TripsList;
