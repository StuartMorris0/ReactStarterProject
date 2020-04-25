import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from 'redux-store/slices/counterSlice';
import CounterComponent from './Counter.component';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <CounterComponent
      count={count}
      incrementAmount={incrementAmount}
      setIncrementAmount={(value) => setIncrementAmount(value)}
      onIncrementClick={() => dispatch(increment())}
      onDecrementClick={() => dispatch(decrement())}
      onIncrementByAmount={() =>
        dispatch(incrementByAmount(Number(incrementAmount) || 0))
      }
      onIncrementAsync={() =>
        dispatch(incrementAsync(Number(incrementAmount) || 0))
      }
    />
  );
}
