import React from 'react'
import ReactDOM from 'react-dom'

class First extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'rutul',
      age: 27,
      date: new Date(),
    }
    // this.state.date = new Date()
    console.log(this.state)
  }
  componentDidMount() {
    this.state.name = 'raj'
    this.setState((state, props) => {
      const currentState = { ...state }
      if (currentState.name != 'raj') {
        currentState.name = 'rahul'
      }
      return currentState
    })
  }
  render() {
    return (
      <div>
        <h1>Name: {this.state.name} </h1>
        <p>Date: {this.state.date.toLocaleDateString()}</p>
      </div>
    )
  }
}

ReactDOM.render(<First />, document.getElementById('app'))
