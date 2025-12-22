const n=`# 模块标记

模块标记功能用于对圈选后的模块进行标记，方便其他设计稿类似模块的直接复用，无需重复生成。

## 功能描述

模块标记的工作流程如下：

1. **用户标记组件**：用户在设计稿中圈选并标记需要复用的模块
2. **系统截图**：系统自动对标记的模块进行截图，并将截图存储到 \`.sloth\\components.json\` 文件中
3. **OpenCV 图像匹配**：当打开新设计稿时，系统会提取设计稿中的模块，并使用 OpenCV 进行图像匹配，与已存储的组件截图进行比对
4. **匹配结果处理**：
   - **匹配成功**：自动映射到已标记的组件，组件映射弹窗显示已映射状态，AI 将跳过生成直接复用该组件
   - **匹配失败**：需要手动处理，用户可以手动选择已有组件或新建组件

![模块标记流程](https://h5.tencentmusic.com/resources/assets_sit/cos_f3a2c705b9cde323419bf481b870d5036988aa11.png)
`;export{n as default};
//# sourceMappingURL=module-marking-BKGhtggw.js.map
