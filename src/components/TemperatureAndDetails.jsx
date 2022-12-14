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
import { iconUrlFromCode } from "../services/weatherService";
import { formatToLocalTime } from "../services/weatherService";

function TemperatureAndDetails({
    weather: {
        details,
        icon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        speed,
        timezone,
        sunset,
        sunrise
    },
}) {
    return (
        <div>
            <div className='container-15'>
                <p className='container-16'>{details}</p>
            </div>

            <div className='container-17'>
                <img className='container-18' src={iconUrlFromCode(icon)} alt="" />
                <p className='container-19'>{`${temp.toFixed()} °C`}</p>
                <div className='container-20'>
                    <div className='container-21'>
                        <UilTemperature className='container-22' />
                        Feels like:
                        <span className='container-23'>{`${feels_like.toFixed()} °C`}</span>
                    </div>
                </div>
                <div className='container-23'>
                    <div className='container-24'>
                        <UilTear className='container-25' />
                        Humidity:
                        <span className='container-26'>{humidity} %</span>
                    </div>
                </div>
                <div className='container-27'>
                    <div className='container-28'>
                        <UilWind className='container-29' />
                        Wind speed:
                        <span className='container-30'>{speed.toFixed()} Km/h</span>
                    </div>
                </div>
            </div>
            <div className="container-31">
                <UilSun />
                <p>Sunrise: <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span></p>
                <p className="container-32">|</p>
                <UilSunset />
                <p>Sunset: <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span></p>
                <p className="container-33">|</p>
                <UilSun />
                <p>High: <span>{`${temp_max.toFixed()} °C`}</span></p>
                <p className="container-34">|</p>
                <UilSun />
                <p>Low: <span>{`${temp_min.toFixed()} °C`}</span></p>
                <p className="container-35">|</p>
            </div>
        </div>
    )
}

export default TemperatureAndDetails