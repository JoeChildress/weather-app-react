import { useState } from "react";

export default function CityForm({ getCity }) {
  const [city, setCity] = useState("");

  const handleChange = (ev) => {
    if (ev !== "") {
      setCity(ev.target.value.trim());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity("");
    if (city === "") {
      alert("Enter a city");
      return;
    }
    getCity(city);
  };

  return (
    <form className="weather-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Enter a location"
        value={city}
      />
      <button type="submit">Find It</button>
    </form>
  );
}
