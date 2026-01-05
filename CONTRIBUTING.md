# 协作开发指南

## 分支说明

- `main` - 主分支，保持稳定版本，不要直接在此分支开发
- `dev` - 开发分支，日常开发在此进行

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

### 5. 合并到主分支（阶段性完成时）
```bash
git checkout main
git merge dev
git push origin main
git checkout dev  # 切回开发分支继续开发
```

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
# 手动解决冲突文件
git add .
git commit -m "解决冲突"
git push origin dev
```

## 联系方式

遇到问题及时沟通！
