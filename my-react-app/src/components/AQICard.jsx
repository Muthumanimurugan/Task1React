const AQICard = ({ aqi }) => {

  const levels = {
    1: "Good",
    2: "Fair",
    3: "Moderate",
    4: "Poor",
    5: "Very Poor",
  };

  return (
    <div className="aqi-card">

      <h3>Air Quality</h3>

      <p>
        AQI: {aqi}
      </p>

      <span>
        {levels[aqi]}
      </span>

    </div>
  );
};

export default AQICard;