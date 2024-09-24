# 0011. 列表渲染

## 🔗 链接

- https://zh-hans.react.dev/learn#rendering-lists - react - quick start - Rendering lists 列表渲染

## 📝 笔记

你将依赖 JavaScript 的特性，例如 **for 循环** 和 **array 的 map() 函数** 来渲染组件列表。

假设你有一个产品数组：

```jsx
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

在你的组件中，使用 `map()` 函数将这个数组转换为 `<li>` 标签构成的列表:

```jsx
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

注意， `<li>` 有一个 `key` 属性。对于列表中的每一个元素，你都应该传递一个字符串或者数字给 `key`，用于在其兄弟节点中唯一标识该元素。通常 `key` 来自你的数据，比如数据库中的 ID。如果你在后续插入、删除或重新排序这些项目，React 将依靠你提供的 `key` 来思考发生了什么。

## 💻 示例

```jsx
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen',
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
```

最终渲染结果：

![](md-imgs/2024-09-24-14-48-02.png)

注意：在列表渲染中，如果没有给 id 的话，会报错。

![](md-imgs/2024-09-24-14-52-15.png)

## 📝 单词

- cabbage 卷心菜
- garlic 蒜
- apple 苹果
- magenta 洋红
- darkgreen 暗绿色

## 🤖 列表渲染如果没有给定 id，react 会报错，请问 react 是如何识别列表渲染的？

在 React 中，当你使用数组来渲染列表时，React 需要一种方法来识别每个列表项的身份。这是通过给每个列表项一个唯一的 `key` 属性来实现的。`key` 帮助 React 识别哪些元素改变了、添加了或删除了。这样，React 可以有效地更新和重用 DOM 节点，从而提高性能。

如果你没有为列表中的每个元素提供 `key`，React 会发出警告，并且可能会导致一些不可预测的行为，比如组件状态混乱或者动画效果不正确。

### 为什么需要 `key`？

- **身份标识**：`key` 是一个特殊的属性，你可以在创建元素时将其传递给 React。React 使用 `key` 来确定哪个元素对应于前一次渲染中的哪个元素。
- **优化性能**：当数据发生变化时，React 会利用 `key` 来决定是否可以重用现有的元素，而不是重新创建新的元素。这有助于减少不必要的 DOM 操作，提升应用性能。
- **避免状态混淆**：如果列表项的状态（例如输入框的内容）需要保持跨渲染的一致性，那么正确的 `key` 将确保这些状态不会被错误地分配给其他元素。

### 如何提供 `key`

通常，你应该根据你的数据结构来选择合适的 `key`。最好的 `key` 是那些在整个列表中唯一且稳定的值。例如：

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

return <ul>{listItems}</ul>;
```

在这个例子中，我们使用数字本身作为 `key`。如果数字是唯一的，这样做是可以的。但是，如果列表包含更复杂的数据，比如对象，你应该选择对象中的一个唯一标识符作为 `key`。

### 错误示例

如果你忘记提供 `key`，React 会显示类似以下的警告：

```
Warning: Each child in a list should have a unique "key" prop.
```

下面是没有提供 `key` 的错误示例：

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

return <ul>{listItems}</ul>;
```

为了修复这个警告，你需要为每个 `<li>` 元素添加一个 `key` 属性。

### 总结

总之，当你在 React 中渲染列表时，确保为每个列表项提供一个唯一的 `key` 属性。这将帮助 React 更高效地管理组件树，并且能够避免潜在的问题。选择 `key` 时，尽量使用稳定且唯一的标识符。

## 🤖 如果把每一个 li 都写出来，而不是使用 map，那么不指定 id 会报错吗？

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

return <ul>{listItems}</ul>;
```

---

如果你不使用 `map` 方法，而是手动写出每一个 `<li>` 元素，那么即使你不指定 `key` 属性，React 也不会报错。这是因为 React 只会在渲染由数组生成的列表项时强制要求 `key` 属性。对于手动编写的静态列表项，React 不会强制要求 `key`。

但是，虽然在这种情况下不会产生错误或警告，但还是建议为每个列表项提供 `key` 属性。这样做有几个好处：

1. **可读性和维护性**：即使在手动编写列表项时，使用 `key` 也能使代码更具可读性，并且更容易维护。
2. **未来的灵活性**：如果你将来决定将这些静态元素转换为动态生成的内容，预先设置的 `key` 将确保你的代码已经符合最佳实践。
3. **避免潜在问题**：虽然当前没有错误，但如果未来你对组件进行修改，添加了动态内容或者改变了结构，可能会引入新的问题。提前使用 `key` 可以预防这些问题。

### 示例

假设你手动写出了每个 `<li>` 元素：

```jsx
return (
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
);
```

这段代码是有效的，不会产生任何错误或警告。然而，你可以选择给每个 `<li>` 添加 `key` 来提高代码质量：

```jsx
return (
  <ul>
    <li key="1">1</li>
    <li key="2">2</li>
    <li key="3">3</li>
    <li key="4">4</li>
    <li key="5">5</li>
  </ul>
);
```

在这个例子中，`key` 的值是字符串，而不是数字。通常，使用字符串作为 `key` 是一个好习惯，因为它们更直观且不容易与索引混淆。

### 总结

- 对于手动编写的静态列表项，不指定 `key` 不会导致错误或警告。
- 即便如此，为每个列表项提供 `key` 仍然是一个好的实践，有助于提高代码的可读性和未来的灵活性。
- 如果你在任何时候考虑将静态列表转换为动态生成的列表（例如通过 `map` 方法），那么提前使用 `key` 会使这种转换更加平滑。