//webpack配置，设置文件目录
module.exports = {
    configureWebpack: {
        resolve:{
            alias:{
                "assets":"@/assets",
                "components":"@/components",
                "views":"@/views",
                "api":"@/api",
                "utils":"@/utils"
            }
        },
        devServer:{
            proxy:{
                //跨越代理
                '/api':{
                    target:' https://c.y.qq.com',//转发
                    pathRewrite:{
                        '/api':'/'//路径重写
                    },
                }
            }
        }



    }
}