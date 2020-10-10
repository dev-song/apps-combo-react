import React from 'react';

function Grid() {
  return (
    <div className='Grid'>
      <input
        className='Grid-filter'
        type='text'
        placeholder='Please enter keywords'
      />
      <table className='Grid-table'>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>weight</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
}

export default Grid;
