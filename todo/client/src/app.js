import React from 'react'
import { render } from 'react-dom'

var Todo = React.createClass({
  getInitialState: function(){
    return {
      todos: ['wash up', 'nap', 'get some cheese'],
      age: 30
    }
  },

  render: function(){

    var ager = setTimeout(function(){
      this.setState({
        age:35
      })
    }.bind(this), 2000)
    return(
      <div id = "todolist">
        <p>The busiest ppl at the age of {this.state.age} do that stuff</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
        <h1>Hello</h1>
        <p> I have been in a very bad condition</p>
        <p>{this.props.message}</p>
        <p><strong>Cheese name</strong> {this.props.cheese.name}</p>
        <p><strong>smell</strong> {this.props.cheese.smell}</p>
        <p><strong>price</strong> {this.props.cheese.price}</p>
      </div>
      );
  }
});

var myCheese = {
  name: "Camember",
  smell: "mild",
  price: "2.30"
};

window.onload = () => {
  render(
    <Todo message = "I like cheese" cheese = {myCheese}/>,
    document.getElementById('app')
  )
}
