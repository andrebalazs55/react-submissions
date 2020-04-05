import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent'
import ValidationComponent from './ValidationComponent'

class App extends Component {
  state = {
    text: "ba"
  }

  inputChangeHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  removeCharHandler = (index) => {
    const text =this.state.text.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({text: updatedText});
  }
  
  render() {
    let text = [...this.state.text];
    let textArray = text.map((char, index) => {
      return {id: index, char: char};
    })
    
    return (
      <div className="App">
        <input value={this.state.text} onChange={this.inputChangeHandler}></input>
        <ValidationComponent text={this.state.text}></ValidationComponent>
        {textArray.map((text, index) => {
          return <CharComponent 
           click={() => this.removeCharHandler(index)}
           char={text.char}/>
        })}
      </div>
    );
  }
}

export default App;
