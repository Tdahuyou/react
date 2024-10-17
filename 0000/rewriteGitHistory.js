const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

function isGitRepository(dir) {
  return fs.existsSync(path.join(dir, '.git'));
}

function isMergeCommit(commitHash) {
  const logOutput = execSync(`git cat-file -p ${commitHash}`).toString();
  return logOutput.includes('parent') && logOutput.match(/parent /g).length > 1;
}

function deleteWorktreeIfExists(worktreePath) {
  try {
    execSync(`git worktree remove ${worktreePath}`);
    console.log(`已移除工作树 ${worktreePath}`);
  } catch (error) {
    // 如果工作树不存在，忽略错误
    if (!error.stderr.toString().includes('does not exist')) {
      throw error;
    }
  }
}

function deleteBranchIfExists(branchName) {
  try {
    execSync(`git branch -D ${branchName}`);
    console.log(`已删除分支 ${branchName}`);
  } catch (error) {
    // 如果分支不存在，忽略错误
    if (!error.stderr.toString().includes('not found')) {
      throw error;
    }
  }
}

function getWorktreePathForBranch(branchName) {
  const worktreeList = execSync('git worktree list').toString();
  const lines = worktreeList.trim().split('\n');
  for (const line of lines) {
    const [hash, branch, worktreePath] = line.split(/\s+/);
    if (branch === branchName) {
      return worktreePath;
    }
  }
  return null;
}

function forceDeleteBranch(branchName) {
  try {
    // 尝试删除工作树
    const worktreePath = getWorktreePathForBranch(branchName);
    if (worktreePath) {
      deleteWorktreeIfExists(worktreePath);
    }

    // 强制删除分支
    execSync(`git update-ref -d refs/heads/${branchName}`);
    console.log(`已强制删除分支 ${branchName}`);
  } catch (error) {
    console.error(`强制删除分支时出错: ${error.message}`);
    if (error.stderr) {
      console.error(error.stderr.toString());
    }
  }
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

    // 删除已存在的 temp-branch 工作树
    const worktreePath = getWorktreePathForBranch('temp-branch');
    if (worktreePath) {
      deleteWorktreeIfExists(worktreePath);
    }

    // 删除已存在的 temp-branch 分支
    deleteBranchIfExists('temp-branch');

    // 如果常规删除失败，尝试强制删除
    if (getWorktreePathForBranch('temp-branch')) {
      forceDeleteBranch('temp-branch');
    }

    // 创建一个新的临时分支
    const tempBranch = 'temp-branch';
    execSync(`git checkout -b ${tempBranch} ${latestCommits[0]}`);

    // 樱桃摘取剩余的提交
    for (let i = 1; i < latestCommits.length; i++) {
      const commitHash = latestCommits[i];
      let cherryPickCommand = `git cherry-pick ${commitHash}`;

      if (isMergeCommit(commitHash)) {
        // 如果是合并提交，使用 -m 1 选项来选择第一个父分支
        cherryPickCommand += ' -m 1';
      }

      execSync(cherryPickCommand);
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