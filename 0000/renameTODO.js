/**
 * 根据编号，更新 TODO.md 中对应编号的名称。
 */
const fs = require('fs');
const path = require('path');

const IGNORE_DIRS = ['.git', '.vscode', '0000', '9999', '9998'];
const BASE_DIR = path.resolve(__dirname, '..');
console.log(BASE_DIR);

const DIR_MAP = {};
// {
//   0001: '0001. Hello Wrold',
//   0002: '0002. react 组件名的命名规则',
//   xxx: '...',
// }

function getDirList(base_path) {
  const dir_name_list = fs.readdirSync(base_path);
  for (let dir_name of dir_name_list) {
    if (IGNORE_DIRS.includes(dir_name)) continue;
    const file_path = path.join(base_path, dir_name);
    const stats = fs.lstatSync(file_path);

    if (stats.isDirectory()) {
      // 获取目录编号和完整目录名称
      const dir_num = dir_name.slice(0, 4); // 取前4个字符作为编号
      DIR_MAP[dir_num] = dir_name;
    }
  }
}

getDirList(BASE_DIR);
// console.log(DIR_MAP);

// 读取 TODO.md 内容
const todo_contents = fs.readFileSync(path.resolve(BASE_DIR, 'TODO.md'), 'utf8');
const todo_lines = todo_contents.split('\n');

// 更新 TODO.md 中的条目
for (const key in DIR_MAP) {
  const value = DIR_MAP[key];
  todo_lines.forEach((line, index) => {
    let newLine = line;

    // 匹配主项或子项
    const match = line.match(/(\s*-\s*\[\s*x?\s*\]\s*)(\d{4})(.*)/);
    if (match && match[2] === key) {
      // 替换匹配到的行，并去掉数字后的所有文本
      newLine = `${match[1]}${value}`;
    }

    if (newLine !== line) {
      todo_lines[index] = newLine;
    }
  });
}

const updatedTodoContents = todo_lines.join('\n');
fs.writeFileSync(
  path.resolve(BASE_DIR, 'TODO.md'),
  updatedTodoContents,
  'utf8'
);
console.log('Updated TODO.md successfully.');