# noah-cli

Noah前端团队项目脚手架

本项目为Noah前端团队自研项目, 目的是旨在提高后期项目初期可提供快速的符合业务标准的一套项目工程规范，无需重新从0到1去搭基建，节省大量成本。

## 仓库管理方式
采用 `pnpm` + `monorepo` 

## TEMPLATE支持
- [ ] vue3 + ts
- [ ] vue3
- [ ] react + ts

## docs 文档编写
基于 `vitepress` 

## TEMPLATE 项目架构

### 1. 代码规范
1. eslint
2. prettier
3. stylelint
4. husky
5. lint-staged
   
### 2. git 提交规范
1. commitlint
2. changelog 记录

### 3. 项目目录划分以及文件规范
1. 命名规范（采用 驼峰 OR `-`）, 举例：
   1. 文件夹/组件： MemoBack （√） OR memo-back
   2. utils/hooks: useThrollte (√) OR use-throllte
   3. 样式：
      1. 类命名：memo-wrapper
      2. ID 命名：小写驼峰
   
2. 统一定义好文件目录规范 `src/`
   1. router - 路由
   2. store - 数据
   3. hooks -  hooks
   4. utils - 工具方法 - (考虑发npm包)
   5. components - 全局组件
   6. views - 视图组件
   7. api - 接口
   8. assets - 公共资源
      1. styles 
      2. icons
      3. fonts
      4. imgs
      5. svgs
   
   
### 4. 支持自动化部署
1. gitlab ci - 需要运维支持，定义好 ci-yaml、docker-file 文件
     

### 5. 其他规范
1. 支持yapi-mock 功能
2. 封装好 axios 
3. `.vscode` 文件夹相关文件配置统一 - 做调研
4. 常见的 hooks 复用 
5. 常见的 工具函数 utils 复用 - 发npm包
6. 封装 ethers.js 常用的 Provider, Signer 

  

## noah-cli 发包约束规范
1. 版本迭代
   1. v1.0.2
   2. break-change
2. changelog文件
   