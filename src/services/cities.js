import Cities from "../data/cities.json";

const citiesCopy = Cities.slice();

const getCities = () => {
  return citiesCopy;
};

const getCityById = (id) => {
  return citiesCopy.find((city) => city.id === id);
};

const createNewCity = (city) => {
  citiesCopy.push(city);
};

export { getCities, getCityById, createNewCity };
