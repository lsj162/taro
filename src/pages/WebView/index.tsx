import { WebView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect } from 'react';

function Page() {
    useEffect(() => {
        Taro.hideTabBar();
    }, []);

    const { url } = Taro.getCurrentInstance().router.params;

    return <WebView src={url}></WebView>;
}

export default Page;
