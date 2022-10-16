import React from "react";
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
// import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails() {
    return (
        <div>
            <div className='container-15'>
                <p className='container-16'>Cloudy</p>
            </div>

            <div className='container-17'>
                <img className='container-18' src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
                <p className='container-19'>34°C</p>
                <div className='container-20'>
                    <div className='container-21'>
                        <UilTemperature className='container-22' />
                        Feels like:
                        <span className='container-23'>32°C</span>
                    </div>
                </div>
                <div className='container-23'>
                    <div className='container-24'>
                        <UilTear className='container-25' />
                        Humidity:
                        <span className='container-26'>65%</span>
                    </div>
                </div>
                <div className='container-27'>
                    <div className='container-28'>
                        <UilWind className='container-29' />
                        Wind speed:
                        <span className='container-30'>11Km/h</span>
                    </div>
                </div>
            </div>
            <div className="container-31">
                <UilSun />
                <p>Sunrise: <span>06:45 AM</span></p>
                <p className="container-32">|</p>
                <UilSunset />
                <p>Sunset: <span>07:35 PM</span></p>
                <p className="container-33">|</p>
                <UilSun />
                <p>High: <span>45°C</span></p>
                <p className="container-34">|</p>
                <UilSun />
                <p>Low: <span>40°C</span></p>
                <p className="container-35">|</p>
            </div>
        </div>
    )
}

export default TemperatureAndDetails