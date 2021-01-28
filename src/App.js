import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
const [ personState, setPersonState ] = useState({ persons: [
    {name: "Upadhyay", age: 27},
    {name: "Cena", age: 22},
    {name: "Orton", age: 29}
  ]});

  const switchNameHandler = () => {
    //console.log('Was Clicked');
    // Dont do this : personState.persons[0].name = 'Upadhyay';
    setPersonState({persons:  [
      {name: "Amit", age: 27},
      {name: "Sumit", age: 22},
      {name: "Ajay", age: 25}
    ] })
  }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name= {personState.persons[0].name} age={personState.persons[0].age}  />
        <Person name= {personState.persons[1].name} age={personState.persons[1].age} >My Hobbies: Gaming</Person>
        <Person name= {personState.persons[2].name} age={personState.persons[2].age} />
      </div>
      
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'This is a React Component'));

}

export default app;




