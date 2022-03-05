import React, { Component } from 'react'
import ExerciseCarStore from '../ExerciseCarStore/ExerciseCarStore'
import DemoChildren from './DemoChildren'

export default class DemoPropsChildren extends Component {
  render() {
    return (
      <div>
          <h3>Demo về truyền props children</h3>
         <DemoChildren>
             <p>hello cybersoft</p>
             <ExerciseCarStore />
         </DemoChildren>
      </div>
    )
  }
}
