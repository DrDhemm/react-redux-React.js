import React, { Component } from 'react';
import Name from './Name';
import AddName from './AddName';

class App extends Component {
  state = {
    user: [
      { name: 'Yusril', role: 'rpl', id: 1},
      { name: 'dhiyaul', role: 'tkj', id: 2}
    ]
  }
  addName = (data) => {
    data.id = Math.random()
    let user = [...this.state.user, data]
    this.setState({
      user: user
    })
  }
  handleDelete = (id) => {
    let user = this.state.user.filter(user => {
      return user.id !== id
    })
    this.setState({
      user: user
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hallo</h1>
        <p>Welcome :</p>
        <Name deleteData={this.handleDelete} data={this.state.user}/>
        <AddName addName={this.addName} />
      </div>
    ) 
  }
}

export default App;
