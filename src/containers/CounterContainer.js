import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';

class CounterContainer extends React.Component {
  handleIncrement = () => {
    if (!this.isProperFrequency()) return;
    this.props.increment();
  };

  handleDecrement = () => {
    if (!this.isProperFrequency()) return;
    this.props.decrement();
  };

  isProperFrequency = () => {
    const FREQUENCY_LIMIT = 1000;
    const IS_PROPER_FREQUENCY = new Date().getTime() - this.props.lastCalcTime >= FREQUENCY_LIMIT
    if (!IS_PROPER_FREQUENCY) {
      console.log('You clicked too fast! Click is ignored.');
    }

    return IS_PROPER_FREQUENCY;
  }

  render() {
    const { number, lastCalc, isMax, isMin } = this.props;

    return (
      <Counter
        number={number}
        lastCalc={lastCalc}
        isMax={isMax}
        isMin={isMin}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  number: counter.number,
  lastCalc: counter.lastCalc,
  isMax: counter.isMax,
  isMin: counter.isMin,
  lastCalcTime: counter.lastCalcTime
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);