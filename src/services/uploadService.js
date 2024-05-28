exports.upload = async (params) => {
    // 项目类型
    let type = params.type;
    switch (type) {
        case 'miniProgram':
        case 'miniProgramPlugin':
        case 'miniGame':
        case 'miniGamePlugin':
            break;
        default:
            return {state: false, message: '无效的项目类型', data: {}};
    }

    // 合法的小程序/小游戏 appid
    let appId = params.appid
    if (!appId) {
        return {state: false, message: '无效的App Id', data: {}};
    }

    // 项目路径
    let projectPath = params.projectPath
    if (!projectPath) {
        return {state: false, message: '无效的项目路径', data: {}};
    }

    // 项目路径
    let privateKeyPath = params.privateKeyPath
    if (!privateKeyPath) {
        return {state: false, message: '无效的私钥的路径', data: {}};
    }

    // 小程序版本号
    let version = params.version
    if (!version) {
        return {state: false, message: '无效的版本号', data: {}};
    }

    // 小程序版本描述
    let desc = params.desc
    if (!desc) {
        return {state: false, message: '无效的版本描述', data: {}};
    }

    let robot = params.robot || 1
    let threads = params.threads || 3

    // 执行上传
    const ci = require('miniprogram-ci');

    const project = new ci.Project({
        type: type,
        appid: appId,
        projectPath: projectPath,
        privateKeyPath: privateKeyPath,
        //ignores: ['node_modules/**/*'], // 需要忽略的目录
    })

    const uploadResult = await ci.upload({
        project,
        desc: desc,
        version: version,
        setting: {                                  // 上传代码时候的设置
            es6: true,                              // 对应于微信开发者工具的 "es6 转 es5"
            es7: true,                              // 增强编译
            minify: true,                           // 上传时压缩所有代码，对应于微信开发者工具的 "上传时压缩代码"
            // disableUseStrict: true,                 // "增强编译" 开启时，是否禁用JS文件严格模式，默认为false
            // autoPrefixWXSS: true,                   // 上传时样式自动补全
            // codeProtect: true,                      // 对应于微信开发者工具的 "上传时进行代码保护"
            // minifyJS: true,
            // minifyWXML: true,
            // minifyWXSS: true
        },
        robot: robot,
        threads: threads,
        onProgressUpdate: console.log
    })

    return {state: true, message: '上传成功', data: uploadResult};
};
