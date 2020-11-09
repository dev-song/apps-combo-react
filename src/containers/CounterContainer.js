import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';

const INC = 'inc';
const DEC = 'dec';

class CounterContainer extends React.Component {
  handleIncrement = () => {
    if (!this.checkProperFrequency(INC)) return;
    this.props.increment();
  };

  handleDecrement = () => {
    if (!this.checkProperFrequency(DEC)) return;
    this.props.decrement();
  };

  checkProperFrequency = type => {
    const FREQUENCY_LIMIT = 1000;
    let isProperFrequency;
    let lastCalcTime;
    if (type === INC) lastCalcTime = this.props.lastPlusTime;
    if (type === DEC) lastCalcTime = this.props.lastMinusTime;

    isProperFrequency = new Date().getTime() - lastCalcTime >= FREQUENCY_LIMIT;
    if (!isProperFrequency) {
      console.log('You clicked too fast! Click is ignored.');
    }

    return isProperFrequency;
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
  lastPlusTime: counter.lastPlusTime,
  lastMinusTime: counter.lastMinusTime
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);