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

const BackgroundImage = () => {

  // create a new state (weatherImg) to save the image
  const [weatherImg, setWeatherImg] = useState(zero); // image 'one' by default

  // change background image to match current weather conditions
  // using backgroundImage as opposed to img element (see notebook)
  useEffect(() => {
    if (weather?.weather) {
      // 1. confirm if the weather object has a property called weather
      // 2. it has to be confirmed before running other the if statements
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
    <div
      className='container-0' style={{
        backgroundImage: `url(${weatherImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
      }}>
    </div>
  )
}

export default BackgroundImage

// import { formatToLocalTime } from '../services/weatherService'
// import background from "../img/default-image.jpg";

// const bgImage = [
//     "",
//     "'url(../img/thunderstorm.jpg)'",
//     "'url(../img/shower-rain.jpg)'",
//     "'url(../img/rain.jpg)'",
//     "'url(../img/snow.jpg)'",
//     "'url(../img/fog.jpg)'",
//     "'url(../img/clear-sky.jpg)'",
//     "'url(../img/few-clouds.jpg)'",
//     "'url(../img/scattered-clouds.jpg)'",
//     "'url(../img/broken-clouds.jpg)'",
// ]

// function BackgroundImage({ weather: { id } }) {

//     console.log(id)
//     if (id >= 200 && id <= 232) {
//         this.setState({
//             backgroundStyle: {
//                 backgroundImage: bgImage[1]
//             }
//         });
//     } else if (id >= 300 && id <= 321 || id >= 520 && id <= 531) {
//         this.setState({
//             backgroundStyle: {
//                 backgroundImage: bgImage[2]
//             }
//         });
//     } else if (id >= 500 && id <= 504) {
//         this.setState({
//             backgroundStyle: {
//                 backgroundImage: bgImage[3]
//             }
//         });
//     } else if (id >= 600 && id <= 622 || id == 511) {
//         this.setState({
//             backgroundStyle: {
//                 backgroundImage: bgImage[4]
//             }
//         });
//     } else if (id >= 701 && id <= 781) {
//         this.setState({
//             backgroundStyle: {
//                 backgroundImage: bgImage[5]
//             }
//         });
//     } else if (id == 800) {
//         this.setState({
//             backgroundStyle: {
//                 backgroundImage: bgImage[6]
//             }
//         });
//     } else if (id == 801) {
//         this.setState({
//             backgroundStyle: {
//                 backgroundImage: bgImage[7]
//             }
//         });
//     } else if (id == 802) {
//         this.setState({
//             backgroundStyle: {
//                 backgroundImage: bgImage[8]
//             }
//         });
//     } else {
//         this.setState({
//             backgroundStyle: {
//                 backgroundImage: bgImage[9]
//             }
//         });
//     }
// }
