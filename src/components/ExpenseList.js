import React from 'react'
import { connect } from 'react-redux'
import ExpenceListItem from './ExpenceListItems'

const List = props => (
  <div>
    <h1>List of Expense</h1>

    {props.expenses.map(item => {
      return <ExpenceListItem key={item.id} {...item} />
    })}
  </div>
)

const mapStateToProps = state => {
  return {
    expenses: state.expences,
  }
}
const ConectedExpenceList = connect(mapStateToProps)(List)

export default ConectedExpenceList
