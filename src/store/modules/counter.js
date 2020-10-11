// Actions
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// Action Creator Functions
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// Initial State
const initialState = {
  number: 0,
  lastCalc: null
};

// Reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
        lastCalc: 'increment'
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
        lastCalc: 'decrement'
      };
    default:
      return state;
  }
}