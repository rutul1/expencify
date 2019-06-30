const defaultExpenceState = []

const expenceReducer = (state = defaultExpenceState, action) => {
  // console.log(action)
  switch (action.type) {
    case 'ADD_EXPENCE':
      return [...state, action.expence]
    case 'REMOVE_EXPENCE':
      return state.filter(expence => expence.id !== action.id)
    case 'EDIT_EXPENCE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}
export default expenceReducer
