---
sidebar_position: 3
---

# 开始

## 1. 安装 Node.js

为了使用 TypeScript 编程语言编写内容，我们需要 Node.js。如果您尚未安装它，请从 [Node.js 官网](https://nodejs.org/) 下载页面下载并安装它。

## 2. 安装 VSCode

Visual Studio Code（简称 VSCode）可能是 TypeScript 的最佳文本编辑器。如果您尚未安装它，请从 VSCode 下载页面下载并安装它。

（如果您通常使用其他 TypeScript 编辑器（如 WebStorm），那么请随意使用它。）

## 3. 拉取项目模板

从 [PipeWrench-Template](https://github.com/asledgehammer/PipeWrench-Template) 下载模板项目。或者如果你有 [git](https://git-scm.com/) 的话，也可以使用 git 拉取，建议使用 git 来管理项目代码。

由于地区原因，在中国可能无法登录 github，你可以使用一些工具来提供一些帮助，例如 [steamcommunity 302](https://www.dogfight360.com/blog/686/)。

> 截止到 2024-12-30，`PipeWrench` 还没有类似 `create-pipeWrench` 的命令行工具，因此只能手动拉取

请注意，您的项目目录不应放在 `Zomboid/mods` 或者 `Zomboid/Workshop`！这是因为 _僵尸毁灭工程_ 会在那里同步您的 mod。

## 4. 安装项目依赖

打开一个新的命令提示符窗口。（或者，随意使用 Windows 终端、PowerShell、Git Bash 等）

> 在安装项目依赖前，执行以下命令更换 npm 源，用来加速国内依赖安装
>
> ```shell
> npm config set registry https://registry.npm.taobao.org
> ```

打开到项目目录，安装项目依赖

```shell
npm install
```

或者 `pnpm` 也可以

```shell
pnpm install
```

## 5. 更改 mod 输出目录并启动项目

编辑 `package.json`，将 watch 命令的输出目录 `~/Zomboid/mods` 更改为你的僵尸毁灭工程的 mods 目录（例如：`C:\Users\{用户名}\Zomboid\mods`）

然后运行：

```shell
npm run watch
```

## 6. 开始
就这样！现在你可以打开游戏，启用 mod 并进入存档观察一下效果，或者直接从 `src/` 开始编码！