#!/bin/bash

# 打印每个命令
set -x
#!/bin/bash

# Build the Docker image
docker build -t libaojia/miniprogram-ci-service .

# Run the Docker container
# docker run -d -p 3000:3000 --name miniprogram-ci-service miniprogram-ci-service
