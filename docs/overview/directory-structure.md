---
sidebar_position: 4
toc_max_heading_level: 5
---

# 目录结构

> 模仿 [Project Directory Structure](https://isaacscript.github.io/main/directory-structure) 修改而来

##

```
├─.github/
├──src/
│   ├─client/
│   ├─server/
│   └─shared/
│  .eslintrc.cjs
│  .gitignore
│  .prettierrc
│  dependabot.yml
│  LICENSE
│  mod.info
│  package-lock.json
│  package.json
│  pipewrench.json
│  poster.png
│  readme.md
│  tsconfig.json
```

更多细节详述如下。您**不**需要知道所有这些文件的用途，根据需要使用即可。

### 目录

#### `.github`

该目录包含 GitHub Actions（即持续集成）的文件。

如果您不使用 GitHub，请随意删除此目录。

#### `src/client`、`src/server`、`src/shared`

这是 TypeScript 源目录。你的 mod 的所有 TypeScript 文件都应放在此处。

`client` 存放运行在客户端的代码。

`server` 存放运行在服务端的代码。

`shared` 存放不依赖客户端或服务端环境的代码。

#### `src/models`、`src/textures`、`src/sound`、`src/scripts`

相应资源的存放目录

#### `node_modules`

该目录包含项目的依赖项。（例如 TypeScript、TypeScriptToLua、ESLint 等）

将其留在原处并忽略它。

更多信息：

- 当您在包含 `package.json` 的目录中执行 `npm install` 后会生成 `node_modules` 文件夹。
- `node_modules` 包含很多文件，且不会被 Git 存储库跟踪。

#### `dist`

当你运行 `npm run compile` 命令后会生成该文件夹，输出结果与 `npm run watch` 相同，生成于项目目录下，方便查看生成后的代码（该文件夹不会被 Git 存储库跟踪）。

### 文件

#### `.eslintrc.cjs`

这是 [ESLint](https://eslint.org/)（TypeScript linter）的配置文件。

如果您需要禁用特定的 linting 规则，可以编辑此文件。

#### `.gitignore`

这包含不应添加到 Git 存储库（如果存在）的文件列表。如果您有不想提交到存储库的私人文件，您可以编辑此文件并将其添加。

#### `.prettierrc`

这是 [prettier](https://prettier.io/)（代码格式化）的配置文件。

如果您需要更改特定的格式化规则，可以编辑此文件。

#### `dependabot.yml`

用于 github 上检测项目依赖是否有新版本，如果不需要可以删除该文件。

#### `pipewrench.json`

这是 `PipeWrench` 的配置文件。您可以在 [这里](https://github.com/asledgehammer/PipeWrench-Compiler/blob/main/src/config.ts) 中查看该文件的格式(`PipeWrenchConfigSchema`)。

#### `mod.info`

lua mod 信息描述的文件，项目目前使用 `pipewrench.json` 生成 `mod.info`，该文件目前无用。

#### `LICENCE`

这是您项目的许可证。默认情况下为 MIT 许可证。

#### `package.json`

这是 Node 包管理器 [npm](https://www.npmjs.com/) 的配置文件。它包含项目描述和所有依赖项的列表。

如果您决定添加新的依赖项（例如 `npm install pipewrench-utils --save`），`npm` 则会自动相应地编辑 `package.json` 文件。（请谨慎添加 JavaScript/TypeScript 依赖项，因为它将[无法正常工作](https://isaacscript.github.io/main/gotchas/#npm-dependencies)。）

#### `package-lock.json`

这是 Node 包管理器 npm 的锁文件。

您不应该编辑此文件；只需将其保留在原处即可。

#### `poster.png`

mod 的海报图片

#### `README.md`

这是您项目的 README 文件，其中应包含您的模组的简短描述。它使用 [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)，这是 README 文件的标准格式。

#### `tsconfig.json`

这些是 TypeScript 编程语言的配置文件。

如果需要添加或删除特定的编译器标志，请编辑 `tsconfig.json`。
