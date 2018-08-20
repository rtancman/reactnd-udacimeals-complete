import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <p>Hello world</p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

const mapStateToProps = ({ calendar, food }) => {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
        ? food[calendar[day][meal]]
        : null
        return meals
      }, {})
    })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 