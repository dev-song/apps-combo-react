import React from 'react';

function Counter({ number, lastCalc, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <div className="Counter__container">
        <button
          className="Counter__increment-button"
          onClick={onIncrement}
        >
          +
          </button>
        <h2 className="Counter__number">{number}</h2>
        <button
          className="Counter__decrement-button"
          onClick={onDecrement}
        >
          -
        </button>
      </div>
      <p className="Counter__explanation">
        Count title:
        <span className="Counter__status"> {lastCalc}</span>
      </p>
    </div>
  );
}

export default Counter;
