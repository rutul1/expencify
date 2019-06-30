import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Go to home
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        edit
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        help
      </NavLink>
    </div>
  )
}

export default Header
