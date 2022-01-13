import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

// import styles from './index.module.less';

function Page(props) {
  const { store } = props;
  const { testStore } = store;
  const { count } = testStore;

  const onClick = () => {
    testStore.setValue(1);
  };

  return (
    <>
      <h1>菜单2</h1>

      <button onClick={onClick}>button</button>

      <div>{count}</div>
    </>
  );
}

export default inject('store')(observer(Page));
