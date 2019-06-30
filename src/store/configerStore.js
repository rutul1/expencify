import { createStore, combineReducers } from 'redux'
import expenceReducer from '../reducers/expneces'
import filterReducer from '../reducers/filter'

export default () => {
  return createStore(
    combineReducers({
      expences: expenceReducer,
      filters: filterReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
}
