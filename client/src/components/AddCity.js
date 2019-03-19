import React from 'react';

const AddCity = ({ handleSubmit, handleInputChange, newCity }) => {
  return (
    <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <input
        placeholder="Add your favorite city"
        type="text"
        className="shadow border rounded w-3/5 py-2 px-3 text-grey-dark leading-tight"
        onChange={handleInputChange}
        value={newCity}
      />
      <button
        type="submit"
        className="w-1/5 bg-teal hover:bg-teal-dark text-white font-bold py-2 px-3 mx-2 rounded"
      >
        Add City
      </button>
    </form>
  );
};

export default AddCity;
