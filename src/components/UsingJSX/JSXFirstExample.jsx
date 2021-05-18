// rce SHOT CUT
// it IS helpful as a visual aid when working with UI inside the JavaScript code.
// It also allows React to show more useful error and warning messages.
// Embedding Expressions in JSX
// Babel is a JavaScript Compiler https://babeljs.io/

import React, { Component } from "react";

const name = "This is an example of using JSX";

const element = (
  <div>
    <h1 className="greeting">Hello, {name}</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
);

const user = {
  firtName: "Jason",
  secondName: "Zhuang",
};

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

//you can use JSX inside of if statements and for loops,
//assign it to variables, accept it as arguments, and return it from functions:
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

export class JSXFirstExample extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      fieldA: "",
    };
  }

  render() {
    return (
      <div>
        {element}
        <h4>
          You can put any valid JavaScript expression inside the curly braces in
          JSX.
        </h4>
        <span>2+2 = {2 + 2}</span>
        <br />
        <span>user.firstName = {user.firtName}</span>
        <br />
        <span>formatName(user) = {formatName({ user })}</span>
        <br />
        <span>
          Since JSX is closer to JavaScript than to HTML, React DOM uses
          camelCase property naming convention instead of HTML attribute names.
          For example, class becomes className in JSX, and tabindex becomes
          tabIndex.
        </span>
        {getGreeting({ user })}
      </div>
    );
  }
}



export default JSXFirstExample;
