# 创建第三方库

1. 按照 typescript-to-lua 文档 [发布模块](https://typescripttolua.github.io/docs/publishing-modules/) 的教程来创建库
2. 如果库中有需要在 client 和 server 中引入的代码，生成的文件则需要拆分到 client 和 server 中，目录示例如下：

```txt
project
|-- client.lua
|-- server.lua
```

或

```txt
project
|-- client
|-- |-- clientA.lua
|-- |-- 其他 client 文件
|-- server
|-- |-- serverA.lua
|-- |-- 其他 server 文件
```

如果有变更 client 和 server 位置的需求，可以在 `package.json` 中添加相应配置，client 和 server 配置均为可选项。

下面是配置示例：（假设 client 的文件和 server 的文件分别在 `dist/client` 和 `dist/server` 下）

```json
{
  // ...其他内容
  "pzpw": {
    "client": "dist/client",
    "server": "dist/client"
  }
}
```

## QA

Q1. 为什么 client 和 server 中引入的代码需要拆分？

A1. 因为默认情况下，生成的文件在 shared 中，导致 client 和 server 对应的代码在运行时报错。因此 client 和 server 中的代码需要分别放到对应的目录下才可以正常运行。