const fetchWeather = async (city) => {
  console.log("feching weather for :", city);
  const key = "xxxxxxxxxxx";
  const baseUrl =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

  const resp = await fetch(`${baseUrl}${city}?key=${key}`);
  return await resp.json();
};

const convertData = (weather) => {
  const weatherData = {
    resolvedAddress: weather?.resolvedAddress || "No location selected",
    description: weather?.description || "-",
    conditions: weather?.currentConditions?.conditions || "-",
    temp: weather?.currentConditions?.temp
      ? weather.currentConditions.temp + "°f"
      : "-",
    cloudcover: weather?.currentConditions?.cloudcover || "-",
    windspeed: weather?.currentConditions?.windspeed
      ? weather?.currentConditions?.windspeed + " mph"
      : "-"
  };

  return weatherData;
};

module.exports = { fetchWeather, convertData };
