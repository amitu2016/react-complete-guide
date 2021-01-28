import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Upadhyay", age: 27},
      {name: "Cena", age: 22},
      {name: "Orton", age: 29}
    ]
  }

  switchNameHandler = () => {
    //console.log('Was Clicked');
    // Dont do this : this.state.persons[0].name = 'Upadhyay';
    this.setState({persons:  [
      {name: "Amit", age: 27},
      {name: "Sumit", age: 22},
      {name: "Ajay", age: 25}
    ] })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name= {this.state.persons[0].name} age={this.state.persons[0].age}  />
        <Person name= {this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Gaming</Person>
        <Person name= {this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
      
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'This is a React Component'));
   }
}

export default App;
