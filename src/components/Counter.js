import React from 'react';

function Counter({ number, lastCalc, isMax, isMin, onIncrement, onDecrement }) {
  const incrementBtn = !isMax
    ?
    <button
      className="Counter__increment-button"
      onClick={onIncrement}
    >
      +
    </button>
    : null;
  const decrementBtn = !isMin
    ?
    <button
      className="Counter__decrement-button"
      onClick={onDecrement}
    >
      -
        </button>
    : null;

  return (
    <div className="Counter">
      <div className="Counter__container">
        {incrementBtn}
        <h2 className="Counter__number">{number}</h2>
        {decrementBtn}
      </div>
      <p className="Counter__explanation">
        Count title:
        <span className="Counter__status"> {lastCalc}</span>
      </p>
    </div>
  );
}

export default Counter;
