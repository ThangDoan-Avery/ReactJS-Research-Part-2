import React, { Component } from 'react';
import DemoChildrent from './DemoChildrent';

export default class DemoPropsChildrent extends Component {
  render() {
    return (
      <div>
        DemoPropsChildrent
        <DemoChildrent>
          <p>Test nha</p>
        </DemoChildrent>
      </div>
    );
  }
}
