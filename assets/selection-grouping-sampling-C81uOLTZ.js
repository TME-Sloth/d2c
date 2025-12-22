const n=`# 圈选分组及采样

圈选分组功能允许你在设计稿预览页中手动划分代码结构区域，每个区域分别在不同的 [采样](https://modelcontextprotocol.io/specification/2025-11-25/client/sampling) 请求流程进行代码生成，提高转码效率和准确性。

## 操作步骤

1. 在 MCP 拦截页的设计稿预览页拖拽框选。

2. 框选生成组后可以点击“隐藏（显示）”查看是否有遗漏元素。

   ![拖拽框选](https://h5.tencentmusic.com/resources/assets_sit/cos_91f7fbb30bbdc729747efb40ab246cc99e55bf79.gif?imageMogr2/quality/90/thumbnail/1125x40000>)

3. 点击“取消组”可以取消当前组。

4. 右上角可查看圈选结果，支持嵌套查看及平铺查看。

5. 对于圈选后的组可以单独进行自定义提示词、[组件映射](/component-mapping)、[模块标记](module-marking)等操作。

   ![自定义提示词](https://h5.tencentmusic.com/resources/assets_sit/cos_3e1cc2a1af0e15917a6bbe6281af43634c624ab3.png)

   > 提示：自定义提示词可以输入\`@\`，下拉选择引用 组件映射 中导入的项目组件。

## 使用场景

- 设计稿结构复杂，一次性生成效果较差且耗时较长。
- 需要将某个模块单独封装成组件。
- 需要对某个模块进行单独的提示词优化、组件映射或模块标记。

## 配置说明

在 AI Coding 工具中（如 Copilot），需要设置允许 MCP 进行采样：

\`\`\`json
// .vscode/settings.json
{
  "chat.mcp.serverSampling": {
    "vite-react-ts-demo/.vscode/mcp.json: sloth-mcp": {
      // mcp.json 文件路径 mcp 名称
      "allowedDuringChat": true,
      "allowedModels": [
        // 允许采样的模型
        "copilot/claude-sonnet-4",
        "copilot/claude-sonnet-4.5"
      ]
    }
  }
}
\`\`\`

> TME-Continue 支持采样，无需配置，但需人工点击 “Allow”。
>
> ![采样](https://h5.tencentmusic.com/resources/assets_sit/cos_987fdf3e9c8c7ed28031e7ef4b5c5c5bb2ce743d.png)
`;export{n as default};
//# sourceMappingURL=selection-grouping-sampling-C81uOLTZ.js.map
