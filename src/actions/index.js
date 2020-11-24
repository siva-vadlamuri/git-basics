export const increment = () => {
  return {
    type: 'INCREMENT',
    payload: 5
  }
}
export const decrement = () => {
  return {
    type: 'DECREMENT',
    payload: 5
  }
}

export const incrementCount = () => {
  return {
    type: 'ONE'
  }
}
export const decrementCount = () => {
  return {
    type: 'TWO'
  }
}