import { useEffect, useState } from "react";
import { getTodayWeather, getWeeklyForecast } from "./services/weatheApi";
import { getTrips } from "./services/trips";
import SearchPanel from "./components/SearchPanel";
import TripsList from "./components/TripsList";
import "./App.css";
import SideBar from "./components/SideBar";

const defaultTrips = getTrips().sort(
  (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
);

function App() {
  const [trips, setTrips] = useState(defaultTrips);
  const [selectedTrip, setSelectedTrip] = useState(defaultTrips[0]);
  const [weeklyData, setWeeklyData] = useState("");
  const [dayData, setDayData] = useState("");

  // console.log(trips);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTodayWeather(selectedTrip.title);

        console.log("selected", selectedTrip);
        // console.log("response", response.days[0]);
        setDayData(response);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [selectedTrip]);

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
        <div className="tripsContainer">
          <TripsList trips={trips} handleSelectTrip={handleSelectTrip} />
          <button className="addTripBtn" type="button">
            + <br />
            Add trip{" "}
          </button>
        </div>
      </main>
      <aside className="asideContainer">
        <SideBar dayData={dayData} selectedTrip={selectedTrip}/>
      </aside>
    </div>
  );
}

export default App;
