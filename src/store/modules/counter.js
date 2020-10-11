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
  isMin: true
};

// Reducer
export default function counter(state = initialState, action) {
  const MIN = 0;
  const MAX = 9;

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.isMax ? state.number : state.number + 1,
        lastCalc: 'increment',
        isMax: state.number >= MAX - 1 ? true : false,
        isMin: false
      };
    case DECREMENT:
      return {
        ...state,
        number: state.isMin ? state.number : state.number - 1,
        lastCalc: 'decrement',
        isMax: false,
        isMin: state.number <= MIN + 1 ? true : false
      };
    default:
      return state;
  }
}