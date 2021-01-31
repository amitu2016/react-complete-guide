import React from "react";
import cssclasses from "./Person.css";


const person = (props) => {
    
  const rnd = Math.random();
  if (rnd > 0.7) {
    //throw new Error('Something Went Wrong');
  }
  return (
    //<div className='Person' style={style}>
    <div className={cssclasses.Person}>
      <p onClick={props.click}>
        I'm a {props.name} and i am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
