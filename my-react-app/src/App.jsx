import { useState } from "react";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import AQICard from "./components/AQICard";
import Loader from "./components/Loader";
import ThemeToggle from "./components/ThemeToggle";
import {
  fetchWeather,
  fetchForecast,
  fetchWeatherByCoords,
  fetchForecastByCoords,
  fetchAirQuality,
} from "./services/weatherApi";

import "./styles/weather.css";
import WeatherEffects from "./components/WeatherEffects";
import WeatherCharacter from "./components/WeatherCharacter";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [aqi, setAqi] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError("");

    try {
      const weatherData = await fetchWeather(city);
      setWeather(weatherData);
      setCity(weatherData.name || city);

      const forecastData = await fetchForecast(city);
      setForecast(forecastData);

      const airData = await fetchAirQuality(
        weatherData.coord.lat,
        weatherData.coord.lon
      );
      setAqi(airData.list[0].main.aqi);
    } catch (err) {
      setError("City not found. Please try another location.");
    } finally {
      setLoading(false);
    }
  };

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const weatherData = await fetchWeatherByCoords(latitude, longitude);
          setWeather(weatherData);
          setCity(weatherData.name || "");

          const forecastData = await fetchForecastByCoords(latitude, longitude);
          setForecast(forecastData);

          const airData = await fetchAirQuality(latitude, longitude);
          setAqi(airData.list[0].main.aqi);
        } catch (err) {
          setError("Unable to load current location weather.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied. Please allow access.");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 12000 }
    );
  };

  const weatherType = weather?.weather?.[0]?.main || "";

  return (

    <div className={`app ${weatherType} ${darkMode ? "dark" : ""}`}>

      <ThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <WeatherEffects type={weatherType} />
      {weather && <WeatherCharacter type={weatherType} />}

      <div className="overlay">

        <h1 className="title">Premium Weather</h1>

        <SearchBar
          city={city}
          setCity={setCity}
          handleSearch={handleSearch}
          handleLocate={handleCurrentLocation}
        />

        {loading && <Loader />}

        {error && (
          <div className="error-box">
            {error}
          </div>
        )}

        {weather && <WeatherCard weather={weather} />}

        {aqi && <AQICard aqi={aqi} />}

        {forecast && (
          <Forecast forecast={forecast} />
        )}

      

      </div>

    </div>
  );
}

export default App;