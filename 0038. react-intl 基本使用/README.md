# [0038. react-intl 基本使用](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8)

<!-- region:toc -->
- [1. 🔗 react-intl 官方文档](#1--react-intl-官方文档)
- [2. 🔍 Message Syntax](#2--message-syntax)
- [3. 📒 react-intl 简介](#3--react-intl-简介)
- [4. 📒 认识 ICU (International Components for Unicode)](#4--认识-icu-(international-components-for-unicode))
- [5. 💻 demos.1 - react-intl 基本使用](#5--demos1---react-intl-基本使用)
- [6. 🔍 如何判断传入的 locale 是否是合法值](#6--如何判断传入的-locale-是否是合法值)
<!-- endregion:toc -->
- React-Intl 是一个强大的工具，可帮助开发人员轻松管理和本地化他们的 React 应用程序。

## 1. 🔗 react-intl 官方文档

- https://formatjs.github.io/docs/getting-started/installation/

## 2. 🔍 Message Syntax

- https://formatjs.github.io/docs/core-concepts/icu-syntax/
- Message Syntax 是一种用于格式化消息的语法，它支持嵌入式的文本替换和格式化，并且可以处理不同语言的特殊规则。
- 和 ICU Message Syntax 类似。
- 比如，我们可以使用 Message Syntax 来创建一条包含日期和时间的消息。
  - 通过使用 `{key, type, format}` 格式，我们可以根据不同的条件选择输出不同的字符串，从而实现更灵活的消息显示方式。
  - 

## 3. 📒 react-intl 简介

- React-Intl 是一个开源 JavaScript 库，用于在 React 应用程序中实现国际化。它提供了一组工具来处理应用程序中的本地化需求，包括日期、时间、货币和消息等。
- React-Intl 的主要功能之一是支持多语言翻译。它允许开发人员将应用程序的文本和消息存储在一个外部文件中，并使用相应的语言代码来加载正确的翻译版本。这使得开发人员可以轻松地为不同的语言环境创建本地化的应用程序，而无需手动编写每个字符串的翻译。
- 除了多语言翻译外，React-Intl 还提供了其他有用的特性，例如格式化日期和时间、货币转换以及自定义消息解析器。这些功能可以帮助开发人员更轻松地管理应用程序中的本地化需求，并确保它们正确地显示给用户。
- React-Intl 还与许多流行的前端框架（如 Next.js 和 Gatsby）集成良好，使其成为构建现代 Web 应用程序的理想选择。

## 4. 📒 认识 ICU (International Components for Unicode)

- **简介**
  - ICU 是一个被广泛使用的 C/C++ 和 Java 库集合，为软件开发者提供了一套完整的国际化和本地化解决方案。
- **功能**
  - 支持文本处理、字符集转换、格式化数字、货币、日期/时间、消息格式化以及排序和查找等操作。
- **国际化与本地化**
  - 提供了工具和库来帮助应用程序适配不同语言环境和地区规范，确保应用可以正确地显示和处理来自世界各地的文本。
- **MessageFormat**
  - 包含了一个强大的消息格式化系统，允许创建复杂的、多语言支持的消息模板，可以根据用户输入或程序状态动态生成适当的语言版本内容。
- **平台支持**
  - ICU 支持多种操作系统，并且其功能可以通过多个编程接口访问，包括但不限于 C/C++、Java、.NET 和 Python。
- **社区与维护**
  - 由 Unicode 组织维护，得到了全球开发者的贡献和支持，保证了其稳定性和可靠性。

## 5. 💻 demos.1 - react-intl 基本使用

```js
import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';

// 系统需要支持哪些语言
const LOCALE_TYPE = {
  ZH_CN: 'zh-cn',
  EN: 'en',
}

// 系统中用到的所有文本内容，都可以统一配置到一个 messages 模块中。
// 在 key 的命名上，可以根据页面来对文本做分组，以便管理和查阅。
const messages = {
  [LOCALE_TYPE.ZH_CN]: {
    "page1.xxx.xxx.currentTime": "当前时间：今天是 {ts, date, ::yyyy年M月d日 hh:mm:ss}",
    "page2.xxx.xxx.currency": "人民币：",
  },
  [LOCALE_TYPE.EN]: {
    "page1.xxx.xxx.currentTime": "Current Time: Today is {ts, date, ::MMMM d, yyyy hh:mm:ss}",
    "page2.xxx.xxx.currency": "USD: ",
  }
}

const getCurrencyCode = (locale) => locale === LOCALE_TYPE.ZH_CN ? "CNY" : "USD";

function App() {
  const [locale, setLocale] = useState(LOCALE_TYPE.ZH_CN);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALE_TYPE.EN}>
      <div>
        <select value={locale} onChange={(e) => setLocale(e.target.value)}>
          <option value={LOCALE_TYPE.ZH_CN}>中文</option>
          <option value={LOCALE_TYPE.EN}>English</option>
        </select>
        <p>
          <FormattedMessage id="page1.xxx.xxx.currentTime" values={{ ts: currentDate }} description="页面 1 中的 xxx 的 xxx 的系统当前时间" />
          <br />
          <FormattedMessage id="page2.xxx.xxx.currency" description="页面 2 中的 xxx 的 xxx 的金额标签" />
          <FormattedNumber value={19} style="currency" currency={getCurrencyCode(locale)} description="页面 2 中的 xxx 的 xxx 的金额" />
        </p>
      </div>
    </IntlProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

- 最终渲染结果：
  - 中文：
    - ![](assets/2025-01-02-15-45-37.png)
  - 英文：
    - ![](assets/2025-01-02-15-45-44.png)
- IntlProvider - 用于提供消息数据。
  - messages
    - messages 属性绑定系统消息数据，以供 `<Formatted*>` 组件通过 id 来访问这些数据。
    - 这里提到的 id 其实就是 messages 对象的 key。
  - locale
    - 用于指定当前应用使用的语言环境，它是一个必须的字段，如果不填，则默认为 `'en'`。
    - locale 的数据类型是一个字符串，但是不能是随意的值，必须能够通过 `Intl.NumberFormat.supportedLocalesOf(locale)` 函数检测。
    - 对于 locale，常见的一些标准值都是合法的，比如 zh、zh-cn、zh-CN、en、de、ko、ja 等等。在不确定自己写的值是否支持，可以先通过 `Intl.NumberFormat.supportedLocalesOf(locale)` 函数来检测一下。
  - defaultLocale
    - defaultLocale 用于修改 locale 的默认值，会自动使用 defaultLocale。
    - 值得注意的是 - 如果 locale 不合法，程序会直接报错，而非使用 defaultLocale。
- FormattedMessage、FormattedNumber - 用于格式化消息数据，让数据展示格式具备国际化需求。
  - 它们是用于格式化消息的组件。
  - description 属性
    - 用于描述这个消息是啥玩意儿，这可以根据咱们的理解随便书写。
  - FormattedMessage 的 id
    - 用于标识使用什么字符串来占位。
  - FormattedMessage 的 values
    - 用于给消息中的占位符变量传递数据。
    - 比如 {ts, date, ::yyyy年M月d日 hh:mm:ss}，这里的 ts 就是占位符。
    - date 是 ICU 的一个格式化类型，它表示一个日期。（除了 date，还有 number、time 等等）
      - docs：https://formatjs.github.io/docs/core-concepts/icu-syntax/
    - 最后一部分 `::yyyy年M月d日 hh:mm:ss` 用于指定日期的格式。
    - 上述这种结构 `{key, type, format}` 是通用的，其中 key 是必填的，其他的都是根据需求可选的。
  - `Formatted*` 有很多，比如这里的 FormattedNumber
    - docs：https://formatjs.github.io/docs/intl/
    - 小结：其实用一个 FormattedMessage 基本就够了，其他的 `Formatted*` 都可以基于 `FormattedMessage` 来实现，如果有一些简单的格式化的逻辑需求，完全可以自己实现。

```js
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { IntlProvider, FormattedMessage, FormattedDate } from 'react-intl';

const LOCALE_TYPE = {
  ZH_CN: 'zh-250102',
  EN: 'en',
}

const messages = {
  [LOCALE_TYPE.ZH_CN]: {
    "currentTime": "今天是 {date}",
  },
  [LOCALE_TYPE.EN]: {
    "currentTime": "Today is {date}",
  }
}

function App() {
  const [_locale, setL] = useState(LOCALE_TYPE.ZH_CN);

  return (
    <IntlProvider messages={messages[_locale]} locale={_locale} defaultLocale={LOCALE_TYPE.EN}>
      <div>
        <select value={_locale} onChange={(e) => setL(e.target.value)}>
          <option value={LOCALE_TYPE.ZH_CN}>中文</option>
          <option value={LOCALE_TYPE.EN}>English</option>
        </select>
        <p>
          <FormattedMessage id="currentTime" values={{ date: <FormattedDate value={new Date()} /> }} />
        </p>
      </div>
    </IntlProvider>
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

## 6. 🔍 如何判断传入的 locale 是否是合法值

- https://github.com/formatjs/formatjs/blob/%40formatjs/intl%403.0.4/packages/intl/src/create-intl.ts#L77
- @formatjs/intl@3.0.4/packages/intl/src/create-intl.ts 源码

```js
const locale = 'xxx'
if (!Intl.NumberFormat.supportedLocalesOf(locale).length) {
    console.log(locale, '不支持')
}
// 🔗 MDN Intl => doc: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl


// locale 不是一个随意的字符串，如果传入非法值是会报错的，比如
Intl.NumberFormat.supportedLocalesOf('Tdahuyou&We')
// ❌
// Uncaught RangeError: Incorrect locale information provided
//     at Function.supportedLocalesOf (<anonymous>)
//     at <anonymous>:1:19

// 至于什么值是合法的，什么值是非法的，MDN 上提到 locale 必须是一个  BCP 47 语言标记的字符串。
// 🔗 BCP 47 语言标记 => https://datatracker.ietf.org/doc/html/rfc5646
// 文章尚未仔细读过。
// 通过简单的自测，感觉合法的 locale 蛮奇怪的，常见的一些标准值都是合法的，比如 zh、zh-cn、zh-CN、en、de、ko、ja 等等。
// 同时，locale 可以是一些奇怪的值，比如 zh-250102
// 下面是简单自测的结果：
Intl.NumberFormat.supportedLocalesOf('zh') // => ['zh']
Intl.NumberFormat.supportedLocalesOf('zh-cn') // => ['zh-CN']
Intl.NumberFormat.supportedLocalesOf('zh-CN') // => ['zh-CN']
Intl.NumberFormat.supportedLocalesOf('en') // => ['en']
Intl.NumberFormat.supportedLocalesOf('de') // => ['de']
Intl.NumberFormat.supportedLocalesOf('ko') // => ['ko']
Intl.NumberFormat.supportedLocalesOf('ja') // => ['ja']

Intl.NumberFormat.supportedLocalesOf('zh-250102') // => ['zh-250102']
```

