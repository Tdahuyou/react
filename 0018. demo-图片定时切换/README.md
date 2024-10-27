# [0018. demo-图片定时切换](https://github.com/Tdahuyou/react/tree/main/0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2)

demo 功能：
- 间隔 2s 切换图片
- 鼠标悬停在图片上时，停止切换
- 鼠标离开图片时，继续切换
```jsx
import { createRoot } from 'react-dom/client';
import './index.css';
import src1 from './assets/1.jpg';
import src2 from './assets/2.jpg';
import src3 from './assets/3.jpg';
const srcs = [src1, src2, src3]; //保存图片路径的数组
let index = 0; // 显示的图片索引
const container = document.getElementById('root');
container.onmouseenter = stop
container.onmouseleave = start
let timer;
const root = createRoot(container);
function render() {
  console.log('render')
  root.render(<img src={srcs[index]} alt='' />);
}
function start() {
  console.log('start')
  stop();
  timer = setInterval(() => {
    index = (index + 1) % 3;
    render();
  }, 2000);
}
function stop() {
  console.log('stop')
  clearInterval(timer);
}
render();
start();
```
