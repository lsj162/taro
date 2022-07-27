import { CoverImage, CoverView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { inject, observer } from 'mobx-react';
import { Component } from 'react';

import './index.scss';

@inject('store')
@observer
export default class Index extends Component {
    state = {
        selected: 0,
        color: '#000000',
        selectedColor: '#DC143C',

        list: [
            {
                pagePath: '/pages/index/index',
                selectedIconPath: '../assets/tabBar/tab.png',
                iconPath: '../assets/tabBar/tab.png',
                text: '首页',
            },
            {
                pagePath: '/pages/classify/index',
                selectedIconPath: '../assets/tabBar/tab.png',
                iconPath: '../assets/tabBar/tab.png',
                text: '分类',
            },
            {
                pagePath: '/pages/index/index',
                selectedIconPath: '../assets/tabBar/tab.png',
                iconPath: '../assets/tabBar/tab.png',
                text: '',
            },
            {
                pagePath: '/pages/shop/index',
                selectedIconPath: '../assets/tabBar/tab.png',
                iconPath: '../assets/tabBar/tab.png',
                text: '购物车',
            },
            {
                pagePath: '/pages/personCenter/index',
                selectedIconPath: '../assets/tabBar/tab.png',
                iconPath: '../assets/tabBar/tab.png',
                text: '个人中心',
            },
        ],
    };

    switchTab = (index, url) => {
        const { tabBar } = this.props.store;
        tabBar.setTabBarIndex(index);

        Taro.switchTab({ url });

        this.setState({
            selected: index,
        });
    };

    render() {
        const { list, selected, color, selectedColor } = this.state;

        const {
            tabBar: { tabBarIndex },
        } = this.props.store;

        return (
            <CoverView className='tab-bar'>
                <CoverView className='tab-bar-border'></CoverView>
                {list.map((item, index) => {
                    return (
                        <CoverView
                            key={index}
                            className='tab-bar-item'
                            onClick={() => {
                                this.switchTab(index, item.pagePath);
                            }}
                        >
                            <CoverImage
                                src={
                                    +tabBarIndex === +index
                                        ? item.selectedIconPath
                                        : item.iconPath
                                }
                            />
                            <CoverView
                                style={{
                                    color:
                                        +tabBarIndex === +index
                                            ? selectedColor
                                            : color,
                                }}
                            >
                                {item.text}
                            </CoverView>
                        </CoverView>
                    );
                })}
            </CoverView>
        );
    }
}
