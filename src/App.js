import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from "./services/weatherService";

function App() {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({q: "london" });
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="container-1">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />

      <Forecast title="hourly forecast" />
      <Forecast title="dayly forecast" />
    </div>
  );
}

export default App;
