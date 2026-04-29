import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement , selectCount} from '../slices/CounterSlice';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}
