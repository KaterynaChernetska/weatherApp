import { useEffect, useState } from "react";
import { getTodayWeather, getWeeklyForecast } from "./services/weatheApi";
import { getTrips } from "./services/trips";
import SearchPanel from "./components/SearchPanel";
import TripsList from "./components/TripsList";
import "./App.css";
import SideBar from "./components/SideBar";
import Loader from "./components/Loader";
import WeatherList from "./components/WeatherList";
import { Modal } from "./components/Modal";

const defaultTrips = getTrips();

function App() {
  const [trips, setTrips] = useState(defaultTrips);
  const [selectedTrip, setSelectedTrip] = useState(defaultTrips[0]);
  const [weeklyData, setWeeklyData] = useState("");
  const [dayData, setDayData] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Отримання сьогоднішньої погоди
        const todayWeather = await getTodayWeather(selectedTrip.title);
        setDayData(todayWeather);

        // Отримання тижневого прогнозу
        const weeklyForecast = await getWeeklyForecast(
          selectedTrip.title,
          selectedTrip.startDate,
          selectedTrip.endDate
        );
        setWeeklyData(weeklyForecast);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError(true);
      } finally {
        setLoading(false);
        setError(false);
      }
    };

    fetchData();
  }, [selectedTrip]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSearch = (query) => {
    const filteredTrips = defaultTrips.filter((trip) =>
      trip.title.toLowerCase().includes(query.toLowerCase())
    );
    setTrips(filteredTrips);
  };

  const handleSelectTrip = (tripInfo) => {
    setSelectedTrip(tripInfo);
  };
const sortedTrips = trips.sort(
  (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
);
  return (
    <div className="container">
      <main className="mainContainer">
        {error && <p>Something went wrong</p>}
        {loading && <Loader />}
        <a className="logo" href="/">
          Weather <span className="logoBold">Forecast</span>
        </a>
        <SearchPanel FilterTrips={handleSearch} />
        <section className="tripsContainer">
          <TripsList trips={sortedTrips} handleSelectTrip={handleSelectTrip} />
          <button onClick={toggleModal} className="addTripBtn" type="button">
            + <br />
            Add trip{" "}
          </button>
        </section>
        <WeatherList weeklyData={weeklyData} />
      </main>

      <SideBar
        dayData={dayData}
        selectedTrip={selectedTrip}
        loading={loading}
      />
      {isModalOpen && <Modal onClose={toggleModal} />}
    </div>
  );
}

export default App;
