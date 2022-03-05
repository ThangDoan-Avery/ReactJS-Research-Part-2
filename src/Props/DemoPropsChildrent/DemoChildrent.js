import React, { Component } from 'react';

export default class DemoChildrent extends Component {
  render() {
    return (
      <div>
        DemoChildrent
        {this.props.children}
        HEHEHE
      </div>
    );
  }
}
