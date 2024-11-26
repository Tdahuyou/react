# [0022. 函数组件概述](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md)

<!-- region:toc -->
- [📝 Summary](#-summary)
- [📒 函数组件的基本形式](#-函数组件的基本形式)
- [📒 使用箭头函数来定义组件](#-使用箭头函数来定义组件)
- [📒 默认 Props](#-默认-props)
- [📒 使用 Hooks](#-使用-hooks)
<!-- endregion:toc -->

## 📝 Summary

- 函数组件是 React 中定义组件的一种方式，它 **使用 JavaScript 函数来创建**。
- 与类组件不同，**函数组件通常更简洁**，并且在某些情况下性能更好。
- 自从 React 16.8 引入 Hooks 以来，函数组件的功能得到了极大的增强，现在 **它们可以拥有 state 和生命周期方法**，这使得函数组件成为了许多新项目的首选。
- **函数组件提供了简洁的方式来定义 React 组件，结合 Hooks，它们现在几乎可以做类组件所能做的所有事情**。由于其简单性和性能优势，函数组件已经成为现代 React 开发中的主流选择。

## 📒 函数组件的基本形式

- 一个基本的函数组件就是一个普通的 JavaScript 函数，它接受 `props` 作为参数，并返回需要渲染的 React 元素（通常是 JSX）。
- 这里是一个简单的例子：

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

0 在这个例子中，`Welcome` 是一个函数组件，它接收一个 `props` 对象，并通过插值 `{props.name}` 将 `name` 属性插入到 `<h1>` 标签中。

## 📒 使用箭头函数来定义组件

- 你也可以使用 ES6 的箭头函数来定义函数组件：

```jsx
const Welcome = (props) => <h1>Hello, {props.name}</h2>;
```

## 📒 默认 Props

- 你可以为函数组件设置默认的 props 值：

```jsx
function Welcome(props) {
  const { name = 'Guest' } = props;
  return <h1>Hello, {name}</h1>;
}
```

- 或者使用 `defaultProps` 静态属性
  - 注意：下面提到的这种方式在最新的 React 版本中已不推荐。
  - 有关属性默认值的相关内容，请见介绍 react 组件属性相关的笔记。

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Welcome.defaultProps = {
  name: 'Guest'
};
```

## 📒 使用 Hooks

- Hooks 是一组内置的 React 函数，允许你在函数组件中使用 state 和其他 React 特性。以下是一些常用的 Hooks：
  - **useState**：用来添加 state 到函数组件。
  - **useEffect**：执行副作用操作，类似于生命周期方法。
  - **useContext**：订阅 React 的 Context。
  - **useReducer**：用于复杂的 state 逻辑。
  - **useCallback** 和 **useMemo**：优化性能，避免不必要的计算和渲染。
- 这里有一个使用 `useState` 和 `useEffect` 的例子：

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  // 声明一个新的 state 变量，我们称之为 "count"
  const [count, setCount] = useState(0);

  // 类似于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 更新文档标题，显示点击次数
    document.title = `You clicked ${count} times`;

    // 清理函数
    return () => {
      document.title = 'React App';
    };
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

- 在这个例子中，`useState` 用来声明一个名为 `count` 的 state 变量，而 `useEffect` 用来在每次渲染后更新文档的标题，并在组件卸载时清理效果。