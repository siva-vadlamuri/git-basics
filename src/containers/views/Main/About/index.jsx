import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from '../../../../actions';
export default () => {
  const counter = useSelector(state => state.testReducer)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>About Page</h1>
      <h2>Counter {counter}</h2>
      <button onClick={() => dispatch(incrementCount())}>+</button>
      <button onClick={() => dispatch(decrementCount())}>-</button>
    </div>
  )
}