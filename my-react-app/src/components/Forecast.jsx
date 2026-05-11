const Forecast = ({ forecast }) => {

  const filtered = forecast.list.filter((item, index) => index % 8 === 0);

  return (
    <div className="forecast-container">

      {filtered.slice(0, 5).map((item) => (

        <div key={item.dt} className="forecast-card">

          <p>
            {new Date(item.dt_txt).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </p>

          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
          />

          <h4>{Math.round(item.main.temp)}°C</h4>

        </div>

      ))}

    </div>
  );
};

export default Forecast;