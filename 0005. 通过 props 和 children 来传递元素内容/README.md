# 0005. 通过 props 和 children 来传递元素内容

## 📒 notes

- children - 相当于 vue 中的默认插槽
- props - 相当于 vue 中的具名插槽

## 📝 元素内容

这里所说的元素内容，指的是 react 中的元素，也就是通过 React.createElement 创建的元素。

使用 jsx 语法糖编写的 html 模板，其实也是通过 React.createElement 创建的元素。

我们可以使用类似于 vue 中的默认插槽的写法来传递元素内容。

```jsx
<Comp>
    {/* 这么写，意味着会将其作为 props.children 传递给 Comp 组件 */}
    <h2>test</h2>
</Comp>
// 在 Comp 组件中，通过 props.children 获取到父组件在调用 Comp 时，丢到 Comp 组件内部的内容 <h2>test</h2>
```

也可以将元素内容作为组件的 props 传递给组件。

```jsx
<Comp content1={<h2>test1</h2>} content2={<h2>test2</h2>} />
// 在 Comp 组件中，通过 props.content1 和 props.content2 获取到父组件在调用 Comp 时，丢到 Comp 组件内部的内容 <h2>test1</h2> 和 <h2>test2</h2>
```