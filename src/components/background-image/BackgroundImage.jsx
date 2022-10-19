import React from 'react'
// import { formatToLocalTime } from '../services/weatherService'

// import background from "../img/default-image.jpg";

const bgImage = [
    "",
    "'url(../img/thunderstorm.jpg)'",
    "'url(../img/shower-rain.jpg)'",
    "'url(../img/rain.jpg)'",
    "'url(../img/snow.jpg)'",
    "'url(../img/fog.jpg)'",
    "'url(../img/clear-sky.jpg)'",
    "'url(../img/few-clouds.jpg)'",
    "'url(../img/scattered-clouds.jpg)'",
    "'url(../img/broken-clouds.jpg)'",
]

function BackgroundImage({ weather: { id } }) {

    console.log(id)
    if (id >= 200 && id <= 232) {
        this.setState({
            backgroundStyle: {
                backgroundImage: bgImage[1]
            }
        });
    } else if (id >= 300 && id <= 321 || id >= 520 && id <= 531) {
        this.setState({
            backgroundStyle: {
                backgroundImage: bgImage[2]
            }
        });
    } else if (id >= 500 && id <= 504) {
        this.setState({
            backgroundStyle: {
                backgroundImage: bgImage[3]
            }
        });
    } else if (id >= 600 && id <= 622 || id == 511) {
        this.setState({
            backgroundStyle: {
                backgroundImage: bgImage[4]
            }
        });
    } else if (id >= 701 && id <= 781) {
        this.setState({
            backgroundStyle: {
                backgroundImage: bgImage[5]
            }
        });
    } else if (id == 800) {
        this.setState({
            backgroundStyle: {
                backgroundImage: bgImage[6]
            }
        });
    } else if (id == 801) {
        this.setState({
            backgroundStyle: {
                backgroundImage: bgImage[7]
            }
        });
    } else if (id == 802) {
        this.setState({
            backgroundStyle: {
                backgroundImage: bgImage[8]
            }
        });
    } else {
        this.setState({
            backgroundStyle: {
                backgroundImage: bgImage[9]
            }
        });
    }
}

export default BackgroundImage