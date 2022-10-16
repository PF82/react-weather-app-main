// react-weather-app-m openweather API key
const API_KEY = "9c61d7516f674d61ce67583b5f1d3f23";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// function to call APIs (2.5/onecall and 2.5/weather)
// searchParams is an object which will convert the rest of the link of url
const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    console.log(url)
    return fetch(url)
        .then((res) => res.json())
    // .then((data) => data); instead...
};

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data

    const { main: details, icon } = weather[0]

    return { lan, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed };
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)

    return formatCurrentWeather
}

export default getFormattedWeatherData;




