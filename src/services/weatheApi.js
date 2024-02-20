const API_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

const API_KEY = "G5SUHRFAGCTKSALBLDCA7FVPK";

// usually I would hide API_KEY in .env file but I need my app to be working in gh-pages demo

export const getWeeklyForecast = async (city, startDate, endDate) => {
  try {
    const response = await fetch(
      `${API_URL}/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    // return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

export const getTodayWeather = async (city) => {
  try {
    const response = await fetch(
      `${API_URL}/${city}/today?unitGroup=metric&include=days
          &key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
