export default {
  pages: [
    'pages/bar1/index',
    'pages/bar1/login/index',

    'pages/bar2/index',
    'pages/bar3/index',
  ],

  tabBar: {
    // 测试，无效
    // custom: true,
    list: [
      {
        pagePath: 'pages/bar1/index',
        text: '菜单1',
      },
      {
        pagePath: 'pages/bar2/index',
        text: '菜单2',
      },
      {
        pagePath: 'pages/bar3/index',
        text: '菜单3',
      },
    ],
  },

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
};
