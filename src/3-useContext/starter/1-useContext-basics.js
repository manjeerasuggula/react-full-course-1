import React from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <div>
      <h1>useContext Parent component</h1>
      <ChildComponent/>
    </div>
  )
}

export default ParentComponent;
