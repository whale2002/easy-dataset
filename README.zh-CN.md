<div align="center">

# Easy Dataset

**一个强大的大型语言模型微调数据集创建工具**

[简体中文](./README.zh-CN.md) | [English](./README.md)

</div>

## 概述

Easy Dataset 是一个专为创建大型语言模型（LLM）微调数据集而设计的应用程序。它提供了直观的界面，用于上传特定领域的文件，智能分割内容，生成问题，并为模型微调生成高质量的训练数据。

通过 Easy Dataset，您可以将领域知识转化为结构化数据集，兼容所有遵循 OpenAI 格式的 LLM API，使微调过程变得简单高效。

## 功能特点

* **智能文档处理**：上传 Markdown 文件并自动将其分割为有意义的片段
* **智能问题生成**：从每个文本片段中提取相关问题
* **答案生成**：使用 LLM API 为每个问题生成全面的答案
* **灵活编辑**：在流程的任何阶段编辑问题、答案和数据集
* **多种导出格式**：以各种格式（Alpaca、ShareGPT）和文件类型（JSON、JSONL）导出数据集
* **广泛的模型支持**：兼容所有遵循 OpenAI 格式的 LLM API
* **用户友好界面**：为技术和非技术用户设计的直观 UI
* **自定义系统提示**：添加自定义系统提示以引导模型响应

## 本地运行

1. 克隆仓库：
   ```bash
   git clone https://github.com/whale2002/easy-dataset.git
   cd easy-dataset
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 启动开发服务器：
   ```bash
   npm run build
   npm run start
   ```

4. 打开浏览器并访问 `http://localhost:1717`