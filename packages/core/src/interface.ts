export interface Particle {
    // 注册中心
    url: string
    // 库的名称
    library: string
}

export interface Config {
    /**
     * 默认为web在浏览器中使用. see https://webpack.js.org/configuration/target/
     * 
     * 新增一个类型: web-rwp-particle web的粒子，做为微前端的构建
     */
    target: 'web-rwp-particle' | 'web' | 'webworker' | 'async-node' | 'node' | 'electron-main' | 'electron-renderer' | 'node-webkit' | string;
    // 额外的babel引用
    extraBabelIncludes: RegExp[]
    // 开发服务器配置 see https://webpack.js.org/configuration/dev-server/
    devServer: {
        // 指定要使用的主机
        host?: string,
        // 使用http2来进行开发
        http2?: boolean,
        // 端口号
        port?: number,
        // 代理信息
        proxy?:{
            [key: string]: any
        }
    },
    // 微前端的密钥信息
    particle: Particle | undefined
}