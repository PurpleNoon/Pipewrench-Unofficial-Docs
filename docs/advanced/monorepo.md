# monorepo

经过简单的测试，发现 `PipeWrench` 是可以支持 pnpm monorepo 的。

创建 `pnpm-workspace.yaml` 并添加相应的 packages

在 mod package 下声明依赖关系 `"@sakuratears/common-lib": "workspace:*"` 并执行 `pnpm install`

然后你就可以使用它了。不过需要注意的一点是，如果导入的代码需要在 client 和 server 中执行，
那么也需要[拆分](/docs/advanced/build-third-library#qa)。
