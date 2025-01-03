---
sidebar_position: 1
---

# 你好世界

构建你的第一个 mod

> 这里的教程修改自[这里](https://theindiestone.com/forums/index.php?/topic/61-robomats-modding-tutorials-updated-12112013/)

<!-- 开始该节教程前，默认你已掌握 `typescript` 且已了解 [TypescriptToLua 的注意事项](https://typescripttolua.github.io/docs/caveats/) -->

## 1. 建立连接

要修改游戏，我们必须以某种方式与其交互。Lua 的主要目的在于扩展用其他编程语言编写的现有程序。Project Zomboid 的主要基础是用 Java 编写的。这就是 lua 和 java 源代码之间的连接发生的地方。使用 typescript/lua，我们可以访问用 Java 源代码编写的所有公共函数。

```typescript
function doStuff() {
  // getSpecificPlayer() 是 java 源代码中定义的公共方法
  // 它返回玩家对象，我们可以在代码中访问它。
  getSpecificPlayer(0)
}
```

## 2. 入口点：事件

现在我们知道我们可以从我们的代码中 调用 Java 方法，但我们仍然不知道我们是如何实际执行我们的代码的。当 Project Zomboid 运行时，我们需要一些东西来运行我们的代码。这将通过事件来完成。您可以将事件视为 Project Zomboid 源代码的入口点。一旦 Project Zomboid 遇到来自 mod 的事件，它就会调用相关函数。

```typescript title="src/client/example/hello.ts"
import { everyTenMinutes } from "@asledgehammer/pipewrench-events"

function sayStuff() {
  // Java: 我们获取到第一个玩家，如果是单人模式下，获取的是当前玩家
  let player = getSpecificPlayer(0)
  // Java: 让玩家说话
  player.Say("I like turtles.")
}

// 这个事件将在游戏中每十分钟触发一次。
// 在这种情况下 sayStuff() 是关联方法，
// 因此每十分钟执行一次。
everyTenMinutes.addListener(sayStuff)
```

这个简短的“模组”让玩家在游戏中每十分钟谈论一次他对海龟的喜爱。虽然没什么特别的，但能传达出要点。游戏中已经添加了许多不同的事件，我们可以将其用于模组，而且开发人员还在不断添加新事件。有关完整列表，请查看 pz wiki 上的[事件参考](https://pzwiki.net/wiki/Lua_event)。
