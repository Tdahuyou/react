# [0025. 什么是布尔属性](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7)

<!-- region:toc -->
- [1. 📝 Summary](#1--summary)
- [2. 🤖 什么是布尔属性](#2--什么是布尔属性)
  - [2.1. 常见的布尔属性](#21-常见的布尔属性)
  - [2.2. 使用示例](#22-使用示例)
  - [2.3. 在 JavaScript 中处理布尔属性](#23-在-javascript-中处理布尔属性)
- [3. 🤖 布尔属性名称的由来](#3--布尔属性名称的由来)
- [4. 🤖 请介绍一下 React 中组件的布尔属性](#4--请介绍一下-react-中组件的布尔属性)
  - [4.1. 布尔属性在 React 中的应用](#41-布尔属性在-react-中的应用)
    - [4.1.1. 1. 1. 1. 1. 简单示例](#411-1-1-1-1-简单示例)
    - [4.1.2. 2. 2. 2. 2. 使用条件渲染](#412-2-2-2-2-使用条件渲染)
    - [4.1.3. 3. 3. 3. 3. 自定义组件中的布尔属性](#413-3-3-3-3-自定义组件中的布尔属性)
  - [4.2. 注意事项](#42-注意事项)
<!-- endregion:toc -->

## 1. 📝 Summary

- ⏰ TODO

## 2. 🤖 什么是布尔属性

在 HTML 中，布尔属性（Boolean attributes）是一种特殊的属性类型，它们的存在与否决定了属性的值。也就是说，如果一个布尔属性被设置在元素上，无论其值是什么，该属性都被视为 `true`。如果该属性不存在，则它的值被视为 `false`。

布尔属性的特点是：

- **不需要指定值**：当布尔属性出现在元素上时，它默认为 `true`。
- **忽略属性值**：即使你给布尔属性指定了任何值（如 `checked="false"`），浏览器仍然会将其视为 `true`。
- **只有存在或不存在两种状态**：布尔属性要么存在并表示 `true`，要么不存在并表示 `false`。

### 2.1. 常见的布尔属性

以下是一些常见的布尔属性的例子：

- `disabled`：用于表单控件（如 `<input>` 或 `<button>`），用来禁用控件，使其不可交互。
- `readonly`：用于输入框（如 `<input type="text">` 或 `<textarea>`），防止用户修改内容。
- `checked`：用于复选框（`<input type="checkbox">`）和单选按钮（`<input type="radio">`），表示是否被选中。
- `selected`：用于下拉列表中的选项（`<option>`），表示该项是否被预先选择。
- `required`：用于表单字段（如 `<input>`、`<textarea>` 和 `<select>`），表示该字段必须填写才能提交表单。
- `open`：用于某些元素（如 `<details>`），表示该元素是否展开显示。

### 2.2. 使用示例

```html
<!-- 禁用按钮 -->
<button disabled>Click Me</button>

<!-- 只读文本框 -->
<input type="text" value="Read-only text" readonly />

<!-- 预先选中的单选按钮 -->
<input type="radio" name="choice" id="yes" checked />
<label for="yes">Yes</label>
```

在上面的例子中，`disabled`、`readonly` 和 `checked` 属性都是布尔属性。注意这些属性并没有显式地赋值为 `"true"` 或 `"false"`，而是简单地通过它们的存在来表达 `true` 的状态。

### 2.3. 在 JavaScript 中处理布尔属性

在 JavaScript 中，你可以通过检查元素的相应属性来判断布尔属性的状态。例如：

```javascript
const button = document.querySelector('button');
console.log(button.disabled);  // 输出 true 或 false
```

如果需要改变布尔属性的状态，可以直接设置属性的值为 `true` 或 `false`：

```javascript
// 启用按钮
button.disabled = false;

// 禁用按钮
button.disabled = true;
```

当你设置布尔属性为 `false` 时，实际上是从元素中移除了这个属性，这相当于将属性值设为 `false`。同样，设置为 `true` 则是添加了这个属性到元素上。

## 3. 🤖 布尔属性名称的由来

布尔属性的名称来源于数学和计算机科学中的布尔逻辑，这是以19世纪英国数学家乔治·布尔（George Boole）的名字命名的。布尔逻辑是一种代数系统，用于处理逻辑命题，它只有两个值：真（`true`）和假（`false`）。在编程中，布尔类型（boolean type）就是基于这种逻辑，用来表示二元状态的数据类型。

在HTML中，布尔属性的存在与否直接反映了这种二元状态。当一个布尔属性出现在元素上时，它的存在即代表了 `true` 的状态；而如果该属性没有出现在元素上，则意味着它的值为 `false`。这样的设计简化了标记语言的语法，并且使得这些属性的语义更加清晰明了。

例如，`<input type="checkbox" checked>` 中的 `checked` 属性就是一个布尔属性。它的存在表明这个复选框默认是被选中的，而不需要额外指定 `checked="true"` 或者 `checked="checked"` 这样的值。同样地，如果去掉了 `checked` 属性，那么复选框就默认为未选中状态。

这种设计符合布尔逻辑的基本原则，即一种属性要么具有某种特性（`true`），要么不具有（`false`），没有中间状态。因此，这些属性被称为“布尔属性”。它们在Web开发中提供了一种简洁的方式来表达特定的状态或行为，特别是在表单控件和其他交互元素中。


## 4. 🤖 请介绍一下 React 中组件的布尔属性

在 React 中，布尔属性的处理方式与原生 HTML 非常相似。当你在 JSX 中使用布尔属性时，React 会根据这些属性的存在与否来决定是否将其添加到最终生成的 DOM 元素上。如果布尔属性存在且值为 `true`，则该属性会被设置；如果值为 `false` 或者属性不存在，则不会被设置。

### 4.1. 布尔属性在 React 中的应用

#### 4.1.1. 1. 1. 1. 1. 简单示例
假设你有一个按钮，你想控制它是否禁用：

```jsx
const App = () => {
  const [isDisabled, setIsDisabled] = React.useState(true);

  return (
    <button disabled={isDisabled} onClick={() => setIsDisabled(!isDisabled)}>
      Click Me
    </button>
  );
};
```

在这个例子中，`disabled` 是一个布尔属性。当 `isDisabled` 为 `true` 时，`disabled` 属性会被应用到按钮上，使得按钮不可点击；当 `isDisabled` 为 `false` 时，`disabled` 属性不会被应用，按钮可以正常点击。

#### 4.1.2. 2. 2. 2. 2. 使用条件渲染
你也可以根据条件来决定是否渲染带有布尔属性的元素：

```jsx
const App = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      {isChecked && <p>Checkbox is checked</p>}
    </div>
  );
};
```

这里，`checked` 是一个布尔属性，用于表示复选框是否被选中。同时，我们还使用了条件渲染来显示文本信息，只有当复选框被选中（即 `isChecked` 为 `true`）时，才会渲染 `<p>` 标签。

#### 4.1.3. 3. 3. 3. 3. 自定义组件中的布尔属性
如果你创建了一个自定义组件，并希望传递布尔属性给它，你可以通过 props 来实现这一点。例如，一个可展开/折叠的面板组件：

```jsx
// Panel.js
const Panel = ({ isOpen, children }) => (
  <div style={{ display: isOpen ? 'block' : 'none' }}>
    {children}
  </div>
);

// App.js
const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Panel</button>
      <Panel isOpen={isOpen}>
        <p>This is the content of the panel.</p>
      </Panel>
    </div>
  );
};
```

在这个例子中，`isOpen` 虽然不是标准的布尔属性，但它作为一个 prop 传递给了 `Panel` 组件，用来控制内容的显示或隐藏。这种模式很常见，尤其是在构建复杂的 UI 时。

### 4.2. 注意事项

- 当你在 JSX 中使用布尔属性时，确保只传入布尔值。传入非布尔值（如字符串 "true" 或 "false"）可能会导致意外的行为。
- 如果你的布尔属性总是需要默认值，可以在组件内部设定默认值，或者在父组件中提供默认值。
- 在某些情况下，可能需要额外的逻辑来处理状态变化，比如使用 `useEffect` 来响应状态的变化并执行副作用。

通过这种方式，React 中的布尔属性能够帮助开发者以简洁明了的方式管理组件的状态和行为。