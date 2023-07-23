import React, { Component } from "react";

class ClassObject extends Component {
  state = {
    user: { firstName: "", lastName: "" },
  };

  firstNameHandler = (e) => {
    this.setState(preState => {
        return {user : {firstName : e.target.value , lastName : preState.user.lastName}}
    });
  }

  lastNameHandler = (e) => {
    this.setState(preState => {
        return {user : {lastName : e.target.value , firstName : preState.user.firstName}}
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.user.firstName}
            onChange={this.firstNameHandler}
          ></input>
          <input
            type="text"
            value={this.state.user.lastName}
            onChange={this.lastNameHandler}
          ></input>
          <p>my fistName is : {this.state.user.firstName}</p>
          <p> my Last Name is : {this.state.user.lastName}</p>
        </form>
      </div>
    );
  }
}

export default ClassObject;
