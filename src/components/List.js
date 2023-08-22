import { convertData } from "../utils";
const generateUniqueId = require("generate-unique-id");

export default function List({ cityList, handleRemove, handleSelect }) {
  return (
    <div className="list-container">
      <ul>
        {cityList &&
          cityList.map((city) => (
            <ListItem
              key={generateUniqueId()}
              cityData={city}
              handleRemove={handleRemove}
              handleSelect={handleSelect}
            />
          ))}
      </ul>
    </div>
  );
}

function ListItem({ cityData, handleRemove, handleSelect }) {
  const weatherData = convertData(cityData);

  return (
    <li title="Select for more details" onClick={() => handleSelect(cityData)}>
      <div className="list-info">
        <p className="list-city-name">
          <b>{weatherData.resolvedAddress}</b>
        </p>
        <div className="list-sub-list">
          <p className="list-details">Temp: {weatherData.temp}</p>
          <p className="list-details">Conditions: {weatherData.conditions}</p>
          <p className="list-details">Wind Speed: {weatherData.windspeed}</p>
        </div>
      </div>
      <button onClick={() => handleRemove(cityData)} title="Delete item">
        X
      </button>
    </li>
  );
}
