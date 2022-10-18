import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from 'react';
import background from "./img/rain.jpg";
import BackgroundImage from "./components/BackgroundImage";

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
      <div id='backgroundimage' className='container-0' style={{ backgroundImage: `url(${background})` }}></div>

      <div>
        <div className='container-1'>
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

          {weather && (
            <div>
              <TimeAndLocation weather={weather} />
              <TemperatureAndDetails weather={weather} />

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
