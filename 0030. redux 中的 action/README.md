# 0030. redux 中的 action

- 📝 summary
  - 本节介绍的是 redux 中的 action。

## 💻 demo - 脱离 react 单独使用 redux 来管理状态数据

```js
/**
 * main.js
 *
 * 这是使用 vite 搭建的一个 Vanilla 原始工程。
 * 没有依赖任何第三方框架，只使用了原生的 JavaScript。
 * 然后通过 pnpm i redux 来了解 redux 的基本使用。
 *
 * redux 和 react 没有直接关联，完全可以脱离 react 单独 redux 来管理状态数据。
 * 从输出结果来看，会发现 redux 依旧是可以正常工作的。
 */
import * as redux from 'redux'

function countReducer(state, action) {
  if (action.type === 'increase') {
    return state + 1
  } else if (action.type === 'decrease') {
    return state - 1
  }
  return state
}

// 存到 window 对象上，以便测试
window.store = redux.createStore(countReducer, 10) // for test

const action = {
  type: 'increase',
}

console.log('打印 window.store.getState() 获取仓库当前状态 =>', window.store.getState())

console.log('执行 window.store.dispatch({ type: "increase" }) => 向仓库分发 action，改变仓库状态。')
window.store.dispatch(action)

console.log('打印 window.store.getState() 获取仓库当前状态 =>', window.store.getState())
```

- 通过这个 demo，能够发现 redux 和 react 没有直接关联，完全可以脱离 react 单独 redux 来管理状态数据。
- 本节主要讲解的是 redux 内部的 action 的相关内容，同样的，这里介绍的 action 和 react 也是没有直接关联的。

## 📒 notes - action 是什么？有什么用？

- 从数据类型层面来看，action 就是一个普通的平面对象 plain -object。
  - action 的 `__proto__` 指向 `Object.prototype`。
  - **如果是使用自己定义的类来 new 一个 action 出来，这个 action 是没法使用的。**
- action 是用来 **描述事件** 的
  - 比如 action.type 用于记录事件的类型，即，发生了什么事儿。
  - 比如 action.payload 用于记录事件发生时携带的一些参数，以便定义在 reducer 中的逻辑来处理事件，改变状态。

## 📒 notes - action 必须是一个平面对象

2. 通常，使用payload属性表示附加数据（没有强制要求）
3. action中必须有type属性，该属性用于描述操作的类型
   1. 但是，没有对type的类型做出要求
4. 在大型项目，由于操作类型非常多，为了避免硬编码（hard code），会将action的类型存放到一个或一些单独的文件中(样板代码)。
5. 为了方面传递action，通常会使用action创建函数(action creator)来创建action
   1. action创建函数应为无副作用的纯函数
      1. 不能以任何形式改动参数
      2. 不可以有异步
      3. 不可以对外部环境中的数据造成影响
6. 为了方便利用action创建函数来分发（触发）action，redux提供了一个函数```bindActionCreators```，该函数用于增强action创建函数的功能，使它不仅可以创建action，并且创建后会自动完成分发。