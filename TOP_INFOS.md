### [0001. Hello World](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World) <!-- [locale](./0001.%20Hello%20World/README.md) -->

- 知识点
  - 了解 React.createElement 的基本使用
  - 了解 ReactDOM.render 的基本使用
  - 了解 JSX 其实就是 React.createElement 的简写，是一个语法糖。
- 本节不使用任何脚手架工具，通过 CDN 引入 react、react-dom，直接在（.html）页面上使用 react，渲染出 Hello World。


<!-- !====================>分隔符<====================! -->
### [0002. react 组件名的命名规则](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99) <!-- [locale](./0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md) -->

- 在 React 中，**自定义组件名必须以大写字母开头**，而 **HTML 标签名则必须以小写字母开头**，否则将导致错误或警告。


<!-- !====================>分隔符<====================! -->
### [0003. html to jsx 在线转换](https://github.com/Tdahuyou/react/tree/main/0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2) <!-- [locale](./0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md) -->

- 本节介绍了一个实现 html 转 jsx 的在线工具站点，如果有 html 转 jsx 的需求，可以通过这个工具来快速转换。


<!-- !====================>分隔符<====================! -->
### [0004. 使用 className 添加样式名](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D) <!-- [locale](./0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md) -->

- 在 React 中，我们通过使用 JSX 语法来定义组件模板，在组件模板中，我们可以使用 className 来指定一个 CSS 的 class。
  - ✔ `<img className="avatar" />`
  - ✖ `<img class="avatar" />`


<!-- !====================>分隔符<====================! -->
### [0005. 通过 props 和 children 来传递元素内容](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9) <!-- [locale](./0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md) -->

- 在 React 中，可以通过 `props.children` 传递默认插槽内容，类似于 Vue 中的默认插槽；也可以通过 `props` 属性传递具名插槽内容，类似于 Vue 中的具名插槽。
- `props.children` 可以接收任何可渲染的 React 元素，并且可以通过检查其是否存在来提供默认内容。
- 除了 `children`，还可以使用其他 `props`（如 `content1` 和 `content2`）来传递特定的内容，并为这些 `props` 定义默认值。


<!-- !====================>分隔符<====================! -->
### [0006. react-modal 的基本使用](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8) <!-- [locale](./0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->

- 一个用于解决弹框问题的 react 第三方库。
- ⏰ TODO：待整理。（看一眼 ai 回复基本就会了，当时就没整理。）


<!-- !====================>分隔符<====================! -->
### [0007. ref](https://github.com/Tdahuyou/react/tree/main/0007.%20ref) <!-- [locale](./0007.%20ref/README.md) -->

- ⏰ TODO：完善 demo，和笔记。


<!-- !====================>分隔符<====================! -->
### [0008. 使用 vite 快速初始化一个 react 工程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B) <!-- [locale](./0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md) -->

- `npm create vite@latest my-react-app -- --template react`


<!-- !====================>分隔符<====================! -->
### [0009. 动态插值 - 在 jsx 中使用大括号实现](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0) <!-- [locale](./0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md) -->

- 在 jsx 中可以使用 `{}` 语法来动态插入 js 表达式。
- 类似于 vue 中的指令 v-bind 的作用。


<!-- !====================>分隔符<====================! -->
### [0010. 条件渲染](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93) <!-- [locale](./0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md) -->

- 类似于 vue 中的 v-show、v-if，不过在 react 中，条件渲染是通过纯 js 结合 jsx 语法来实现的，更加的灵活。


<!-- !====================>分隔符<====================! -->
### [0011. 列表渲染](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93) <!-- [locale](./0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md) -->

- 类似于 vue 中的 v-for，不过在 react 中，列表渲染是通过纯 js 结合 jsx 语法来实现的，更加的灵活。


<!-- !====================>分隔符<====================! -->
### [0012. react-monaco-editor 基本使用](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8) <!-- [locale](./0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->

- 通过一些 demo 介绍了 react-monaco-editor 组件的基本使用。
- 记录了相关的业务背景，为什么会需要用到这个组件，以及在应用过程中踩的坑（公共 CDN 资源加载缓慢的问题），同时也记录了相关的解决方案。其中较大篇幅都在描述坑，以及解决方案。


<!-- !====================>分隔符<====================! -->
### [0013. 什么是 JSX](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX) <!-- [locale](./0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md) -->

- 理解 jsx 是什么。
- 清楚在 jsx 中编写 react 组件模板的一些注意事项。


<!-- !====================>分隔符<====================! -->
### [0014. React.Fragment](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment) <!-- [locale](./0014.%20React.Fragment/README.md) -->

- 简写形式：`<></>`
- 并不会实际被渲染到元素结构中，仅仅是起到一个占位的作用。
- 场景应用场景：使用 `<></>` 见多个“根元素”包裹一层，解决组件的单根问题。


<!-- !====================>分隔符<====================! -->
### [0015. 在 JSX 中使用注释](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A) <!-- [locale](./0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md) -->

- 在 JSX 中，注释应该被包含在特殊的注释标签中，即 `{/* 这里边是注释内容 */}`。


<!-- !====================>分隔符<====================! -->
### [0016. dangerouslySetInnerHTML](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML) <!-- [locale](./0016.%20dangerouslySetInnerHTML/README.md) -->

- 在 JSX 中，使用 dangerouslySetInnerHTML 可以在组件中直接插入 html 标签。


<!-- !====================>分隔符<====================! -->
### [0017. 在 JSX 中书写内联样式 style](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style) <!-- [locale](./0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md) -->

- 在 JSX 中书写内联样式 style 的一些注意事项。


<!-- !====================>分隔符<====================! -->
### [0018. demo-图片定时切换](https://github.com/Tdahuyou/react/tree/main/0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2) <!-- [locale](./0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md) -->

- 实现一个图片定时切换的 demo，类似轮播效果。
- 通过本节的 demo，强调了一个点 —— 由 `React.createElement` 创建的 react 元素对象是不可变的。


<!-- !====================>分隔符<====================! -->
### [0019. 组件属性的传递和接收](https://github.com/Tdahuyou/react/tree/main/0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6) <!-- [locale](./0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md) -->

- Props 是从父组件传递给子组件的数据。
- 属性是只读的，意味着子组件不能修改接收到的 props。
- 对于函数组件，属性会作为一个对象的属性，传递给函数的参数。
- 对于类组件，属性会作为一个对象的属性，传递给构造函数的参数。


<!-- !====================>分隔符<====================! -->
### [0020. 组件属性的校验](https://github.com/Tdahuyou/react/tree/main/0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C) <!-- [locale](./0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md) -->

- ⏰ TODO


<!-- !====================>分隔符<====================! -->
### [0021. 在 React 中，一个组件都有哪些部分组成？](https://github.com/Tdahuyou/react/tree/main/0021.%20%E5%9C%A8%20React%20%E4%B8%AD%EF%BC%8C%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%A8%E5%88%86%E7%BB%84%E6%88%90%EF%BC%9F) <!-- [locale](./0021.%20%E5%9C%A8%20React%20%E4%B8%AD%EF%BC%8C%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%A8%E5%88%86%E7%BB%84%E6%88%90%EF%BC%9F/README.md) -->

- ⏰ TODO


<!-- !====================>分隔符<====================! -->
### [0022. 函数组件概述](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0) <!-- [locale](./0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md) -->

- 函数组件是 React 中定义组件的一种方式，它 **使用 JavaScript 函数来创建**。
- 与类组件不同，**函数组件通常更简洁**，并且在某些情况下性能更好。
- 自从 React 16.8 引入 Hooks 以来，函数组件的功能得到了极大的增强，现在 **它们可以拥有 state 和生命周期方法**，这使得函数组件成为了许多新项目的首选。
- **函数组件提供了简洁的方式来定义 React 组件，结合 Hooks，它们现在几乎可以做类组件所能做的所有事情**。由于其简单性和性能优势，函数组件已经成为现代 React 开发中的主流选择。


<!-- !====================>分隔符<====================! -->
### [0023. 什么是类组件](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6) <!-- [locale](./0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md) -->

- ⏰ TODO


<!-- !====================>分隔符<====================! -->
### [0024. 什么是单向数据流](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81) <!-- [locale](./0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md) -->

- ⏰ TODO


<!-- !====================>分隔符<====================! -->
### [0025. 什么是布尔属性](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7) <!-- [locale](./0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md) -->

- ⏰ TODO


<!-- !====================>分隔符<====================! -->
### [0026. 布尔属性的简写](https://github.com/Tdahuyou/react/tree/main/0026.%20%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E5%86%99) <!-- [locale](./0026.%20%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E5%86%99/README.md) -->

- 如果在调用某个组件时，需要传递一个布尔属性，并且值为 true，可以简写属性名，不需要写属性值。
  - 写法1：`<Comp boolProp />`
  - 写法2：`<Comp boolProp={true} />`
  - 上述两种写法等效。
- 注意：如果直接在页面上渲染一个 true，需要将其转为字符串类型后才能渲染出来。
  - `{true}` 不会渲染出来。
  - `{'true'}` 可以正常渲染。


<!-- !====================>分隔符<====================! -->
### [0027. 生命周期](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F) <!-- [locale](./0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md) -->

- ⏰ TODO


<!-- !====================>分隔符<====================! -->
### [0028. redux 的基本使用](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8) <!-- [locale](./0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->

- ⏰ TODO
- 理解 redux 是什么
- 了解 redux 与 react 结合使用的两种常见方式
  - 传统的 createStore 方式
  - 新版的 redux-toolkit 方式
- 你可以脱离 react，单独使用 redux 来管理状态数据。


<!-- !====================>分隔符<====================! -->
### [0029. 为什么说前端的 mvc 已死](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB) <!-- [locale](./0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md) -->

- 理解为什么前端不适用 mvc 模式。


<!-- !====================>分隔符<====================! -->
### [0030. redux 中的 action](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action) <!-- [locale](./0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md) -->

- 理解 action 的本质
- 编写 action 时的一些常见写法
- action 的创建函数
- 学会使用 `bindActionCreators` 来简化 action 的分发流程
- 学习 redux 的源码，比如：关于 action 的判断逻辑 `isAction` 的实现、关于 `bindActionCreators` 的实现源码。


<!-- !====================>分隔符<====================! -->
### [0031. store、reducer、action 三者之间的关系](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB) <!-- [locale](./0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md) -->

- 了解 redux 中的 3 个核心组成部分 store、reducer、action，并清楚它们之间的关系。


<!-- !====================>分隔符<====================! -->
### [0032. 什么是 react](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react) <!-- [locale](./0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md) -->

- 了解什么是 react
- 了解 react 都有哪些特点
- 理解为什么强调 react 是一个库，而非框架
- 谈了谈 vue、react 之间的一些差异


<!-- !====================>分隔符<====================! -->
### [0033. react-tooltip 基本使用](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8) <!-- [locale](./0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->


<!-- !====================>分隔符<====================! -->
