import React from 'react'
import ReactDOM from 'react-dom'
import Comp from './Comp'

ReactDOM.render(
  <>
    <Comp content1={<h2>test1</h2>} content2={<h2>test2</h2>}>
      {/* 这么写，意味着会将其作为 props.children 传递给 Comp 组件 */}
      <h2>test</h2>
    </Comp>
    <hr />
    <Comp />
  </>,
  document.getElementById('root')
)
