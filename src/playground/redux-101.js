import { createStore } from 'redux'

const incrementCount = (payload = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof payload.incrementBy === Number ? payload.incrementBy : 1,
})

const decrementCount = ({ decrementBY = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBY,
})

const sortByAmmount = () => ({})

const setCount = ({ count } = {}) => ({ type: 'SET', count })

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,
      }
    case 'DECREMENT':
      const decrementBY =
        typeof action.decrementBY === 'number' ? action.decrementBY : 1
      return {
        count: state.count - decrementBY,
      }
    case 'SET':
      const setCount =
        typeof action.count === 'number' ? action.count : state.count
      return {
        count: setCount,
      }
    case 'RESET':
      return {
        count: 0,
      }
    default:
      return state
  }
}
const store = createStore(countReducer)

store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch({ type: 'INCREMENT', incrementBy: 5 })
store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(decrementCount({ decrementBY: 2 }))
store.dispatch(setCount({ count: 100 }))
store.dispatch(sortByAmmount())
// store.dispatch({ type: 'RESET' })
// store.dispatch({ type: 'DECREMENT', decrementBY: 5 })
// store.dispatch({ type: 'SET', count: 101 })
