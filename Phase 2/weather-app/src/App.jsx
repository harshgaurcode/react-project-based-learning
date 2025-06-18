import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("Delhi");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      if (!city) return;
      setLoading(true);
      setError(null);
      try {
        const apiKey = "b4a7a9d897ef4ab8978184836251806";
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        );
        if (!response.ok) throw new Error("City not found!");
        const json = await response.json();
        console.log(response);
        setData(json);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    }

    fetchWeather();
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={setCity} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && <WeatherCard weather={data} />}
    </div>
  );
}

export default App;
