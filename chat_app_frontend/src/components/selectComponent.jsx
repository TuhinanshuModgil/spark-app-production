import React from 'react'

import React from 'react';

function SelectComponent({ options, defaultOption, setSelectedOption }) {
  return (
    <div className="p-4">
      <select
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        value={defaultOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectComponent;
