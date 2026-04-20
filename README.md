# MBTI 在线测试

一个纯静态的 MBTI 在线测试网页（HTML + CSS + JavaScript）。

## 本地运行

```bash
python3 -m http.server 8000
```

打开：`http://127.0.0.1:8000/index.html`

## 公网部署（GitHub Pages）

仓库已内置 GitHub Actions 工作流：`.github/workflows/deploy-pages.yml`。

### 1) 推送到 GitHub 仓库
确保默认分支为 `main`，并将代码推送到 `main`。

### 2) 开启 Pages
在 GitHub 仓库中打开：
`Settings` -> `Pages` -> `Build and deployment` -> `Source: GitHub Actions`

### 3) 触发部署
每次 push 到 `main` 会自动部署，也可在 `Actions` 页面手动运行 `Deploy static site to GitHub Pages`。

### 4) 访问公网链接
部署成功后，公网地址通常为：

`https://<你的GitHub用户名>.github.io/<仓库名>/index.html`

> 示例：`https://octocat.github.io/mbti-test/index.html`
