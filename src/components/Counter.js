import React from 'react';

import './Counter.css';

function Counter({ number, lastCalc, isMax, isMin, onIncrement, onDecrement }) {
  const incrementBtn = !isMax
    ?
    <button
      className="Counter__increment-button"
      onClick={onIncrement}
    >
      +
    </button>
    : <div className="Counter__button--hidden" />;
  const decrementBtn = !isMin
    ?
    <button
      className="Counter__decrement-button"
      onClick={onDecrement}
    >
      -
        </button>
    : <div className="Counter__button--hidden" />;

  return (
    <div className="Counter">
      <div className="Counter__container">
        {incrementBtn}
        <h2 className="Counter__number">{number}</h2>
        {decrementBtn}
      </div>
      <p className="Counter__description">
        Count title:
        <span className="Counter__last-calculation"> {lastCalc}</span>
      </p>
    </div>
  );
}

export default Counter;
