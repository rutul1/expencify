import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Dashboard from '../components/ExpenceDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditPage from '../components/EditPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <Route path="/create" component={AddExpensePage} exact={true} />
          <Route path="/edit" component={EditPage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default AppRouter
