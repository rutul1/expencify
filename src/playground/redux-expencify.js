import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'
const demoState = {
  expence: [
    {
      id: 'ids11',
      description: 'my rent',
      note: 'this is amout my first expence',
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  },
}
const defaultExpenceState = []
const expenceReducer = (state = defaultExpenceState, action) => {
  switch (action.type) {
    case 'ADD_EXPENCE':
      return [...state, action.expence]
    case 'REMOVE_EXPENCE':
      return state.filter(expence => expence.id !== action.id)
    default:
      return state
  }
}
const defaultfilterState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
}
const filterReducer = (state = defaultfilterState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    expence: expenceReducer,
    filters: filterReducer,
  }),
)

const addExpence = ({ description, note, amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENCE',
  expence: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
})

const removeExpence = ({ id } = {}) => ({ type: 'REMOVE_EXPENCE', id })

store.subscribe(() => {
  console.log(store.getState())
})

const expenceOne = store.dispatch(
  addExpence({
    description: 'rent',
    note: 'home rent',
    amount: 500,
  }),
)

store.dispatch(
  addExpence({
    description: 'loan',
    note: 'car loan',
    amount: 50,
  }),
)
store.dispatch(removeExpence({ id: expenceOne.expence.id }))
