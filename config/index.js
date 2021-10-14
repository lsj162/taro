const path = require('path');

console.log('process.env.TARO_ENV', process.env.TARO_ENV);


// FIXME: 环境参数
const env = {
  // 生产
  pro: {
    name: 'pro',
    // api代理
    api_host: '',
  },
  // 预发
  pre: {
    name: 'pre',
    // api代理
    api_host: '',
  },
  // 测试
  test: {
    name: 'test',
    // api代理
    api_host: '',
  },
  // 开发
  dev: {
    name: 'dev',
    // api代理
    api_host: '',
  },
};

const config = {
  projectName: 'myApp',
  date: '2021-10-14',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
    // FIXME: 全局变量
    UMI_ENV: JSON.stringify(env[process.env.UMI_ENV || 'dev']) // JSON.stringify('a')
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  // ...
  alias: {
    // FIXME: 别名
    '@': path.resolve(__dirname, '..', '/src/'),
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        // FIXME: 开启
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        // FIXME: 开启
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
