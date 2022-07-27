// yarn iconfont-taro --config iconfont.json
import { useGlobalIconFont } from './components/iconfont/helper';

export default {
    usingComponents: Object.assign(
        {
            'ec-canvas': './components/ec-canvas/ec-canvas',
            'echarts-app': './components/echarts/app/index',
        },
        useGlobalIconFont()
    ),

    pages: [
        'pages/index/index',
        'pages/classify/index',
        'pages/shop/index',
        'pages/personCenter/index',
        'pages/webView/index',
    ],

    subpackages: [
        {
            root: 'pages/classify/components',
            pages: [
                'webView/index',
                'mobx/index',
                'mobx-hooks/index',
                'un-Table/index',
                'carousel/index',
                'echarts/index',
            ],
        },
        // {
        //     root: 'pages/root',
        //     pages: [
        //         'pages/demoPage/Affix/index',
        //     ],
        // },
    ],

    tabBar: {
        custom: true,

        list: [
            {
                pagePath: 'pages/index/index',
                selectedIconPath: 'assets/tabBar/tab.png',
                iconPath: 'assets/tabBar/tab.png',
                text: '首页',
            },
            {
                pagePath: 'pages/classify/index',
                selectedIconPath: 'assets/tabBar/tab.png',
                iconPath: 'assets/tabBar/tab.png',
                text: '分类',
            },
            {
                pagePath: 'pages/index/index',
                selectedIconPath: 'assets/tabBar/tab.png',
                iconPath: 'assets/tabBar/tab.png',
                text: '',
            },
            {
                pagePath: 'pages/shop/index',
                selectedIconPath: 'assets/tabBar/tab.png',
                iconPath: 'assets/tabBar/tab.png',
                text: '购物车',
            },
            {
                pagePath: 'pages/personCenter/index',
                selectedIconPath: 'assets/tabBar/tab.png',
                iconPath: 'assets/tabBar/tab.png',
                text: '个人中心',
            },
        ],
    },

    window: {
        backgroundColor: '#fff',
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
    },
};
