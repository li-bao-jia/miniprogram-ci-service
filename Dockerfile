# 使用官方的Node.js镜像作为基础镜像
FROM node:18

# 设置工作目录
WORKDIR /node/micro/miniprogram-ci-service

# 复制package.json和package-lock.json
COPY package*.json ./

# 安装项目依赖
RUN npm install --registry=https://registry.npmmirror.com

# 复制项目文件到工作目录
COPY . .

# 暴露应用端口
EXPOSE 3000

# 启动应用
CMD ["node", "index.js"]
