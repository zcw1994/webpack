
//引入path模块
const path = require('path');
//引入自动生成html模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
//引入copy文件插件
const CopyWebpackPlugin = require('copy-webpack-plugin')

//暴露一个对象
module.exports = {

  //模式
  mode:'development',
  
  //入口
  entry:'./src/index.js',

  //出口  需要管理的文件的去处
  output:{
    //输出文件的地址   项目根目录下的dist文件夹
    path:path.resolve(__dirname,'./dist'),
    filename:'bundle.js'   //打包处理后的文件名
  },

  //配置模块
  module:{
    //定义模块加载器的规则
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  //插件
  plugins:[
    //自动根据发展开发环境的index.html文件，生成一个生产环境的Html
    new HtmlWebpackPlugin({
      filename:'newIndex.html',
      template:'./index.html'//模板index文件
    }),
    new CopyWebpackPlugin([
      {
        from:'./lib/jquery.min.js',
        to:'lib'
      }
    ])

  ],

  //

  //解析
  resolve:{
    //设置别名
    alias:{
      vue : 'vue/dist/vue.esm.js' 
    }
  },

  //webpack-dev-server 的配置
  devServer:{
    contentBase:path.resolve(__dirname,'./dist')
  }

}