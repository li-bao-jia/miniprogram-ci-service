<p align="center">miniprogram-ci-service</p>
<p align="center">使用 miniprogram-ci 实现一个微信小程序上传、预览微服务</p>

<p align="center">
<a href="https://github.com/li-bao-jia"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/li-bao-jia"><img src="https://img.shields.io/packagist/dt/li-bao-jia/we-chat-devtools" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/li-bao-jia/we-chat-devtools" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/li-bao-jia/we-chat-devtools" alt="License"></a>
</p>

### 项目概述
- 功能：通过 HTTP API 方式，指示 miniprogram-ci 操作微信小程序上传、预览
- 设计：支持 Docker 容器一键部署，可以在任何服务器上运行使用
- 特点：避免在项目中引入 miniprogram-ci，繁琐调用，简单使用 HTTP + 参数就可以上传微信小程序

### 安装指南

#### 源码安装

- 克隆代码：
    ```sh
    git clone https://github.com/li-bao-jia/miniprogram-ci-service.git
    ```
  
- 安装依赖：
    ```sh
    npm install
    ```

- 启动服务
    ```sh
    node index.js 
    ```

#### Docker 启动服务

- 克隆镜像
    ```sh
    docker pull libaojia/miniprogram-ci
    ```

- 启动服务
    ```sh
    docker run -d -p 3000:3000 -v <小程序源码路径>:<服务容器映射路径> -v <小程序上传密钥路径>:<服务容器传密钥路径> --name miniprogram-ci miniprogram-ci
    ```
  根据情况需要映射目录，一般情况需要映射两个目录，一个小程序源码路径，一个小程序上传密钥路径，可根据个人情况映射对应目录，如果未映射目录，在操作小程序源码上传时，会提示小程序源码路径未找到 或 上传密钥文件未找到 

### 使用说明

- 服务请动后，就可以通过 127.0.0.1:3000/upload 调用 miniprogram-ci 上传微信小程序
- 服务请动后，就可以通过 127.0.0.1:3000/preview 调用 miniprogram-ci 预览微信小程序
- miniprogram-ci其他操作，暂时未增加，如果需要增加，可以通过联系方式沟通，会根据情况酌情增加

### 示例用法

#### PHP 调用示例
    function callService($url, $data) {
        $options = [
            'http' => [
                'header'  => "Content-type: application/json\r\n",
                'method'  => 'POST',
                'content' => json_encode($data),
                //'timeout' => 10, // 设置超时时间为 10 秒
            ],
        ];
        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        if ($result === FALSE) {
            die('Error');
        }
        var_dump(json_decode($result, true));
    }

    // 调用 /upload 路由
    $uploadData = [
        'type' => 'miniProgram',
        'appid' => '你的小程序appid',
        'projectPath' => '你的小程序源码存放路径',
        'privateKeyPath' => '/data/key/private.你的上传密钥.key',
        'version' => '1.1.2',
        'desc' => '测试 miniprogram-ci 自动化上传代码',
        'robot' => 1,
        'threads' => '3',
    ];
    callService('http://localhost:3000/upload', $uploadData);

#### JS 调用示例
    const axios = require('axios');

    // 调用 /upload 路由
    const uploadData = async () => {
        try {
            const response = await axios.post('http://localhost:3000/upload', {
                key: 'value'
            });
            console.log('Upload response:', response.data);
        } catch (error) {
            console.error('Error uploading data:', error);
        }
    };
    
    // 调用 /preview 路由
    const previewData = async () => {
        try {
            const response = await axios.post('http://localhost:3000/preview');
            console.log('Preview response:', response.data);
        } catch (error) {
            console.error('Error previewing data:', error);
        }
    };
    
    // 调用上传和预览函数
    (async () => {
        await uploadData();
        await previewData();
    })();

### 文档参考:

- [微信开发者工具 · 小程序](https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html)

## 计划

+ √ 指示微信小程序上传 已完成
+ ……
+
+ x 完成单元测试、自动测试
+ ……


### 联系方式

- DEVELOPER: BaoJia Li

- QQ: 751818588

- EMAIL: livsyitian@163.com