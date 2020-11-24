import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../../../actions';
export default () => {
  const counter = useSelector(state => state.incrementReducer)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
};