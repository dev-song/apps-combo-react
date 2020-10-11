// Actions
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// Action Creator Functions
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// Initial State
const initialState = {
  number: 0,
  lastCalc: null,
  isMax: false,
  isMin: true,
  lastCalcTime: null
};

// Reducer
export default function counter(state = initialState, action) {
  const MIN = 0;
  const MAX = 9;

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.isMax ? MAX : state.number + 1,
        lastCalc: 'increment',
        isMax: state.number >= MAX - 1 ? true : false,
        isMin: false,
        lastCalcTime: new Date().getTime()
      };
    case DECREMENT:
      return {
        ...state,
        number: state.isMin ? MIN : state.number - 1,
        lastCalc: 'decrement',
        isMax: false,
        isMin: state.number <= MIN + 1 ? true : false,
        lastCalcTime: new Date().getTime()
      };
    default:
      return state;
  }
}