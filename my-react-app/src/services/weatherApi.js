import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (city) => {
  const response = await axios.get(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};

export const fetchForecast = async (city) => {
  const response = await axios.get(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};

export const fetchWeatherByCoords = async (lat, lon) => {
  const response = await axios.get(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};

export const fetchForecastByCoords = async (lat, lon) => {
  const response = await axios.get(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return response.data;
};

export const fetchAirQuality = async (lat, lon) => {
  const response = await axios.get(
    `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  return response.data;
};