import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    userName: "Da user"
  }

  inputChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
        userName={this.state.userName}
        changeEvent={this.inputChangeHandler} 
        ></UserInput>
        <UserOutput userName={this.state.userName}></UserOutput>
      </div>
    );
  }
}

export default App;
