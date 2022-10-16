import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs() {
    return (
        <div className='container-4'>
            <div className='container-5'>
                <input
                    type="text"
                    className='container-6'
                    placeholder='Search for location...' />
                <UilSearch className='container-7' />
                <UilLocationPoint className='container-8' />
            </div>
            <div className='container-9'>
                <button name='metric' className='container-10'>
                    °C
                </button>
                <p className='container-11'>|</p>
                <button name='imperial' className='container-12'>
                    °F
                </button>
            </div>
        </div>
    )
}

export default Inputs