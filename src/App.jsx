import { useEffect, useState } from "react";
import { getTodayWeather, getWeeklyForecast } from "./services/weatheApi";
import { getTrips } from "./services/trips";
import SearchPanel  from "./components/SearchPanel";
import TripsList from "./components/TripsList";

const defaultTrips = getTrips().sort(
  (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
);

function App() {
  const [trips, setTrips] = useState(defaultTrips);

  console.log(trips);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {

  //       const response = await getWeeklyForecast('Copenhagen', '2024-10-19', '2024-11-19' );

  //       console.log(response)

  //     } catch (error) {
  //       console.error("Error fetching weather data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const handleSearch = (query) => {
    const filteredTrips = defaultTrips.filter((trip) =>
      trip.title.toLowerCase().includes(query.toLowerCase())
    );
    setTrips(filteredTrips);
  };

  return (
    <>
      <header>
        <a href="/">Weather Forecast</a>
      </header>
      <main>
        <SearchPanel FilterTrips={handleSearch} />
        <TripsList trips={trips}/>
      </main>
      <aside></aside>
    </>
  );
}

export default App;
