const WeatherEffects = ({ type }) => {
  const rainTypes = ["Rain", "Drizzle", "Thunderstorm"];
  const mistTypes = ["Mist", "Fog", "Haze"];
  const isRain = rainTypes.includes(type);
  const isMist = mistTypes.includes(type);

  return (
    <div className="weather-effects">
      {isRain && (
        <>
          <div className="rain-container">
            {[...Array(120)].map((_, index) => (
              <span
                key={index}
                className="rain-drop"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${0.8 + Math.random() * 1.2}s`,
                  animationDelay: `${Math.random() * -2}s`,
                  opacity: 0.35 + Math.random() * 0.55,
                  height: `${70 + Math.random() * 60}px`,
                  transform: `rotate(${Math.random() * 10 - 5}deg)`,
                }}
              />
            ))}
          </div>
          <div className="rain-glass" />
          {type === "Thunderstorm" && <div className="lightning-flash" />}
          <div className="rain-ripples">
            {[...Array(20)].map((_, index) => (
              <div
                key={index}
                className="ripple"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </>
      )}

      {type === "Clear" && (
        <div className="sun-effect">
          <div className="sun-glow" />
          <div className="sun-core" />
          <div className="sun-rays">
            {[...Array(12)].map((_, index) => (
              <span key={index} className="sun-ray" style={{ transform: `translateX(-50%) rotate(${index * 30}deg)` }} />
            ))}
          </div>
          <div className="sun-flare" />
        </div>
      )}

      {type === "Clouds" && (
        <div className="clouds-wrapper">
          <div className="cloud cloud1" />
          <div className="cloud cloud2" />
          <div className="cloud cloud3" />
          <div className="cloud cloud4" />
          <div className="cloud-layer cloud-bg" />
        </div>
      )}

      {type === "Snow" && (
        <div className="snow-container">
          {[...Array(120)].map((_, index) => (
            <span
              key={index}
              className="snowflake"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 6}s`,
                animationDelay: `${Math.random() * -6}s`,
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
                opacity: 0.35 + Math.random() * 0.55,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
          <div className="snow-ground" />
        </div>
      )}

      {isMist && (
        <div className="mist-effect">
          <div className="mist-layer mist1" />
          <div className="mist-layer mist2" />
        </div>
      )}
    </div>
  );
};

export default WeatherEffects;