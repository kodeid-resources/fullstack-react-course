import React from 'react';

const Weather = ({ cities, handleSelectCity }) => {
  return (
    <div className="w-1/2 mx-auto flex flex-col justify-center items-center">
      <h2 className="flex-1 my-3 w-full">Current Weather</h2>
      <select
        onChange={handleSelectCity}
        className="flex-1 block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight"
      >
        <option>Select the city</option>
        {cities.length > 0 &&
          cities.map((city) => <option key={city}>{city}</option>)}
      </select>
    </div>
  );
};

export default Weather;
