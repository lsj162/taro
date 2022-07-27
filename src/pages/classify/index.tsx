import Header from '@/components/Header/index';
import { Icon, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { inject, observer } from 'mobx-react';

import styles from './index.module.scss';

function Page(props) {
    const dataSource = [
        {
            id: '',
            title: '跳转 webview',
            label: '网站应用',
            intro: '测试，点击查看webView',
            src: '/pages/classify/components/webView/index',
        },
        {
            id: '',
            title: 'Mobx',
            label: '网站应用',
            intro: '测试，Mobx',
            src: '/pages/classify/components/mobx/index',
        },
        {
            id: '',
            title: 'Mobx-hooks',
            label: '网站应用',
            intro: '测试，Mobx-hooks',
            src: '/pages/classify/components/mobx-hooks/index',
        },
        {
            id: '',
            title: '表格渲染',
            label: '',
            intro: '测试，表格渲染',
            src: '/pages/classify/components/un-Table/index',
        },
        {
            id: '',
            title: '走马灯',
            label: '',
            intro: '测试，走马灯',
            src: '/pages/classify/components/carousel/index',
        },
        {
            id: '',
            title: 'Echarts',
            label: '网站应用',
            intro: '测试，Echarts',
            src: '/pages/classify/components/echarts/index',
        },
        {
            id: '',
            title: '王者荣耀',
            label: '网站应用',
            intro: '测试，点击查看webView',
            src: '/pages/classify/components/webView/index',
        },
    ];

    const onReview = (url) => {
        Taro.navigateTo({
            url,
        });
    };

    return (
        <>
            <View>
                <Header />

                <View className={styles.view}>
                    {dataSource?.map((value: any) => {
                        return (
                            <View
                                className={styles.card}
                                onClick={() => {
                                    onReview(value?.src);
                                }}
                            >
                                <View className={styles.logo}>
                                    <Icon type='info' size='40' />
                                </View>
                                <View className={styles.content}>
                                    <View className={styles.title}>
                                        <Text>{value?.title}</Text>
                                        <Text className={styles.label}>
                                            {value?.label}
                                        </Text>
                                    </View>
                                    <Text className={styles.intro}>
                                        {value?.intro}
                                    </Text>
                                </View>
                                <View className={styles.icon}>
                                    <Icon type='info' size='40' />
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>
        </>
    );
}

export default inject('store')(observer(Page));
