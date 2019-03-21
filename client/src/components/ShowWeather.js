import React from 'react';

const ShowWeather = ({ data }) => {
  return (
    <div className="flex flex-col my-6">
      <h2 className="flex-1">{data.name}</h2>
      <div className="flex-1">
        <img
          src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt="weather icon"
        />
      </div>
      <div className="flex-1">
        <span>{data.weather[0].main}</span> &nbsp;
        <span>{Math.floor(data.main.temp)}&deg;F</span>
      </div>
    </div>
  );
};

export default ShowWeather;
