import React from 'react'

function Forecast({title}) {
    return (
        <div>
            <div className='container-36'>
                <p className='container-37'>{title}</p>
            </div>
            <hr className='container-38' />

            <div className='container-39'>
                <div className='container-40'>
                    <p className='container-41'>04:30 PM</p>
                    <img className='container-42' src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
                    <p className='container-43'>22°C</p>
                </div>
            </div>
        </div>
    )
}

export default Forecast
