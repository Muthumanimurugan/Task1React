import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const WeatherCard = ({ weather }) => {
  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      scale={1.05}
      transitionSpeed={2000}
      glareBorderRadius="32px"
    >
      <motion.div
        className="weather-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="card-head">
          <div className="location-area">
            <h2>{weather.name}, {weather.sys.country}</h2>
            <p>{weather.weather[0].description}</p>
          </div>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt={weather.weather[0].description}
          />
        </div>

        <div className="temp-row">
          <h1>{Math.round(weather.main.temp)}°C</h1>
          <div className="temp-meta">
            <p>{Math.round(weather.main.feels_like)}° feels like</p>
            <p>{weather.weather[0].main}</p>
          </div>
        </div>

        <div className="weather-details">
          <div>
            <span>Humidity</span>
            <strong>{weather.main.humidity}%</strong>
          </div>
          <div>
            <span>Wind</span>
            <strong>{Math.round(weather.wind.speed)} m/s</strong>
          </div>
          <div>
            <span>Visibility</span>
            <strong>{(weather.visibility / 1000).toFixed(1)} km</strong>
          </div>
          <div>
            <span>Clouds</span>
            <strong>{weather.clouds?.all}%</strong>
          </div>
        </div>

        <div className="sun-times">
          <div>
            <span>Sunrise</span>
            {sunrise}
          </div>
          <div>
            <span>Sunset</span>
            {sunset}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default WeatherCard;
