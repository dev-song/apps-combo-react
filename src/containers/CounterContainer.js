import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';

class CounterContainer extends React.Component {
  handleIncrement = () => {
    this.props.increment();
  };

  handleDecrement = () => {
    this.props.decrement();
  };

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
  isMin: counter.isMin
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);