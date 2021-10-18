import {
  View,
  Button,
  Input,
  Image,
  Navigator,
  Text,
  CoverView,
  CoverImage,
} from '@tarojs/components';

// 引用文件
import namedPng from '../../../public/slp-icon.png';

import styles from './index.module.scss';

function Page() {
  return (
    <>
      <View className={styles.menu}>
        <View className={styles.logo}>
          <Image className={styles.img} src={namedPng} />
        </View>
        <View className={styles.login}>
          <Navigator className={styles.a} url='pages/bar1/login/index'>
            登录
          </Navigator>
        </View>
      </View>

      <View className={styles.search}>
        <View className={styles.bg}>
          <Input className={styles.input} type='text' />
          <Button className={styles.button}>搜索</Button>
        </View>
      </View>
    </>
  );
}

export default Page;
