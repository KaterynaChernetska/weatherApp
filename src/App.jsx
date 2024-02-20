import { useEffect, useState } from "react";
import { getTodayWeather, getWeeklyForecast } from "./services/weatheApi";
import { getTrips } from "./services/trips";
import SearchPanel from "./components/SearchPanel";
import TripsList from "./components/TripsList";
import "./App.css";

const defaultTrips = getTrips().sort(
  (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
);

function App() {
  const [trips, setTrips] = useState(defaultTrips);
  const [selectedTrip, setSelectedTrip] = useState(" ");
  const [weeklyData, setWeeklyData] = useState("");

  // console.log(trips);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const responseForWeek = await getWeeklyForecast(
  //         "Copenhagen",
  //         "2024-10-19",
  //         "2024-11-19"
  //       );

  //       console.log("selected", selectedTrip);
  //       console.log(response);
  //     } catch (error) {
  //       console.error("Error fetching weather data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [selectedTrip]);

  const handleSearch = (query) => {
    const filteredTrips = defaultTrips.filter((trip) =>
      trip.title.toLowerCase().includes(query.toLowerCase())
    );
    setTrips(filteredTrips);
  };

  const handleSelectTrip = (tripInfo) => {
    // console.log(tripInfo);
    setSelectedTrip(tripInfo);
  };

  return (
    <div className="container">
      <main className="mainContainer">
        <a className="logo" href="/">
          Weather <span className="logoBold">Forecast</span>
        </a>
        <SearchPanel FilterTrips={handleSearch} />
        <TripsList trips={trips} handleSelectTrip={handleSelectTrip} />
      </main>
      <aside className="asideContainer">

      </aside>
    </div>
  );
}

export default App;
