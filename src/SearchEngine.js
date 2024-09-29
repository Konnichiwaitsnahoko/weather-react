import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("null");
  let [loaded, loadedWeather] = useState("false");

  function showTemperature(response) {
    loadedWeather("true");
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        onChange={updateCity}
        placeholder="Enter a city..."></input>
      <input type="submit" placeholder="Search"></input>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {weather.temperature}℃</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
