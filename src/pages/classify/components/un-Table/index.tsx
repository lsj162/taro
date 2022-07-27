import { useState } from 'react';
import Taro from '@tarojs/taro';
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

import styles from './index.module.scss';

function Page() {
  const [tableData, setTableData] = useState([{}, {}, {}]);

  return (
    <>
      <View>1. 一个自定义表格需要处理那些功能（antd 默认所有）</View>
      <View>1. 自定义左右多个固定</View>
      <View>2. 边框</View>
      <View>3. 表头，表格颜色</View>
      <View>4. 虚拟滚动</View>

      <View className={styles.tableBox}>
        <View className={styles.table}>
          <View className={styles.thead}>
            <View className={styles.tr}>
              <View
                // style={{ position: 'sticky', left: '0px' }}
                className={
                  styles.sticky + ' ' + styles.th + ' ' + styles.fixedTd
                }
              >
                序号
              </View>
              <View className={styles.th}>商品数</View>
              <View className={styles.th}>Review</View>
              <View className={styles.th}>好评</View>
              <View className={styles.th}>差评</View>
              <View className={styles.th}>好评率</View>
              <View className={styles.th}>平均评分</View>
              <View className={styles.th}>平均Review</View>
            </View>
          </View>

          <View className={styles.tbody}>
            {tableData?.map((value, index) => {
              return (
                <View className={styles.tr} key={index}>
                  <View
                    className={
                      styles.sticky + ' ' + styles.td + ' ' + styles.fixedTd
                    }
                  >
                    index
                  </View>
                  <View className={styles.td}>-</View>
                  <View className={styles.td}>-</View>
                  <View className={styles.td}>-</View>
                  <View className={styles.td}>-</View>
                  <View className={styles.td}>-</View>
                  <View className={styles.td}>-</View>
                  <View className={styles.td}>-</View>
                  <View className={styles.td}>-</View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </>
  );
}

export default Page;
