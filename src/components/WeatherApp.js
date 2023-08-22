import { useState, useEffect } from "react";
import { fetchWeather } from "../utils.js";
import CityForm from "./CityForm.js";
import WeatherBox from "./WeatherBox.js";
import List from "./List";

export default function WeatherApp() {
  const [selectedWeather, setSelectedWeather] = useState();
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    //check if data in local storage
    const storedData = localStorage.getItem("weatherData");
    if (storedData) {
      setCityList(JSON.parse(storedData));
    }
  }, []);

  const getCity = (city) => {
    console.log(city);
    fetchWeather(city)
      .then((weatherData) => {
        console.log("weatherData: ", weatherData);
        setSelectedWeather(weatherData);
      })
      .catch((err) => {
        console.error(err);
        alert("There was an error fetching results");
      });

    setSelectedWeather();
  };

  const handleAddCity = (cityWeather) => {
    if (!selectedWeather) {
      alert("No data to add");
      return;
    }

    if (
      !cityList.find(
        (data) => data.resolvedAddress === cityWeather.resolvedAddress
      )
    ) {
      const updatedData = [...cityList, cityWeather];
      setCityList(updatedData);
      localStorage.setItem("weatherData", JSON.stringify(updatedData));
    } else {
      alert("This location is already on your list!");
    }
  };

  const handleRemove = (cityWeather) => {
    const filteredList = cityList.filter(
      (data) => data.resolvedAddress !== cityWeather.resolvedAddress
    );
    setCityList(filteredList);
    localStorage.setItem("weatherData", JSON.stringify(filteredList));
  };

  const handleSelect = (cityWeather) => {
    console.log("City selected");
    setSelectedWeather(cityWeather);
  };

  return (
    <div className="weather-app-wrapper">
      <h1>What's the weather today?</h1>
      <CityForm getCity={getCity} />
      <WeatherBox weather={selectedWeather} handleAddCity={handleAddCity} />
      <List
        cityList={cityList}
        handleRemove={handleRemove}
        handleSelect={handleSelect}
      />
    </div>
  );
}
