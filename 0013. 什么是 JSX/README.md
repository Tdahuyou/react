# 0013. 什么是 JSX

## 📝 笔记

- JSX 是一种将 HTML 和 JavaScript 混合使用的语法扩展。JSX 让开发者可以在 JavaScript 中编写类似 HTML 的代码，这使得模板逻辑更加直观和易于理解。
- JSX 是由 Facebook 起草的 JS 扩展语法。
- 本质是一个 JS 对象，会被 babel 编译，最终会被转换为 React.createElement。
- 每个 JSX 表达式，有且仅有一个根节点。
  - 如果有多个根，可以使用 `<React.Fragment></React.Fragment>` 来包裹这些根节点。
  - `<React.Fragment></React.Fragment>` 可以简写为 `<></>`
- 每个 JSX 元素必须有结束标记（XML 规范）

## 🤖 react 中的 jsx 是什么
