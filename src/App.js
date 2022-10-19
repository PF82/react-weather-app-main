import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/top-buttons/TopButtons';
import Inputs from './components/inputs/Inputs';
import TimeAndLocation from './components/time-and-location/TimeAndLocation';
import TemperatureAndDetails from './components/temperature-and-details/TemperatureAndDetails';
import Forecast from './components/forecast/Forecast';
// import BackgroundImage from './components/BackgroundImage';
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from 'react';
import background from "./img/rain.jpg";

function App() {

  const [query, setQuery] = useState({ q: 'porto' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  // const formatBackground = () => {
  //   if (!weather) return "'rgb(0, 119, 255)'";
  //   // conditional (ternary) operator; used as an alternative to an if...else statement
  //   const threshold = units === "metric" ? 20 : 60; // if units is equal to metric the threshold is going to be 20, otherwise 60

  //   if (weather.temp <= threshold) return 'rgb(0, 255, 234)';

  //   return 'rgba(255, 128, 0, 0.788)';
  // }

  return (
    <div>
      <div className='container-0' style={{ backgroundImage: `url(${background})` }}></div>

      <div>
        <div className='container-1'>
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

          {weather && (
            <div>
              <TimeAndLocation weather={weather} />
              <TemperatureAndDetails weather={weather} />
              {/* <BackgroundImage weather={weather} /> */}

              <Forecast title="hourly forecast" items={weather.hourly} />
              <Forecast title="dayly forecast" items={weather.daily} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
