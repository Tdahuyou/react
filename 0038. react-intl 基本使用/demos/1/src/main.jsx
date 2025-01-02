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