import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 1,
      object: {
        number: 1,
      },
    };
    console.log('constructor');
  }

  static getDerivedStateFromProps(newProps, currentState) {
    //Nhận vào props mới trước khi render và state hiện tại
    console.log('getDerivedStateFromProps');

    return currentState;
  }

  shouldComponentUpdate(newProps, newState) {
    //shouldComponentUpdate: Quyết định render hoặc không render lại component
    console.log('shouldComponentUpdate');

    console.log('this.state', this.state);
    console.log('newState', newState);

    return true;
  }

  render() {
    console.log('render');
    return (
      <div className='container'>
        <h3>Number : {this.state.object.number}</h3>
        <h3>Like: {this.state.like}</h3>
        <button
          className='btn btn-success'
          onClick={() => {
            let newObject = { ...this.state.object };
            newObject.number += 1;
            this.setState({
              object: newObject,
            });
          }}
        >
          +
        </button>
        <hr />
        <button
          className='btn btn-danger'
          onClick={() => {
            this.setState({
              like: this.state.like + 1,
            });
          }}
        >
          like
        </button>
        <hr />
        <h3>Child component</h3>
        {this.state.object.number > 3 ? (
          ''
        ) : (
          <ChildComponent object={this.state.object} />
        )}
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
}
