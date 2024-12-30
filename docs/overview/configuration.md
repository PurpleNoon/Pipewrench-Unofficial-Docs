---
sidebar_position: 5
---

# 配置

## `pipewrench.json`

### `modInfo`

用于配置 `mod.info` 的内容

```json title="示例"
{
  "modInfo": {
    "name": "My First Mod",
    "poster": "poster.png",
    "description": "arf",
    "id": "myFirstMod",
    "url": "https://www.google.com"
  },
  "modelsDir": "./src/models",
  "texturesDir": "./src/textures",
  "soundDir": "./src/sound",
  "scriptsDir": "./src/scripts"
}
```

### `modInfo.name`

mod 名称

### `modInfo.poster`

mod 海报图片

### `modInfo.id`

mod 唯一标识，不能和其他 mod 相同

### `modInfo.description`

mod 描述

### `modInfo.url`

mod 地址

### `modelsDir`

存放模型资源的文件夹

### `texturesDir`

存放贴图资源的文件夹

### `soundDir`

存放声音资源的文件夹

### `scriptsDir`

存放脚本文件的文件夹

## `package.json`

```json title="示例"
{
  "pzpw": {
    "client": "dist/client",
    "server": "dist/client"
  }
}
```

### `pzpw.client`

在 `client` 中引入代码的存放位置（如果当前项目为第三方库）

### `pzpw.server`

在 `server` 中引入代码的存放位置（如果当前项目为第三方库）
