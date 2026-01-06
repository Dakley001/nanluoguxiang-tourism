# 南锣鼓巷旅游导览系统

北京南锣鼓巷旅游导览系统，包含Web前端、Django后端和微信小程序。

[在线体验](http://www.wky-news.top:9001/)

## 项目结构

```
├── backend/          # Django后端
├── frontend/         # Vue3前端
├── miniprogram/      # 微信小程序
└── README.md
```

## 技术栈

- **后端**: Django + Django REST Framework + SQLite
- **前端**: Vue3 + Vite + Element Plus
- **小程序**: 微信原生小程序

## 快速开始

### 后端启动
```bash
cd backend
python -m venv venv
.\venv\Scripts\activate  # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata initial_data
python manage.py runserver 8000
```

### 前端启动
```bash
cd frontend
npm install
npm run dev
```

### 小程序
使用微信开发者工具打开 `miniprogram` 目录

## 功能特点

- 胡同概览展示
- 10个POI景点信息
- 2条推荐游览路线
- 关键词搜索
- 响应式设计

## 作者

软件工程课程设计项目
