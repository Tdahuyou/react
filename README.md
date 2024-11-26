# react

<!-- region:toc -->
- [react](#react)
  - [1. 认识 react](#1-认识-react)
  - [2. 第一个 react 应用](#2-第一个-react-应用)
  - [3. 推荐安装的 VSCode 插件](#3-推荐安装的-vscode-插件)
  - [4. jsx](#4-jsx)
  - [5. dangerouslySetInnerHTML](#5-dangerouslysetinnerhtml)
  - [6. ref](#6-ref)
  - [7. hooks](#7-hooks)
  - [8. hoc](#8-hoc)
  - [9. redux](#9-redux)
  - [10. 认识组件](#10-认识组件)
  - [11. 组件名](#11-组件名)
  - [12. 组件样式](#12-组件样式)
  - [13. 组件属性](#13-组件属性)
    - [13.1. 了解属性的基本使用](#131-了解属性的基本使用)
    - [13.2. 通过 children 属性传递内容](#132-通过-children-属性传递内容)
    - [13.3. 布尔属性](#133-布尔属性)
    - [13.4. 属性校验](#134-属性校验)
    - [13.5. 属性默认值](#135-属性默认值)
  - [14. 组件状态](#14-组件状态)
  - [15. 组件生命周期](#15-组件生命周期)
  - [16. 组件模板语法 jsx - 条件渲染、列表渲染](#16-组件模板语法-jsx---条件渲染、列表渲染)
  - [17. React.Fragment](#17-reactfragment)
  - [18. 第三方库](#18-第三方库)
  - [19. 工程化](#19-工程化)
  - [20. 小练习](#20-小练习)
<!-- endregion:toc -->

## 1. 认识 react

- [x] [0032. 什么是 react](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md) <!-- [locale](./0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md#-links)
  - [📒 什么是 react](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md#-什么是-react)
  - [📒 react 的特点](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md#-react-的特点)
  - [📒 库 vs. 框架](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md#-库-vs-框架)
  <!-- endregion:toc -->
  

## 2. 第一个 react 应用

- [x] [0001. Hello World](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md) <!-- [locale](./0001.%20Hello%20World/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#-links)
  - [📒 通过 CDN 的方式引入相关依赖](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#-通过-cdn-的方式引入相关依赖)
  - [📒 API 描述](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#-api-描述)
  - [💻 demo - 在页面上渲染出 Hello World](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#-demo---在页面上渲染出-hello-world)
  - [💻 demo - 熟悉 React.createElement 的参数](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#-demo---熟悉-reactcreateelement-的参数)
  - [💻 demo - 使用 JSX 来简写](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#-demo---使用-jsx-来简写)
  - [🤔 思考：`React.createElement` 跟 `document.createElement` 是一样的吗？](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#🤔-思考`reactcreateelement`-跟-`documentcreateelement`-是一样的吗)
  - [🤔 思考：`react` 核心库和 `react-dom` 库之间的关系是？](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#🤔-思考`react`-核心库和-`react-dom`-库之间的关系是)
  - [🤔 思考：为什么一旦使用了 `JSX` 语法，就必须要引入 `react` 核心库？](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#🤔-思考为什么一旦使用了-`jsx`-语法就必须要引入-`react`-核心库)
  - [🤔 思考：通过脚手架（比如 vite、umi、create-react-app）来搭建工程 vs. 通过（.html）页面的方式来直接引入 react 相关的库](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#🤔-思考通过脚手架比如-vite、umi、create-react-app来搭建工程-vs-通过html页面的方式来直接引入-react-相关的库)
  - [🤖 请介绍一下 script 标签身上的 type 属性](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#🤖-请介绍一下-script-标签身上的-type-属性)
    - [**标准用法**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#**标准用法**)
    - [**模块**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#**模块**)
    - [**非 JavaScript 类型**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#**非-javascript-类型**)
    - [**历史用法**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#**历史用法**)
    - [**实用考虑**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#**实用考虑**)
  - [🤖 请介绍一下 script 标签身上的 crossorigin 属性](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#🤖-请介绍一下-script-标签身上的-crossorigin-属性)
    - [值](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#值)
    - [作用](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#作用)
    - [示例](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#示例)
  <!-- endregion:toc -->
  

## 3. 推荐安装的 VSCode 插件

- [ ] [0034. eslint 插件](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md) <!-- [locale](./0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#-summary)
  - [📒 eslint 是啥？有啥用？](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#-eslint-是啥有啥用)
  - [📒 安装 ESLint 插件](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#-安装-eslint-插件)
  - [📒 配置 ESLint 基本流程](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#-配置-eslint-基本流程)
  - [💻 约束只能使用单引号，不能使用双引号](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#-约束只能使用单引号不能使用双引号)
  - [📒 注意事项](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#-注意事项)
  <!-- endregion:toc -->
  

- [ ] [0035. 在 vscode 中，让 Emmet 语法支持 JSX](https://github.com/Tdahuyou/react/tree/main/0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md) <!-- [locale](./0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md#-links)
  - [📒 notes](https://github.com/Tdahuyou/react/tree/main/0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md#-notes)
  - [💻 测试效果](https://github.com/Tdahuyou/react/tree/main/0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md#-测试效果)
  <!-- endregion:toc -->
  

## 4. jsx

- [x] [0013. 什么是 JSX](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md) <!-- [locale](./0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#-summary)
  - [📒 JSX 是什么？](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#-jsx-是什么)
  - [📒 JSX 的本质](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#-jsx-的本质)
  - [📒 必须单根](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#-必须单根)
  - [📒 必须要有结束标记](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#-必须要有结束标记)
  - [📒 JSX 的基本特点](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#-jsx-的基本特点)
  - [💻 一个简单的 React 组件示例](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#-一个简单的-react-组件示例)
  <!-- endregion:toc -->
  

- [x] [0003. html to jsx 在线转换](https://github.com/Tdahuyou/react/tree/main/0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md) <!-- [locale](./0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md#-links)
  - [📒 html-to-jsx 在线转换器](https://github.com/Tdahuyou/react/tree/main/0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md#-html-to-jsx-在线转换器)
  <!-- endregion:toc -->
  

- [x] [0015. 在 JSX 中使用注释](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md) <!-- [locale](./0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md#-links)
  - [📒 JSX 中注释的写法](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md#-jsx-中注释的写法)
  - [💻 demo1 - 在 JSX 中使用注释](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md#-demo1---在-jsx-中使用注释)
  - [💻 demo2 - jsx-eslint 的智能提示](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md#-demo2---jsx-eslint-的智能提示)
  <!-- endregion:toc -->
  

- [x] [0009. 动态插值 - 在 jsx 中使用大括号实现](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md) <!-- [locale](./0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md#-links)
  - [📒 在 JSX 中使用 JS 表达式](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md#-在-jsx-中使用-js-表达式)
  - [🤖 Hedy Lamarr 是谁？](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md#🤖-hedy-lamarr-是谁)
  <!-- endregion:toc -->
  

- [x] [0017. 在 JSX 中书写内联样式 style](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md) <!-- [locale](./0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md#-summary)
  - [💻 demo - 在 JSX 中书写内联样式 style](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md#-demo---在-jsx-中书写内联样式-style)
  - [💻 demo - 在 JSX 中的 style 不能写成字符串形式](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md#-demo---在-jsx-中的-style-不能写成字符串形式)
  - [🤖 在 JSX 中书写内联样式 style](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md#🤖-在-jsx-中书写内联样式-style)
  <!-- endregion:toc -->
  

## 5. dangerouslySetInnerHTML

- [x] [0016. dangerouslySetInnerHTML](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md) <!-- [locale](./0016.%20dangerouslySetInnerHTML/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#-links)
  - [📒 notes](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#-notes)
  - [💻 dangerouslySetInnerHTML 的基本使用](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#-dangerouslysetinnerhtml-的基本使用)
  - [🤖 请介绍一下 dangerouslySetInnerHTML](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#🤖-请介绍一下-dangerouslysetinnerhtml)
    - [为什么需要 `dangerouslySetInnerHTML`？](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#为什么需要-`dangerouslysetinnerhtml`)
    - [基本用法](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#基本用法)
    - [安全注意事项](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#安全注意事项)
    - [使用示例](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#使用示例)
      - [安装 `DOMPurify`](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#安装-`dompurify`)
      - [示例代码](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#示例代码)
    - [解释](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#解释)
    - [运行结果](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#运行结果)
    - [总结](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#总结)
  <!-- endregion:toc -->
  

## 6. ref

- [ ] [0007. ref](https://github.com/Tdahuyou/react/tree/main/0007.%20ref/README.md) <!-- [locale](./0007.%20ref/README.md) -->  
  <!-- region:toc -->
  - [⏰ TODO：完善 demo，和笔记。](https://github.com/Tdahuyou/react/tree/main/0007.%20ref/README.md#⏰-todo完善-demo和笔记)
  <!-- endregion:toc -->
  

## 7. hooks

## 8. hoc

## 9. redux

- [x] [0028. redux 的基本使用](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) <!-- [locale](./0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-links)
  - [📒 redux 是什么？](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-redux-是什么)
  - [📒 redux 核心概念](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-redux-核心概念)
  - [📒 纯函数](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-纯函数)
  - [📒 redux 的工具和生态系统](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-redux-的工具和生态系统)
  - [📒 本节会用到的一些依赖](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-本节会用到的一些依赖)
  - [💻 脱离 react 单独使用 redux 来管理状态数据](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-脱离-react-单独使用-redux-来管理状态数据)
  - [💻 redux 的基本使用 - createStore 版](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-redux-的基本使用---createstore-版)
  - [💻 redux 的基本使用 - @reduxjs/toolkit 版](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-redux-的基本使用---@reduxjs/toolkit-版)
  - [💻 redux 的基本使用 - @reduxjs/toolkit 版（模块化）](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-redux-的基本使用---@reduxjs/toolkit-版模块化)
  - [🤖 我想要深入了解有关 redux 的内容，应该问你哪些问题呢？](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#🤖-我想要深入了解有关-redux-的内容应该问你哪些问题呢)
    - [基本概念](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#基本概念)
    - [高级概念](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#高级概念)
    - [最佳实践](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#最佳实践)
    - [实际应用](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#实际应用)
    - [其他问题](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#其他问题)
  <!-- endregion:toc -->
  

- [ ] [0029. 为什么说前端的 mvc 已死](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md) <!-- [locale](./0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#-links)
  - [📒 notes](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#-notes)
  - [🤖 为什么说前端的 mvc 已死？](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#🤖-为什么说前端的-mvc-已死)
    - [1. **复杂的状态管理**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#1-**复杂的状态管理**)
    - [2. **组件化**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#2-**组件化**)
    - [3. **单向数据流**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#3-**单向数据流**)
    - [4. **虚拟 DOM**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#4-**虚拟-dom**)
    - [5. **社区和生态系统**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#5-**社区和生态系统**)
    - [6. **开发体验**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#6-**开发体验**)
    - [总结](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#总结)
  <!-- endregion:toc -->
  

- [x] [0030. redux 中的 action](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md) <!-- [locale](./0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#-links)
  - [💻 脱离 react 单独使用 redux 来管理状态数据](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#-脱离-react-单独使用-redux-来管理状态数据)
  - [📒 action 是什么？有什么用？](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#-action-是什么有什么用)
  - [📒 redux 部分源码 - 判断 action 是否合法的逻辑](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#-redux-部分源码---判断-action-是否合法的逻辑)
  - [💻 action 必须是一个平面对象](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#-action-必须是一个平面对象)
  - [💻 action 的 type 属性必须是 string 类型](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#-action-的-type-属性必须是-string-类型)
  - [📒 type 的硬编码问题](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#-type-的硬编码问题)
  - [📒 action 的创建函数](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#-action-的创建函数)
  - [📒 `bindActionCreators`](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#-`bindactioncreators`)
  - [💻 action 的创建函数以及工具方法 `bindActionCreators`](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#-action-的创建函数以及工具方法-`bindactioncreators`)
  - [🤖 如何验证一个对象是否是 plain-object？](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#🤖-如何验证一个对象是否是-plain-object)
  - [🤖 为什么 type 必须是 string 类型，符号类型不行](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#🤖-为什么-type-必须是-string-类型符号类型不行)
  <!-- endregion:toc -->
  

- [ ] [0031. store、reducer、action 三者之间的关系](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md) <!-- [locale](./0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md#-summary)
  - [📒 store](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md#-store)
  - [📒 reducer](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md#-reducer)
  - [📒 action](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md#-action)
  <!-- endregion:toc -->
  

## 10. 认识组件

- [x] [0021. 在 React 中，一个组件都有哪些部分组成？](https://github.com/Tdahuyou/react/tree/main/0021.%20%E5%9C%A8%20React%20%E4%B8%AD%EF%BC%8C%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%A8%E5%88%86%E7%BB%84%E6%88%90%EF%BC%9F/README.md) <!-- [locale](./0021.%20%E5%9C%A8%20React%20%E4%B8%AD%EF%BC%8C%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%A8%E5%88%86%E7%BB%84%E6%88%90%EF%BC%9F/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0021.%20%E5%9C%A8%20React%20%E4%B8%AD%EF%BC%8C%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%A8%E5%88%86%E7%BB%84%E6%88%90%EF%BC%9F/README.md#-summary)
  - [🤖 在 React 中，一个组件都有哪些部分组成？](https://github.com/Tdahuyou/react/tree/main/0021.%20%E5%9C%A8%20React%20%E4%B8%AD%EF%BC%8C%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%A8%E5%88%86%E7%BB%84%E6%88%90%EF%BC%9F/README.md#🤖-在-react-中一个组件都有哪些部分组成)
  <!-- endregion:toc -->
  

- [x] [0022. 函数组件概述](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md) <!-- [locale](./0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md#-summary)
  - [📒 函数组件的基本形式](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md#-函数组件的基本形式)
  - [📒 使用箭头函数来定义组件](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md#-使用箭头函数来定义组件)
  - [📒 默认 Props](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md#-默认-props)
  - [📒 使用 Hooks](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md#-使用-hooks)
  <!-- endregion:toc -->
  

- [x] [0023. 什么是类组件](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md) <!-- [locale](./0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#-summary)
  - [🤖 什么是类组件](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#🤖-什么是类组件)
    - [类组件的基本形式](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#类组件的基本形式)
    - [状态（State）](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#状态state)
    - [生命周期方法](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#生命周期方法)
    - [默认 Props](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#默认-props)
    - [总结](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#总结)
  <!-- endregion:toc -->
  

- [x] [0024. 什么是单向数据流](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md) <!-- [locale](./0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md#-summary)
  - [🤖 什么是单向数据流](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md#🤖-什么是单向数据流)
    - [单向数据流的优点](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md#单向数据流的优点)
    - [React 中的单向数据流](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md#react-中的单向数据流)
  <!-- endregion:toc -->
  

## 11. 组件名

- [ ] [0002. react 组件名的命名规则](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md) <!-- [locale](./0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md#-links)
  - [📒 notes](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md#-notes)
  - [💻 demo - react 组件名的命名规则](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md#-demo---react-组件名的命名规则)
  <!-- endregion:toc -->
  

## 12. 组件样式

- [ ] [0004. 使用 className 添加样式名](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md) <!-- [locale](./0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md#-links)
  - [📒 添加样式](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md#-添加样式)
  - [🤔 问：为什么不直接使用 class 来添加样式，而是使用 className 呢？](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md#🤔-问为什么不直接使用-class-来添加样式而是使用-classname-呢)
  - [💻 demo - className 基本使用](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md#-demo---classname-基本使用)
  <!-- endregion:toc -->
  

## 13. 组件属性

### 13.1. 了解属性的基本使用

- [x] [0019. 组件属性的传递和接收](https://github.com/Tdahuyou/react/tree/main/0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md) <!-- [locale](./0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md#-summary)
  - [💻 函数组件和类组件的属性传递](https://github.com/Tdahuyou/react/tree/main/0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md#-函数组件和类组件的属性传递)
  - [🤖 为什么控制台有 4 次输出？](https://github.com/Tdahuyou/react/tree/main/0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md#🤖-为什么控制台有-4-次输出)
  <!-- endregion:toc -->
  

### 13.2. 通过 children 属性传递内容
- [ ] [0005. 通过 props 和 children 来传递元素内容](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md) <!-- [locale](./0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md#-summary)
  - [📒 对比 vue 中的 slot](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md#-对比-vue-中的-slot)
  - [📒 传递元素内容](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md#-传递元素内容)
  - [💻 demo](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md#-demo)
  <!-- endregion:toc -->
  

### 13.3. 布尔属性
- [x] [0025. 什么是布尔属性](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md) <!-- [locale](./0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#-summary)
  - [🤖 什么是布尔属性](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#🤖-什么是布尔属性)
    - [常见的布尔属性](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#常见的布尔属性)
    - [使用示例](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#使用示例)
    - [在 JavaScript 中处理布尔属性](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#在-javascript-中处理布尔属性)
  - [🤖 布尔属性名称的由来](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#🤖-布尔属性名称的由来)
  - [🤖 请介绍一下 React 中组件的布尔属性](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#🤖-请介绍一下-react-中组件的布尔属性)
    - [布尔属性在 React 中的应用](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#布尔属性在-react-中的应用)
      - [1. 简单示例](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#1-简单示例)
      - [2. 使用条件渲染](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#2-使用条件渲染)
      - [3. 自定义组件中的布尔属性](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#3-自定义组件中的布尔属性)
    - [注意事项](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#注意事项)
  <!-- endregion:toc -->
  

- [x] [0026. 布尔属性的简写](https://github.com/Tdahuyou/react/tree/main/0026.%20%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E5%86%99/README.md) <!-- [locale](./0026.%20%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E5%86%99/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0026.%20%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E5%86%99/README.md#-summary)
  - [💻 布尔属性的简写](https://github.com/Tdahuyou/react/tree/main/0026.%20%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E5%86%99/README.md#-布尔属性的简写)
  <!-- endregion:toc -->
  

### 13.4. 属性校验
- [ ] [0020. 组件属性的校验](https://github.com/Tdahuyou/react/tree/main/0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md) <!-- [locale](./0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md#-links)
  - [📒 notes](https://github.com/Tdahuyou/react/tree/main/0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md#-notes)
  - [💻 demo](https://github.com/Tdahuyou/react/tree/main/0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md#-demo)
  - [🤖 AI](https://github.com/Tdahuyou/react/tree/main/0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md#🤖-ai)
  <!-- endregion:toc -->
  

### 13.5. 属性默认值

## 14. 组件状态

## 15. 组件生命周期

- [ ] [0027. 生命周期](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md) <!-- [locale](./0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#-summary)
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#-links)
  - [📒 notes](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#-notes)
  - [💻 demo](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#-demo)
  - [🤖 AI](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#🤖-ai)
  <!-- endregion:toc -->
  

## 16. 组件模板语法 jsx - 条件渲染、列表渲染

- [ ] [0010. 条件渲染](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md) <!-- [locale](./0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md#-links)
  - [📝 条件渲染](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md#-条件渲染)
  - [💻 demo - 条件渲染](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md#-demo---条件渲染)
  - [📝 对比 vue](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md#-对比-vue)
  <!-- endregion:toc -->
  

- [ ] [0011. 列表渲染](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md) <!-- [locale](./0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#-links)
  - [🔗 en-words](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#-en-words)
  - [📝 doc - 列表渲染](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#-doc---列表渲染)
  - [💻 列表渲染](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#-列表渲染)
  - [📒 “列表渲染”中的“列表”是什么？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#-列表渲染中的列表是什么)
  - [🤖 列表渲染如果没有给定 id，react 会报错，请问 react 是如何识别列表渲染的？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#🤖-列表渲染如果没有给定-idreact-会报错请问-react-是如何识别列表渲染的)
    - [为什么需要 `key`？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#为什么需要-`key`)
    - [如何提供 `key`](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#如何提供-`key`)
    - [错误示例](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#错误示例)
    - [总结](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#总结)
  - [🤖 如果把每一个 li 都写出来，而不是使用 map，那么不指定 id 会报错吗？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#🤖-如果把每一个-li-都写出来而不是使用-map那么不指定-id-会报错吗)
    - [示例](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#示例)
    - [总结](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#总结)
  - [🤖 如果要渲染的内容是一个数组，并且数组的某些项是 react 元素，那么 react 会要求每一个 react 元素都需要具备 key 对吗？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#🤖-如果要渲染的内容是一个数组并且数组的某些项是-react-元素那么-react-会要求每一个-react-元素都需要具备-key-对吗)
    - [为什么需要 `key`](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#为什么需要-`key`)
    - [示例](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#示例)
    - [动态生成的元素](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#动态生成的元素)
    - [总结](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#总结)
  <!-- endregion:toc -->
  

## 17. React.Fragment

- [ ] [0014. React.Fragment](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md) <!-- [locale](./0014.%20React.Fragment/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#-links)
  - [💻 React.Fragment 并不会生成真实 DOM](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#-reactfragment-并不会生成真实-dom)
  - [💻 React.Fragment 渲染列表](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#-reactfragment-渲染列表)
  - [🤖 请介绍一下 React.Fragment](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#🤖-请介绍一下-reactfragment)
    - [为什么使用 `React.Fragment`？](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#为什么使用-`reactfragment`)
    - [基本用法](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#基本用法)
      - [使用 `<React.Fragment>` 标签](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#使用-`<reactfragment>`-标签)
      - [使用短语法 `<></>`](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#使用短语法-`<></>`)
    - [传递属性](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#传递属性)
  <!-- endregion:toc -->
  

## 18. 第三方库

- [ ] [0006. react-modal 的基本使用](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) <!-- [locale](./0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-links)
  - [🤖 react-modal 中的 contentLabel 属性有什么用？](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#🤖-react-modal-中的-contentlabel-属性有什么用)
    - [`contentLabel` 的作用](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#`contentlabel`-的作用)
    - [示例代码](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#示例代码)
      - [安装 `react-modal`](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#安装-`react-modal`)
      - [使用 `contentLabel`](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#使用-`contentlabel`)
    - [解释](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#解释)
    - [为什么 `contentLabel` 很重要](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#为什么-`contentlabel`-很重要)
    - [结论](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#结论)
  <!-- endregion:toc -->
  

- [x] [0012. react-monaco-editor 基本使用](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) <!-- [locale](./0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-links)
  - [📒 先说说结论](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-先说说结论)
  - [📒 单词 monaco](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-单词-monaco)
  - [📒 安装 @monaco-editor/react](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-安装-@monaco-editor/react)
  - [💻 引入 Editor 组件](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-引入-editor-组件)
  - [💻 Editor 组件的一些钩子 onChange、onMount、beforeMount、onValidate](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-editor-组件的一些钩子-onchange、onmount、beforemount、onvalidate)
  - [💻 获取编辑器的当前值的两种方式](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-获取编辑器的当前值的两种方式)
  - [💻 将 Editor 组件设置为只读的](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-将-editor-组件设置为只读的)
  - [💻 通过 editor 实例读写编辑器中的内容](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-通过-editor-实例读写编辑器中的内容)
  - [💻 实战练习 - 模仿 matatastudio 的代码预览效果封装一个代码预览组件](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-实战练习---模仿-matatastudio-的代码预览效果封装一个代码预览组件)
  - [📒 相关业务背景信息 + 遇到的坑 + 解决方案](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-相关业务背景信息-+-遇到的坑-+-解决方案)
    - [解决办法 1 - 在线 - 使用代理](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#解决办法-1---在线---使用代理)
    - [解决办法 2 - 在线 - 下载资源丢到自己的 CDN 上](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#解决办法-2---在线---下载资源丢到自己的-cdn-上)
    - [解决办法 3 - 离线 - 手动下载相关模块](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#解决办法-3---离线---手动下载相关模块)
    - [解决办法 4 - 离线 - use monaco-editor as an npm package](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#解决办法-4---离线---use-monaco-editor-as-an-npm-package)
  - [🤖 请介绍一下 react-monaco-editor](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#🤖-请介绍一下-react-monaco-editor)
    - [功能特点](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#功能特点)
    - [安装](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#安装)
    - [基本用法](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#基本用法)
    - [高级配置](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#高级配置)
    - [结论](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#结论)
  - [🤖 monaco 名称的由来](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#🤖-monaco-名称的由来)
  <!-- endregion:toc -->
  

- [x] [0033. react-tooltip 基本使用](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) <!-- [locale](./0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-links)
  - [📒 react-tooltip 概述](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-react-tooltip-概述)
  - [📒 安装 react-tooltip](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-安装-react-tooltip)
  - [📒 核心依赖的版本](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-核心依赖的版本)
  - [📒 引入 react-tooltip](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-引入-react-tooltip)
  - [📒 关于 css 引入的一些注意事项](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-关于-css-引入的一些注意事项)
  - [💻 了解 react-tooltip 的基本使用](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#-了解-react-tooltip-的基本使用)
  <!-- endregion:toc -->
  

## 19. 工程化

- [x] [0008. 使用 vite 快速初始化一个 react 工程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md) <!-- [locale](./0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md) -->  
  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#-links)
  - [📒 notes](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#-notes)
  - [📒 使用 vite 创建 react 工程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#-使用-vite-创建-react-工程)
  - [📒 启动用 vite 创建的 react 工程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#-启动用-vite-创建的-react-工程)
  - [🤖 请解释一下 `npm create vite@latest my-react-app -- --template react` 这条命令](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#🤖-请解释一下-`npm-create-vite@latest-my-react-app------template-react`-这条命令)
    - [整体流程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#整体流程)
    - [总结](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#总结)
  <!-- endregion:toc -->
  

## 20. 小练习

- [x] [0018. demo-图片定时切换](https://github.com/Tdahuyou/react/tree/main/0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md) <!-- [locale](./0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md) -->  
  <!-- region:toc -->
  - [📝 Summary](https://github.com/Tdahuyou/react/tree/main/0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md#-summary)
  - [🔗 links](https://github.com/Tdahuyou/react/tree/main/0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md#-links)
  - [💻 demo](https://github.com/Tdahuyou/react/tree/main/0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md#-demo)
  <!-- endregion:toc -->
  
