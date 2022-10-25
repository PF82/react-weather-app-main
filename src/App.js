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

import zero from '../src/img/default-image.jpg';
import one from '../src/img/thunderstorm.jpg';
import two from '../src/img/shower-rain.jpg';
import three from '../src/img/rain.jpg';
import four from '../src/img/snow.jpg';
import five from '../src/img/fog.jpg';
import six from '../src/img/clear-sky.jpg';
import seven from '../src/img/few-clouds.jpg';
import eight from '../src/img/scattered-clouds.jpg';
import nine from '../src/img/broken-clouds.jpg';

function App() {

  const [query, setQuery] = useState({ q: 'porto' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)
  // create a new state (weatherImg) to save the image
  const [weatherImg, setWeatherImg] = useState(zero); // image 'one' by default

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  // const formatBackground = () => {
  //   if (!weather) return 'rgb(0, 119, 255)';
  //   // conditional (ternary) operator; used as an alternative to an if...else statement
  //   const threshold = units === "metric" ? 20 : 60; // if units is equal to metric the threshold is going to be 20, otherwise 60

  //   if (weather.temp <= threshold) return 'rgb(0, 255, 234)';

  //   return 'rgba(255, 128, 0, 0.788)';
  // }

  // change background image to match current weather conditions
  // using backgroundImage as opposed to img element (see notebook)
  useEffect(() => {
    if (weather?.weather) {
      // 1. confirm if the weather object has a property called weather
      // 2. it has to be confirmed before running the other if statements
      // 3. for example, if the weather obj is undefined, when it starts searching for weather.weather[0]
      // it's like searching undefined property weather and then it crashes

      const id = weather?.weather[0]?.id;

      if (id >= 200 && id <= 232) {
        // setWeatherImg = one; or
        setWeatherImg(one);
      } else if ((id >= 300 && id <= 321) || (id >= 520 && id <= 531)) {
        setWeatherImg(two);
      } else if (id >= 500 && id <= 504) {
        setWeatherImg(three);
      } else if ((id >= 600 && id <= 622) || (id === 511)) {
        setWeatherImg(four);
      } else if (id >= 701 && id <= 781) {
        setWeatherImg(five);
      } else if (id === 800) {
        setWeatherImg(six);
      } else if (id === 801) {
        setWeatherImg(seven);
      } else if (id === 802) {
        setWeatherImg(eight);
        // } else if (id === 803 && id === 804) {
        //   setWeatherImg(nine);
      } else {
        setWeatherImg(nine);
      }
    }
  }, [weather]); // here the useEffect passes a 'depencies' array
  // each time the 'weather' state changes, the useEffect runs again, in other words,
  // the useEffect hook only runs when its 'dependies' change

  return (
    <div className='container-0' style={{
      backgroundImage: `url(${weatherImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }}>

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
