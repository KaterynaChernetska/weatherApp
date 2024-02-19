import { useEffect, useState } from "react";
import { getTodayWeather, getWeeklyForecast } from "./services/weatheApi";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await getWeeklyForecast('London', '2024-10-19', '2024-11-19' );
        // const response = await getTodayWeather("London")
      
        console.log(response)

        // const response = await fetch(
        //   "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=G5SUHRFAGCTKSALBLDCA7FVPK"
        // );

        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }

        // const data = await response.json();
        // console.log(data)
        // setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Weather Data</h1>
      {weatherData ? (
        <pre>{JSON.stringify(weatherData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
