// module.exports = {
//   "extends": [],
//   "rules": {
//     "react/jsx-uses-react": "off",
//     "react/react-in-jsx-scope": "off"
//   },

// }

module.exports = {
  // 父级目录中寻找
  root: true,
  presets: [],
  // 插件
  plugins: [],
  // 扩展
  extends: [
    "taro/react",
    'eslint:recommended', // 默认
    // "plugin:react/recommended",
    // 'plugin:@typescript-eslint/recommended',
  ],
  // 环境定义，一组预定义的全局变量
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // 重置解析器
  // parser: '@typescript-eslint/parser',
  // 自定义规则
  rules: {
    'eqeqeq': 'error', // 要求使用 === 和 !==
    'no-console': 'error',
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  globals: {
    UMI_ENV: true,
  }
}
