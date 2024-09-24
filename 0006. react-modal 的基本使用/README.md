# 0006. react-modal 的基本使用

## 🔗 链接

- npm react-modal：https://www.npmjs.com/package/react-modal?activeTab=readme
- github react-modal：https://github.com/reactjs/react-modal

## 🤖 react-modal 中的 contentLabel 属性有什么用？

`react-modal` 是一个常用的 React 弹出模态框库，它提供了许多配置选项来定制模态框的行为和样式。其中一个重要的属性是 `contentLabel`，它用于给模态框添加一个可访问性的标签（aria-label），以便屏幕阅读器和其他辅助技术能够更好地理解和描述模态框的内容。

### `contentLabel` 的作用

1. **可访问性（Accessibility）**：`contentLabel` 用于为模态框添加一个描述性的标签，这个标签会被屏幕阅读器读取，帮助视障用户理解模态框的内容。这对于提高应用的可访问性非常重要。
2. **ARIA 标签**：在 HTML 中，`aria-labelledby` 和 `aria-label` 属性用于提供额外的信息，帮助辅助技术（如屏幕阅读器）更好地理解和描述页面上的元素。`contentLabel` 会在模态框的 `role="dialog"` 元素上设置 `aria-label` 属性。

### 示例代码

下面是一个使用 `react-modal` 的示例，展示了如何使用 `contentLabel` 属性：

#### 安装 `react-modal`

首先，确保你已经安装了 `react-modal`：

```sh
npm install react-modal
```

#### 使用 `contentLabel`

```jsx
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // 设置应用根元素

const App = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example modal dialog">
        <h2>模态框标题</h2>
        <p>这是模态框的内容。</p>
        <button onClick={closeModal}>关闭模态框</button>
      </Modal>
    </div>
  );
};

export default App;
```

### 解释

在上面的示例中：

- `contentLabel="Example modal dialog"` 为模态框提供了一个描述性的标签，告诉屏幕阅读器这是一个“示例模态对话框”。
- 当模态框打开时，屏幕阅读器会读取这个描述性的标签，帮助视障用户理解模态框的作用。
- `Modal.setAppElement('#root')` 设置了应用的根元素，这对于确保模态框的正确渲染和可访问性非常重要。

### 为什么 `contentLabel` 很重要

1. **辅助技术兼容性**：`contentLabel` 使得模态框更加兼容辅助技术，如屏幕阅读器。
2. **用户体验**：对于依赖屏幕阅读器的用户来说，清晰的标签可以提高用户体验。
3. **合规性**：遵循无障碍设计的最佳实践，确保你的应用符合 WCAG（Web Content Accessibility Guidelines）的要求。

### 结论

`contentLabel` 属性在 `react-modal` 中是一个重要的可访问性特性，它通过提供一个描述性的标签来增强模态框的可访问性。正确使用 `contentLabel` 可以帮助确保所有用户，包括那些依赖辅助技术的用户，都能够理解和使用你的模态框。

##