import React from "react";
import cssclasses from "./Cockpit.css";

const cockpit = (props) => {
  const classes = [];
  let btnClass = "";
  if (props.Showpersons) {
    btnClass = cssclasses.Red;
  }

  if (props.persons.length <= 2) {
    classes.push(cssclasses.red); //classes =['red']
  }
  if (props.persons.length <= 1) {
    classes.push(cssclasses.bold); //classes = [''red, 'bold']
  }

  return (
    <div className={cssclasses.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
