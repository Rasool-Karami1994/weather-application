import API from "./WeatherAPI";
import { MdLocationPin } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { WiCloudy } from "react-icons/wi";

import { useEffect, useRef, useState } from "react";
const AppContainer = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const formHandler = (e) => {
    e.preventDefault();
    getWeather();
    console.log(weatherData);
  };
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const [isShow, setIsShow] = useState(false);

  const getWeather = (e) => {
    if (city) {
      fetch(`${API.base}weather?q=${city}&units=metric&APPID=${API.key}`)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setIsShow(true);
        });
    }
  };

  return (
    <>
      <h1 className="header">
        weather<span className="header-bold">App</span>
      </h1>
      <div className="main-box">
        {!isShow ? (
          <form onSubmit={formHandler}>
            <input
              type="text"
              placeholder="Enter your city ..."
              onChange={(e) => setCity(e.target.value)}
              value={city}
              ref={inputRef}
            ></input>

            <button type="submit" onClick={formHandler}>
              Search
            </button>
          </form>
        ) : (
          <section className="resault-container">
            <div className="main-section">
              {!weatherData ? (
                <p>Loading ...</p>
              ) : (
                <>
                  <p className="city">
                    <MdLocationPin />
                    {weatherData.name}
                  </p>
                  <p className="icon">
                    {weatherData.weather[0].main === "Clear" ? (
                      <IoMdSunny />
                    ) : (
                      <WiCloudy />
                    )}
                  </p>
                  <p className="temp">
                    {Math.round(weatherData.main.temp)}
                    <span>&deg;C</span>
                  </p>
                  <p className="condition"> {weatherData.weather[0].main}</p>
                </>
              )}
            </div>
            <div className="details-section">
              <div className="details-section-first">
                <p>Wind Speed</p>
                <p>Humidity</p>
                <p>Visibility</p>
              </div>
              <div className="details-section-second">
                <p>{weatherData.wind.speed} km/h</p>
                <p>{weatherData.main.humidity} %</p>
                <p>{weatherData.visibility / 1000} Km</p>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default AppContainer;
