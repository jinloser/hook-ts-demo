import React, { useReducer } from 'react';

type StateType = {
  count: number;
};

type ActionType = {
  type: 'reset' | 'decrement' | 'increment';
};

const initialState = {
  count: 0,
};

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'decrement':
      return { count: state.count - 1 };
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Reducer({ initialCount = 0 }) {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default Reducer;
