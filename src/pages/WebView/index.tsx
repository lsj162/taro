import { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { WebView } from '@tarojs/components';

function Page() {
  useEffect(() => {
    Taro.hideTabBar();
  }, []);

  const { url } = Taro.getCurrentInstance().router.params;

  return <WebView src={url}></WebView>;
}

export default Page;
