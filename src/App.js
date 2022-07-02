import "./App.css";
// import { MdLocationPin } from "react-icons/md";
// import { IoMdSunny } from "react-icons/io";
// import { WiStrongWind } from "react-icons/wi";
// import { WiHumidity } from "react-icons/wi";
// import { MdOutlineVisibility } from "react-icons/md";
// import { WiCloudy } from "react-icons/wi";
import AppContainer from "./components/AppContainer";
function App() {
  return (
    <div className="App">
      <AppContainer />
      {/*
      
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
              <p>{weatherData.visibility / 1000} Km</p>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default App;
