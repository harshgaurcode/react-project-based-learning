function WeatherCard({ weather }) {
  return (
    <div>
      <h2>{weather.location.name}</h2>
      <p>{weather.current.condition.text}</p>
      <p>Temperature: {weather.current.temp_c}°C</p>
      <img
        src={`https:${weather.current.condition.icon}`}
        alt={weather.current.condition.text}
      />
    </div>
  );
}

export default WeatherCard;
