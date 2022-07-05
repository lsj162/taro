import {
  View,
  Button,
  Input,
  Image,
  Navigator,
  Text,
  CoverView,
  CoverImage,
  WebView,
} from '@tarojs/components';

// Header
import Header from '@/components/Header/index';
import Mobx from './components/mobx/index';
import MobxHooks from './components/mobx-hooks/index';

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
    <>
      <Header />

      <Text
        className={styles.text}
        onClick={() => {
          goWebView('https://www.baidu.com');
        }}
      >
        点击 跳转 webview
      </Text>

      <Mobx />

      <MobxHooks />
    </>
  );
}

export default Page;
