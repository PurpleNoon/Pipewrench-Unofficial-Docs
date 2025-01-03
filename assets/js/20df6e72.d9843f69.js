"use strict";(self.webpackChunkpipewrench_unofficial_docs=self.webpackChunkpipewrench_unofficial_docs||[]).push([[435],{8173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"tutorial/hello-world","title":"\u4f60\u597d\u4e16\u754c","description":"\u6784\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2a mod","source":"@site/docs/tutorial/hello-world.md","sourceDirName":"tutorial","slug":"/tutorial/hello-world","permalink":"/Pipewrench-Unofficial-Docs/docs/tutorial/hello-world","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/hello-world.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u914d\u7f6e","permalink":"/Pipewrench-Unofficial-Docs/docs/overview/configuration"},"next":{"title":"\u521b\u5efa\u4e00\u4e2a\u6bd2\u9a6c\u94c3\u85af","permalink":"/Pipewrench-Unofficial-Docs/docs/tutorial/create-poisonous-potato"}}');var o=n(4848),i=n(8453);const s={sidebar_position:1},a="\u4f60\u597d\u4e16\u754c",c={},l=[{value:"1. \u5efa\u7acb\u8fde\u63a5",id:"1-\u5efa\u7acb\u8fde\u63a5",level:2},{value:"2. \u5165\u53e3\u70b9\uff1a\u4e8b\u4ef6",id:"2-\u5165\u53e3\u70b9\u4e8b\u4ef6",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"\u4f60\u597d\u4e16\u754c",children:"\u4f60\u597d\u4e16\u754c"})}),"\n",(0,o.jsx)(t.p,{children:"\u6784\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2a mod"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\u8fd9\u91cc\u7684\u6559\u7a0b\u4fee\u6539\u81ea",(0,o.jsx)(t.a,{href:"https://theindiestone.com/forums/index.php?/topic/61-robomats-modding-tutorials-updated-12112013/",children:"\u8fd9\u91cc"})]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"1-\u5efa\u7acb\u8fde\u63a5",children:"1. \u5efa\u7acb\u8fde\u63a5"}),"\n",(0,o.jsx)(t.p,{children:"\u8981\u4fee\u6539\u6e38\u620f\uff0c\u6211\u4eec\u5fc5\u987b\u4ee5\u67d0\u79cd\u65b9\u5f0f\u4e0e\u5176\u4ea4\u4e92\u3002Lua \u7684\u4e3b\u8981\u76ee\u7684\u5728\u4e8e\u6269\u5c55\u7528\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00\u7f16\u5199\u7684\u73b0\u6709\u7a0b\u5e8f\u3002Project Zomboid \u7684\u4e3b\u8981\u57fa\u7840\u662f\u7528 Java \u7f16\u5199\u7684\u3002\u8fd9\u5c31\u662f lua \u548c java \u6e90\u4ee3\u7801\u4e4b\u95f4\u7684\u8fde\u63a5\u53d1\u751f\u7684\u5730\u65b9\u3002\u4f7f\u7528 typescript/lua\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbf\u95ee\u7528 Java \u6e90\u4ee3\u7801\u7f16\u5199\u7684\u6240\u6709\u516c\u5171\u51fd\u6570\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"function doStuff() {\r\n  // getSpecificPlayer() \u662f java \u6e90\u4ee3\u7801\u4e2d\u5b9a\u4e49\u7684\u516c\u5171\u65b9\u6cd5\r\n  // \u5b83\u8fd4\u56de\u73a9\u5bb6\u5bf9\u8c61\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u8bbf\u95ee\u5b83\u3002\r\n  getSpecificPlayer(0)\r\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"2-\u5165\u53e3\u70b9\u4e8b\u4ef6",children:"2. \u5165\u53e3\u70b9\uff1a\u4e8b\u4ef6"}),"\n",(0,o.jsx)(t.p,{children:"\u73b0\u5728\u6211\u4eec\u77e5\u9053\u6211\u4eec\u53ef\u4ee5\u4ece\u6211\u4eec\u7684\u4ee3\u7801\u4e2d \u8c03\u7528 Java \u65b9\u6cd5\uff0c\u4f46\u6211\u4eec\u4ecd\u7136\u4e0d\u77e5\u9053\u6211\u4eec\u662f\u5982\u4f55\u5b9e\u9645\u6267\u884c\u6211\u4eec\u7684\u4ee3\u7801\u7684\u3002\u5f53 Project Zomboid \u8fd0\u884c\u65f6\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e9b\u4e1c\u897f\u6765\u8fd0\u884c\u6211\u4eec\u7684\u4ee3\u7801\u3002\u8fd9\u5c06\u901a\u8fc7\u4e8b\u4ef6\u6765\u5b8c\u6210\u3002\u60a8\u53ef\u4ee5\u5c06\u4e8b\u4ef6\u89c6\u4e3a Project Zomboid \u6e90\u4ee3\u7801\u7684\u5165\u53e3\u70b9\u3002\u4e00\u65e6 Project Zomboid \u9047\u5230\u6765\u81ea mod \u7684\u4e8b\u4ef6\uff0c\u5b83\u5c31\u4f1a\u8c03\u7528\u76f8\u5173\u51fd\u6570\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",metastring:'title="src/client/example/hello.ts"',children:'import { everyTenMinutes } from "@asledgehammer/pipewrench-events"\r\n\r\nfunction sayStuff() {\r\n  // Java: \u6211\u4eec\u83b7\u53d6\u5230\u7b2c\u4e00\u4e2a\u73a9\u5bb6\uff0c\u5982\u679c\u662f\u5355\u4eba\u6a21\u5f0f\u4e0b\uff0c\u83b7\u53d6\u7684\u662f\u5f53\u524d\u73a9\u5bb6\r\n  let player = getSpecificPlayer(0)\r\n  // Java: \u8ba9\u73a9\u5bb6\u8bf4\u8bdd\r\n  player.Say("I like turtles.")\r\n}\r\n\r\n// \u8fd9\u4e2a\u4e8b\u4ef6\u5c06\u5728\u6e38\u620f\u4e2d\u6bcf\u5341\u5206\u949f\u89e6\u53d1\u4e00\u6b21\u3002\r\n// \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b sayStuff() \u662f\u5173\u8054\u65b9\u6cd5\uff0c\r\n// \u56e0\u6b64\u6bcf\u5341\u5206\u949f\u6267\u884c\u4e00\u6b21\u3002\r\neveryTenMinutes.addListener(sayStuff)\n'})}),"\n",(0,o.jsxs)(t.p,{children:["\u8fd9\u4e2a\u7b80\u77ed\u7684\u201c\u6a21\u7ec4\u201d\u8ba9\u73a9\u5bb6\u5728\u6e38\u620f\u4e2d\u6bcf\u5341\u5206\u949f\u8c08\u8bba\u4e00\u6b21\u4ed6\u5bf9\u6d77\u9f9f\u7684\u559c\u7231\u3002\u867d\u7136\u6ca1\u4ec0\u4e48\u7279\u522b\u7684\uff0c\u4f46\u80fd\u4f20\u8fbe\u51fa\u8981\u70b9\u3002\u6e38\u620f\u4e2d\u5df2\u7ecf\u6dfb\u52a0\u4e86\u8bb8\u591a\u4e0d\u540c\u7684\u4e8b\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5176\u7528\u4e8e\u6a21\u7ec4\uff0c\u800c\u4e14\u5f00\u53d1\u4eba\u5458\u8fd8\u5728\u4e0d\u65ad\u6dfb\u52a0\u65b0\u4e8b\u4ef6\u3002\u6709\u5173\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u67e5\u770b pz wiki \u4e0a\u7684",(0,o.jsx)(t.a,{href:"https://pzwiki.net/wiki/Lua_event",children:"\u4e8b\u4ef6\u53c2\u8003"}),"\u3002"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);