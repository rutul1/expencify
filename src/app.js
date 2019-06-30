import React from 'react'
import ReactDOM from 'react-dom'
import configerStore from './store/configerStore'
import AppRouter from './routers/AppRoutes'
import { Provider } from 'react-redux'
import { addExpence } from './actions/expences'
import { setTextFilter } from './actions/filter'
import getVisibleExpneses from './selectors/expences'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configerStore()
store.dispatch(addExpence({ description: 'my bill' }))
store.dispatch(setTextFilter('bi'))
const state = store.getState()
// console.log(state)
const visableExpense = getVisibleExpneses(state.expences, state.filters)
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))
