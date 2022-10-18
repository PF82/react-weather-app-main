import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs({ setQuery, units, setUnits }) {
    const [city, setCity] = useState("");
    const handleSearchClick = () => {
        if (city !== "") setQuery({ q: city })
    }
    return (
        <div className='container-4'>
            <div className='container-5'>
                <input
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type="text"
                    className='container-6'
                    placeholder='Search for location...' />
                <UilSearch className='container-7'
                    onClick={handleSearchClick} />
                <UilLocationPoint className='container-8' />
            </div>
            <div className='container-9'>
                <button name='metric' className='container-10'>
                    °C
                </button>
                <p className='container-10-1'>|</p>
                <button name='imperial' className='container-10'>
                    °F
                </button>
            </div>
        </div>
    )
}

export default Inputs