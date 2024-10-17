const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

function isGitRepository(dir) {
  return fs.existsSync(path.join(dir, '.git'));
}

function rewriteGitHistory(dir, maxLogs) {
  // 确保传入的目录是绝对路径
  const absoluteDir = path.resolve(dir);

  if (!isGitRepository(absoluteDir)) {
    console.error(`指定的目录 ${absoluteDir} 不是一个有效的 Git 仓库。`);
    return;
  }

  try {
    // 切换到仓库目录
    process.chdir(absoluteDir);

    // 获取最新的 maxLogs 条提交的哈希值
    const latestCommits = execSync(`git log --format=%H -n ${maxLogs}`)
      .toString()
      .trim()
      .split('\n');

    if (latestCommits.length === 0) {
      console.log(`没有找到任何提交记录。`);
      return;
    }

    // 创建一个新的临时分支
    const tempBranch = 'temp-branch';
    execSync(`git checkout -b ${tempBranch} ${latestCommits[0]}`);

    // 樱桃摘取剩余的提交
    for (let i = 1; i < latestCommits.length; i++) {
      execSync(`git cherry-pick ${latestCommits[i]}`);
    }

    // 重置主分支为新的临时分支
    execSync('git checkout main');
    execSync(`git reset --hard ${tempBranch}`);

    // 删除临时分支
    execSync(`git branch -D ${tempBranch}`);

    // 清理无用的对象
    execSync('git reflog expire --all --expire=now');
    execSync('git gc --aggressive --prune=now');

    console.log(
      `成功重写了 ${absoluteDir} 的历史记录，保留了最近的 ${maxLogs} 条提交。`
    );
  } catch (error) {
    console.error(`重写历史记录时出错: ${error.message}`);
    if (error.stderr) {
      console.error(error.stderr.toString());
    }
  }
}

// 示例调用
const dir = path.join(__dirname, '../'); // 替换为你的仓库路径
const maxLogs = 10; // 保留最近的 10 条提交

rewriteGitHistory(dir, maxLogs);