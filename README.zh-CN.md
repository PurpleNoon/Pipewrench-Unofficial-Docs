# PipeWrench 非官方文档

个人感觉 PipeWrench 目前还缺少一个更全面一点的文档（已有 [wiki](https://github.com/asledgehammer/PipeWrench/wiki)），
因此我创建了这个非官方文档来补充一些信息。

文档地址(WIP)：https://purplenoon.github.io/Pipewrench-Unofficial-Docs/

### 安装

```
$ yarn
```

### 本地开发

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 构建

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### 部署

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
