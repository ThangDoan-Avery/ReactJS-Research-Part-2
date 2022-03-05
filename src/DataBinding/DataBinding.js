import React, { Component } from "react";

export default class DataBinding extends Component {
  handleClick = (name) => {
    alert("Hi " + name);
  };
  handleClickMe = () => {
    alert("Hello My Love");
  };
  handleShowMessage = (mes) => {
    console.log("Nice to meet you " + mes);
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <button
            className="btn btn-outline-danger"
            onClick={this.handleClick.bind(this, "Avery")}
          >
            Nhấn vào đây
          </button>
          <button
            className="btn btn-outline-primary ml-3"
            onClick={this.handleClickMe}
          >
            Click me
          </button>
          <button
            className="btn btn-secondary ml-3"
            onClick={() => {
              this.handleShowMessage("Thang");
            }}
          >
            Show message
          </button>
        </div>
      </React.Fragment>
    );
  }
}
