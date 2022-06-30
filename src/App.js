import { useState } from "react";
import "./App.css";
import { MdLocationPin } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { WiCloudy } from "react-icons/wi";
import API from "./WeatherAPI";
function App() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");

  const getWeather = (e) => {
    if (e.key === "Enter") {
      fetch(`${API.base}weather?q=${city}&units=metric&APPID=${API.key}`)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        });
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter Your City ..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      ></input>
      {typeof weatherData.sys === "undefined" ? (
        <></>
      ) : (
        <div className="data-container">
          <p className="city">
            <MdLocationPin />
            {weatherData.name}
          </p>
          <p className="condition"> {weatherData.weather[0].main}</p>
          <p className="temp">
            {weatherData.weather[0].main === "Clear" ? (
              <IoMdSunny className="icon" />
            ) : (
              <WiCloudy />
            )}
            {weatherData.main.temp}
            <span>&deg;C</span>
          </p>

          <div className="details-box">
            <div>
              <WiStrongWind className="icon" />
              <p>Wind Speed</p>
              <p>{weatherData.wind.speed} kph</p>
            </div>
            <div>
              <WiHumidity className="icon" />
              <p>Humidity</p>
              <p>{weatherData.main.humidity} %</p>
            </div>
            <div>
              <MdOutlineVisibility className="icon" />
              <p>Visibility</p>
              <p>{weatherData.visibility} Km</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
