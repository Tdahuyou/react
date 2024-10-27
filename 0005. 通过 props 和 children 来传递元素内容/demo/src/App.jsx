/**
 * src/App.jsx
 */
import Comp from './Comp';
function App() {
  return (
    <>
      {/* 这么写，意味着会将其作为 props.children 传递给 Comp 组件 */}
      <Comp>
        <div>children</div>
      </Comp>

      {/* 使用指定的属性名（比如 content1、content2）来传递 */}
      {/* <Comp content1={<div>c1</div>} content2={<div>c2</div>}></Comp> */}

      {/* <hr /> */}
      {/* 使用默认值 */}
      {/* <Comp /> */}
    </>
  );
}

export default App;
