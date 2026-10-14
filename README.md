# Agent 工作台 · 展示版

文佳的两个个人 Agent 工作台的公开展示版。数据全部是虚构示例，不含源码和私人资料。

| 项目 | 网址 | 说明 |
|---|---|---|
| 上等马（个人项目工作台） | https://w9718448-lab.github.io/shangdengma/ | 浏览版：可查看全部页面，不能编辑 |
| 设计台（品牌设计工作流） | https://w9718448-lab.github.io/shangdengma/design-desk/ | 可操作：内容只存在当前页面，刷新即恢复示例 |

二维码：各自目录下的 `qr.png` / `qr.svg`。两个展示版都会按屏幕宽度自适应（电脑、平板、手机）。

**注意：这里的文件不会跟着源码自动变。** 改了私有仓库里的源码后，要按下面的命令重新生成并推送到这里，网页才会更新。

本仓库的文件都由私有仓库里的脚本生成，请勿手改：
- 根目录（上等马）：`shangdengma-workbench` 里运行 `bash scripts/static-demo/update.sh <本仓库目录>`
- `design-desk/`：`design-desk` 的 `node demo/build.mjs <本仓库>/design-desk`
