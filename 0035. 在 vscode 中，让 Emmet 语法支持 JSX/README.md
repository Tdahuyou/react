# 0035. 在 vscode 中，让 Emmet 语法支持 JSX

- 介绍如何配置 VSCode，让 Emmet 语法支持 JSX。

## 🔗 links

- https://eshwaren.medium.com/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c
  - Medium - Enable Emmet support for JSX in Visual Studio Code | React
- https://stackoverflow.com/questions/56311467/configure-emmet-for-jsx-in-vscode
  - Configure Emmet for JSX in VSCode

## 📒 notes

1. 打开 VSCode 设置
2. 搜索 `emmet.includeLanguages`
3. 加上 `"javascript": "javascriptreact"` 键值对

![](md-imgs/2024-11-06-19-23-25.png)

## 💻 demo - 测试效果

- 输入：`div>span`
  - ![](md-imgs/2024-11-06-19-23-40.png)
- 按下回车，将会快速生成：`<div><span></span></div>`
  - ![](md-imgs/2024-11-06-19-23-46.png)
- 输入：`.foo`
- 按下回车，将会快速生成：`<div className="foo"></div>`