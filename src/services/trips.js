import Trips from "../data/trips.json";

const tripsCopy = Trips.slice();

const getTrips = () => {
  return tripsCopy;
};

const getTripById = (id) => {
  return tripsCopy.find((trip) => trip.id === id);
};

const createNewTrip = (trip) => {
  tripsCopy.push(trip);
};

export { getTrips, getTripById, createNewTrip };
