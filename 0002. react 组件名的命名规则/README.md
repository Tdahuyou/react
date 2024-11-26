# [0002. react 组件名的命名规则](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md)

<!-- region:toc -->
- [📝 Summary](#-summary)
- [🔗 links](#-links)
- [📒 notes](#-notes)
- [💻 react 组件名的命名规则](#-react-组件名的命名规则)
<!-- endregion:toc -->

## 📝 Summary

- 在 React 中，**自定义组件名必须以大写字母开头**，而 **HTML 标签名则必须以小写字母开头**，否则将导致错误或警告。

## 🔗 links

- https://react.dev/learn
  - react 官网
  - 官方原话：
    - ![](md-imgs/2024-09-24-11-24-37.png)

## 📒 notes

- React 中的组件名必须以大写字母开头，否则会报错。
- React 中的 html tags 必须以小写字母开头，否则会报错。

## 💻 react 组件名的命名规则

```jsx
/**
 * src/App.jsx
 */
import MyButton from './MyButton';

function App() {
  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton />

      {/* 如果将 h1 改为 H1 会报错 Uncaught ReferenceError: H1 is not defined */}
      {/* <H1>Welcome to my app</H1> */}

      {/* 组件名必须以大写字母开头，否则会报错：
      Warning: <myButton /> is using incorrect casing.
      Use PascalCase for React components, or lowercase for HTML elements. */}
      {/* <myButton /> */}
    </>
  );
}

export default App;
```

```jsx
/**
 * src/MyButton.jsx
 */
export default function MyButton() {
  return <button>I'm a button</button>
}
```

- `<h1>` 是 html 的标签，在使用的时候必须以小写开头，如果使用大写的 `<H1>` 会报错。
- `<MyButton>` 是自定义的组件，在使用的时候必须以大写开头，如果使用小写开头 `<myButton>` 会警告。