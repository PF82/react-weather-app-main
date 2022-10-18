import React from 'react'

function TopButtons({ setQuery }) {

  const cities = [
    {
      id: 1,
      title: 'London'
    },
    {
      id: 2,
      title: 'Sydney'
    },
    {
      id: 3,
      title: 'Tokyo'
    },
    {
      id: 4,
      title: 'Toronto'
    },
    {
      id: 5,
      title: 'Paris'
    },
  ]

  return (
    <div className='container-2'>
      {cities.map((city) => (
        <button
          key={city.id}
          className='container-3' onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons