# 编写联机逻辑

## 客户端向服务端请求

```typescript title="src/client/example/req.ts"
import { onKeyPressed } from "@asledgehammer/pipewrench-events"

const test = (_key: string) => {
    const params = {
        key: _key,
    }
    sendClientCommand('Test', 'keyPressed', table)
}

// 使用 OnKeyPressed 事件模拟事件发生的情形
onKeyPressed.addEventListener(test)
```

```typescript title="src/server/example/receive.ts"
import { onClientCommand } from "@asledgehammer/pipewrench-events"

const test2 = (_module: string, _command: string, _player: IsoPlayer, _args: any) => {
    if (_module !== 'Test' || _command !== 'keyPressed') {
        return
    }
    const args = _args as { key: string }
    print(`[${_player.getUsername()}]${args.key}`)
}

// 使用 OnClientCommand 接收客户端的请求
onClientCommand.addEventListener(test2)
```

## 服务端向客户端传递数据

```typescript title="src/server/example/req.ts"
import { everyTenMinutes } from "@asledgehammer/pipewrench-events"

const test = () => {
    const params = {
        msg: 'broadcast',
    }
    // 如果 sendServerCommand 还额外传入一个玩家的参数，则该请求只会发送到指定玩家的客户端
    // 例：sendServerCommand(getSpecificPlayer(0), 'Test', 'broadcast', table)
    sendServerCommand('Test', 'broadcast', table)
}

everyTenMinutes.addListener(test)
```

```typescript title="src/client/example/receive.ts"
import { onServerCommand } from "@asledgehammer/pipewrench-events"

const test2 = (_module, _command, _args) => {
    if (_module !== 'Test' || _command !== 'broadcast') {
        return
    }
    const args = _args as { msg: string }
    print(args.msg)
}

onServerCommand.addListener(test2)
```
