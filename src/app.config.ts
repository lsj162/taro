// yarn iconfont-taro --config iconfont.json
import { useGlobalIconFont } from './components/iconfont/helper';

export default {
  usingComponents: Object.assign(
    {
      'ec-canvas': './components/ec-canvas/ec-canvas',
      'echarts-demo1': './pages/App/echarts-demo1/index',
    },
    useGlobalIconFont(),
  ),

  pages: [
    'pages/tabBar/index/index',
    'pages/tabBar/show/index',
    'pages/webView/index',
  ],

  subpackages: [
    {
      root: 'pages/show',
      pages: [
        'pages/demoPage/Affix/index',
        'pages/demoPage/BackTop/index',
        'pages/demoPage/Carousel/index',
        'pages/demoPage/Checkbox/index',
        'pages/demoPage/DatePicker/index',
        'pages/demoPage/DropRefresh/index',
        'pages/demoPage/Echarts/index',
        'pages/demoPage/Menu/index',
        'pages/demoPage/PullUpLoading/index',
        'pages/demoPage/Radio/index',
        'pages/demoPage/Select/index',
        'pages/demoPage/Tabs/index',
      ],
    },
  ],

  tabBar: {
    color: '#000000',
    selectedColor: '#E93B3D',

    list: [
      {
        pagePath: 'pages/tabBar/index/index',
        iconPath: 'assets/tabBar/tab.png',
        selectedIconPath: 'assets/tabBar/tab.png',
        text: '首页',
      },
      {
        pagePath: 'pages/tabBar/show/index',
        iconPath: 'assets/tabBar/tab.png',
        selectedIconPath: 'assets/tabBar/tab.png',
        text: '预览',
      },
    ],
  },

  window: {
    backgroundColor: '#000',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
};
