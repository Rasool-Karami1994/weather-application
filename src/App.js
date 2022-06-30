import { useState } from "react";
import "./App.css";
import { MdLocationPin } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { WiCloudy } from "react-icons/wi";

function App() {
  const apiKey = "5cc372fcccfe46d68db122001222906";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (e) => {
    if (e.key === "Enter") {
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        });
    }
  };

  return (
    <div
      className={
        typeof weatherData.location === "undefined" ||
        weatherData.current.is_day === 1
          ? "App"
          : "App-nightmode"
      }
    >
      <input
        type="text"
        placeholder="Enter Your City ..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      ></input>
      {typeof weatherData.location === "undefined" ? (
        <></>
      ) : (
        <div className="data-container">
          <p className="city">
            <MdLocationPin />
            {weatherData.location.name}
          </p>
          <p className="condition"> {weatherData.current.condition.text}</p>
          <p className="temp">
            {weatherData.current.condition.text === "Sunny" ? (
              <IoMdSunny className="icon" />
            ) : (
              <WiCloudy />
            )}
            {weatherData.current.temp_c}
            <span>&deg;C</span>
          </p>

          <div className="details-box">
            <div>
              <WiStrongWind className="icon" />
              <p>Wind Speed</p>
              <p>{weatherData.current.wind_kph} kph</p>
            </div>
            <div>
              <WiHumidity className="icon" />
              <p>Humidity</p>
              <p>{weatherData.current.humidity} %</p>
            </div>
            <div>
              <MdOutlineVisibility className="icon" />
              <p>Visibility</p>
              <p>{weatherData.current.vis_km} Km</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
