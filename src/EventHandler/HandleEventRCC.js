import React, { Component } from 'react'


export default class HandleEventRCC extends Component {


  showMess = function () {
      alert('hello hello');
  }

  showInfo = function (name) {
    alert('hello ! ' + name)
  }


  render() {
    const handleClick = function () {
        console.log(123);
    }


    return (
      <div className='container'>
          <button id="btnShowMess" onClick={handleClick}>show message</button>
          <button onClick={this.showInfo.bind(this,'Khải')}>Click me</button>

          <button onClick={()=> {
                this.showInfo('Khải');

          }}>Click me!</button>
      </div>
    )
  }
}


