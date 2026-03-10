# 升级日志

记录 `miniprogram-ci-service` 各版本（tag）改动。

---

## 维护规则

- 每次发布新 tag 时，新增一个同名章节（建议统一使用 `vX.Y.Z`）。
- 变更按 `Added / Changed / Fixed / Docs` 分类记录。
- 每个版本至少包含：发布日期、核心改动、兼容性说明（如有）。


## [v1.0.1] - 2026-03-09

### Added
- 上传接口错误归一化处理，返回结构更一致（`state/message/data`）。

### Changed
- Docker 基础镜像升级到 `node:24-slim`。
- 服务启动流程与端口监听日志优化。

### Docs
- README 中 Node 版本说明与启动命令更新。

## [v1.0.0] - 2024-09-09

### Added
- 基于 HTTP API 的小程序上传与预览服务基础能力。
- 引入 `miniprogram-ci` 相关依赖与调用流程。

### Changed
- 项目启动入口与包信息整理。
- Dockerfile / 部署脚本初始化与更新。

### Docs
- `1.0.0`版本重命名`v1.0.0`，规范 Tags 命名。

