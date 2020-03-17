import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
    ]
  }
  deleteTodos = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    }
    )
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    const newTodo = [...this.state.todos, todo]
    this.setState({
      todos: newTodo
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's App</h1>
        <Todos dataTodos={this.state.todos} deleteTodos={this.deleteTodos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
