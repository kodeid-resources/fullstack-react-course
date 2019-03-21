import React, { useState, useEffect } from 'react';

import AddCity from './components/AddCity.js';
import Weather from './components/Weather.js';
import ShowWeather from './components/ShowWeather.js';

const App = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(city);
  };
  const getCities = () => {
    fetch(`/api/cities`)
      .then((res) => res.json())
      .then((data) => {
        const cities = data.cities.map((r) => r.city_name);
        setCities(cities);
      });
  };

  const addCity = (city) => {
    fetch(`/api/cities`, {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ city })
    })
      .then((res) => res.json())
      .then((data) => {
        getCities();
        setCity('');
      });
  };
  const getWeather = (city) => {
    fetch(`/api/weather/${city}`)
      .then((res) => res.json())
      .then((weather) => {
        setWeather(weather);
      });
  };
  useEffect(() => {
    console.log('useEffect');
    getCities();
  }, []);

  return (
    <div className="container text-center mx-auto my-20 text-grey-darkest">
      <h1 className="my-3 text-grey-darker">My Awesome Weather Dashboard</h1>
      <p>The current weather for your favorite cities!</p>
      <AddCity
        handleSubmit={handleSubmit}
        handleInputChange={(e) => setCity(e.target.value)}
        newCity={city}
      />
      <Weather
        handleSelectCity={(e) => getWeather(e.target.value)}
        cities={cities}
      />
      {weather && <ShowWeather data={weather} />}
    </div>
  );
};

export default App;
