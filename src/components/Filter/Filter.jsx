import React from 'react';

export const Filter = ({ filterValue, inputFilterData }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={filterValue} onChange={inputFilterData} />
      </label>
    </div>
  );
};
