# 协作开发指南

## 分支说明

| 分支 | 用途 | 权限 |
|------|------|------|
| `main` | 主分支，稳定版本 | 仅项目负责人可合并 |
| `dev` | 开发分支，日常开发 | 所有协作者可推送 |

## 开发流程

### 1. 克隆仓库（首次）
```bash
git clone https://github.com/Dakley001/nanluoguxiang-tourism.git
cd nanluoguxiang-tourism
```

### 2. 切换到开发分支
```bash
git checkout dev
```

### 3. 开始开发前，先拉取最新代码
```bash
git pull origin dev
```

### 4. 修改代码后提交
```bash
git add .
git commit -m "描述你的修改内容"
git push origin dev
```

### 5. 请求合并到主分支
在 GitHub 网页上：
1. 进入仓库页面
2. 点击 **Pull requests** → **New pull request**
3. 选择 `base: main` ← `compare: dev`
4. 填写标题和描述
5. 点击 **Create pull request**
6. 等待项目负责人审批合并

⚠️ **注意：请勿直接向 `main` 分支推送代码**

## 提交信息规范

- `feat: 新增xxx功能`
- `fix: 修复xxx问题`
- `docs: 更新文档`
- `style: 调整样式`
- `refactor: 重构代码`

## 冲突处理

如果推送时提示冲突：
```bash
git pull origin dev
# 手动解决冲突文件（删除 <<<<<<< ======= >>>>>>> 标记）
git add .
git commit -m "解决冲突"
git push origin dev
```

## 模块分工

| 成员 | 负责模块 |
|------|----------|
| 项目负责人 | backend/ + frontend/ |
| 协作者 | miniprogram/ + 文档 |

尽量修改自己负责的模块，减少冲突。

## 联系方式

遇到问题及时沟通！
