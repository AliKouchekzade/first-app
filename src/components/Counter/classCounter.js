import React, { Component } from "react";

class ClassCounter extends Component {
  state = {
    num: 0,
    cOOl : 5
  };

  clickHandler = () => {
    this.setState((prevState) => {
      return { num: prevState.num + 1 };
    });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <p>conunt is : {this.state.num}</p>
        <button onClick={this.clickHandler}>click me</button>
      </div>
    );
  }
}

export default ClassCounter;
