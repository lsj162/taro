import { Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import styles from './index.module.scss';

const TARO_ENV = process.env.TARO_ENV;

function Page() {
    const goWebView = (url) => {
        if (TARO_ENV === 'weapp') {
            // weapp
            Taro.navigateTo({
                url: `/pages/webView/index?url=${url}`,
            });
        } else {
            // h5
            window.location.href = url;
        }
    };

    return (
        <Text
            className={styles.text}
            onClick={() => {
                goWebView('https://www.baidu.com');
            }}
        >
            点击 跳转 webview
        </Text>
    );
}

export default Page;
