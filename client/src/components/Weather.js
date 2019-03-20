import React from 'react';

const Weather = ({ cities }) => {
  console.log(cities);
  return (
    <div className="w-full mx-auto flex justify-center items-center">
      <h2 className="my-3 w-full">Current Weather</h2>
      <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight">
        {cities.length > 0 &&
          cities.map((city) => <option key={city}>{city}</option>)}
      </select>
    </div>
  );
};

export default Weather;
