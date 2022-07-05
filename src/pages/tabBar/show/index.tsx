import { useEffect, useState } from 'react';
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
  const onClick = (url) => {
    Taro.navigateTo({
      url,
    });
  };

  return (
    <>
      <Button
        onClick={() => {
          onClick('/pages/show/pages/demoPage/un-Table/index');
        }}
      >
        表格渲染
      </Button>

      <Button
        onClick={() => {
          onClick('/pages/show/pages/demoPage/Affix/index');
        }}
      >
        固钉
      </Button>

      <Button
        onClick={() => {
          onClick('/pages/show/pages/demoPage/BackTop/index');
        }}
      >
        返回顶部
      </Button>

      <Button
        onClick={() => {
          onClick('/pages/show/pages/demoPage/Carousel/index');
        }}
      >
        走马灯
      </Button>

      <Button
        onClick={() => {
          onClick('/pages/show/pages/demoPage/Checkbox/index');
        }}
      >
        复选框
      </Button>

      <Button
        onClick={() => {
          onClick('/pages/show/pages/demoPage/DatePicker/index');
        }}
      >
        日期
      </Button>

      <Button
        onClick={() => {
          onClick('/pages/show/pages/demoPage/DropRefresh/index');
        }}
      >
        下拉刷新
      </Button>

      <Button
        onClick={() => {
          onClick('/pages/show/pages/demoPage/Echarts/index');
        }}
      >
        Echarts
      </Button>

      <Button
        onClick={() => {
          onClick('/pages/show/pages/demoPage/Menu/index');
        }}
      >
        菜单
      </Button>

      <Button
        onClick={() => {
          onClick('/pages/show/pages/demoPage/PullUpLoading/index');
        }}
      >
        上拉加载
      </Button>

      <Button
        onClick={() => {
          onClick('/pages/show/pages/demoPage/Radio/index');
        }}
      >
        单选
      </Button>

      <Button
        onClick={() => {
          onClick('/pages/show/pages/demoPage/Select/index');
        }}
      >
        选择器
      </Button>

      <Button
        onClick={() => {
          onClick('/pages/show/pages/demoPage/Tabs/index');
        }}
      >
        标签
      </Button>
    </>
  );
}

export default Page;
