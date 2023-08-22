import { convertData } from "../utils";

export default function WeatherBox({ weather, handleAddCity }) {
  const weatherData = convertData(weather);

  return (
    <div className="weather-box">
      <div className="weather-details">
        <h4>WEATHER RESULTS</h4>
        <p>
          <b>{weatherData.resolvedAddress}</b>
        </p>
        <p>Description: {weatherData.description}</p>
        <p>Conditions: {weatherData.conditions}</p>
        <p>Temp: {weatherData.temp}</p>
        <p>Cloudcover: {weatherData.cloudcover}</p>
        <p>Wind Speed: {weatherData.windspeed}</p>
      </div>
      <button onClick={() => handleAddCity(weather)}>Add To List</button>
    </div>
  );
}
