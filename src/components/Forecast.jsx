import React from 'react'
import { iconUrlFromCode } from '../services/weatherService';

function Forecast({ title, items }) {
    console.log(title) // for reference only
    console.log(items) // for reference only
    return (
        <div>
            <div className='container-36'>
                <hr className='container-36-1' />
            </div>
            <div className='container-37'>
                <p className='container-38'>{title}</p>
            </div>

            <div className='container-39'>
                {items.map((item) => (
                    <div className='container-40'>
                        <p className='container-41'>{item.title}</p>
                        <img className='container-42' src={iconUrlFromCode(item.icon)} alt="" />
                        <p className='container-43'>{`${item.temp.toFixed()} °C`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast
