import PropTypes from 'prop-types';
import './Comp.css';

export default function Comp(props) {
  console.log(props);
  return (
    <div className='comp'>
      {/*
        props.children 是父组件传递过来的 react 元素内容
        类似于 vue 中的默认插槽
      */}
      <div>
        <p>props.children:</p>
        {props.children}
      </div>
      {/*
        由于传递过来的 react 元素内容，本质上是一个对象类型。
        我们可以通过检查 props.children 是否有值来判断是否传递了内容。
        如果父组件没有传递内容的话，我们可以自定义默认的内容。

        下面这种写法，相当于给 props.children 赋值一个默认值 <div>default content</div>
      */}
      <div>
        <p>props.children【如果没有传递，则展示默认的 props.children】: </p>
        {props.children || <div>default content</div>}
      </div>
      {/*
        传递元素内容，本质上其实就是传递 React.createElement() 的返回值。
        React.createElement() 返回的是一个 JS 对象。

        元素内容（对象）的传递是非常灵活的
        不仅仅可以通过 props.children 来接收传递过来的内容，还可以通过 props.xxx 属性来接收传递过来的内容。
      */}
      <div>
        <p>props.content1:</p>
        {props.content1}
      </div>
      <div>
        <p>props.content2:</p>
        {props.content2}
      </div>
    </div>
  );
}

// 定义 propTypes
Comp.propTypes = {
  children: PropTypes.node, // PropTypes.node 表示可以是任何可以渲染的内容
  content1: PropTypes.node,
  content2: PropTypes.node,
};

// 定义 defaultProps
Comp.defaultProps = {
  content1: <div>111</div>,
  content2: <div>222</div>,
};