#!/bin/bash

# 打印每个命令
set -x
#!/bin/bash

# 进入 Dockerfile 所在目录
cd "$(dirname "$0")"/..

# Build the Docker image
docker build -t libaojia/miniprogram-ci-service .

# Run the Docker container
# docker run -d -p 3000:3000 --name miniprogram-ci-service miniprogram-ci-service
