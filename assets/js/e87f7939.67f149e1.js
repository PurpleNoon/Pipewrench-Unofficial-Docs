"use strict";(self.webpackChunkpipewrench_unofficial_docs=self.webpackChunkpipewrench_unofficial_docs||[]).push([[903],{5821:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"tutorial/write-online-logic","title":"\u7f16\u5199\u8054\u673a\u903b\u8f91","description":"\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u8bf7\u6c42","source":"@site/docs/tutorial/write-online-logic.md","sourceDirName":"tutorial","slug":"/tutorial/write-online-logic","permalink":"/Pipewrench-Unofficial-Docs/docs/tutorial/write-online-logic","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/write-online-logic.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u6ce8\u610f\u4e8b\u9879","permalink":"/Pipewrench-Unofficial-Docs/docs/tutorial/notes"},"next":{"title":"\u521b\u5efa\u7b2c\u4e09\u65b9\u5e93","permalink":"/Pipewrench-Unofficial-Docs/docs/advanced/build-third-library"}}');var s=r(4848),a=r(8453);const i={},o="\u7f16\u5199\u8054\u673a\u903b\u8f91",c={},l=[{value:"\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u8bf7\u6c42",id:"\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u8bf7\u6c42",level:2},{value:"\u670d\u52a1\u7aef\u5411\u5ba2\u6237\u7aef\u4f20\u9012\u6570\u636e",id:"\u670d\u52a1\u7aef\u5411\u5ba2\u6237\u7aef\u4f20\u9012\u6570\u636e",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u7f16\u5199\u8054\u673a\u903b\u8f91",children:"\u7f16\u5199\u8054\u673a\u903b\u8f91"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u8bf7\u6c42",children:"\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u8bf7\u6c42"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="src/client/example/req.ts"',children:"import { onKeyPressed } from \"@asledgehammer/pipewrench-events\"\r\n\r\nconst test = (_key: string) => {\r\n    const params = {\r\n        key: _key,\r\n    }\r\n    sendClientCommand('Test', 'keyPressed', table)\r\n}\r\n\r\n// \u4f7f\u7528 OnKeyPressed \u4e8b\u4ef6\u6a21\u62df\u4e8b\u4ef6\u53d1\u751f\u7684\u60c5\u5f62\r\nonKeyPressed.addEventListener(test)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="src/server/example/receive.ts"',children:"import { onClientCommand } from \"@asledgehammer/pipewrench-events\"\r\n\r\nconst test2 = (_module: string, _command: string, _player: IsoPlayer, _args: any) => {\r\n    if (_module !== 'Test' || _command !== 'keyPressed') {\r\n        return\r\n    }\r\n    const args = _args as { key: string }\r\n    print(`[${_player.getUsername()}]${args.key}`)\r\n}\r\n\r\n// \u4f7f\u7528 OnClientCommand \u63a5\u6536\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\r\nonClientCommand.addEventListener(test2)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u670d\u52a1\u7aef\u5411\u5ba2\u6237\u7aef\u4f20\u9012\u6570\u636e",children:"\u670d\u52a1\u7aef\u5411\u5ba2\u6237\u7aef\u4f20\u9012\u6570\u636e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="src/server/example/req.ts"',children:"import { everyTenMinutes } from \"@asledgehammer/pipewrench-events\"\r\n\r\nconst test = () => {\r\n    const params = {\r\n        msg: 'broadcast',\r\n    }\r\n    // \u5982\u679c sendServerCommand \u8fd8\u989d\u5916\u4f20\u5165\u4e00\u4e2a\u73a9\u5bb6\u7684\u53c2\u6570\uff0c\u5219\u8be5\u8bf7\u6c42\u53ea\u4f1a\u53d1\u9001\u5230\u6307\u5b9a\u73a9\u5bb6\u7684\u5ba2\u6237\u7aef\r\n    // \u4f8b\uff1asendServerCommand(getSpecificPlayer(0), 'Test', 'broadcast', table)\r\n    sendServerCommand('Test', 'broadcast', table)\r\n}\r\n\r\neveryTenMinutes.addListener(test)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="src/client/example/receive.ts"',children:"import { onServerCommand } from \"@asledgehammer/pipewrench-events\"\r\n\r\nconst test2 = (_module, _command, _args) => {\r\n    if (_module !== 'Test' || _command !== 'broadcast') {\r\n        return\r\n    }\r\n    const args = _args as { msg: string }\r\n    print(args.msg)\r\n}\r\n\r\nonServerCommand.addListener(test2)\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(6540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);