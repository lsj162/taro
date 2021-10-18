import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Button, Text, CoverView, CoverImage } from '@tarojs/components';
import { observer, inject } from 'mobx-react';

// Header
import Header from '@/components/Header/index';

import styles from './index.module.scss';

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
class Index extends Component {
  increment = () => {
    const { counterStore } = this.props.store;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props.store;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props.store;
    counterStore.incrementAsync();
  };

  goback = () => {
    // Taro.navigateBack();
    Taro.navigateTo({
      url: '/pages/bar2/index',
    });
  };

  render() {
    console.log('->: 🚀 ', UMI_ENV?.name);

    const {
      counterStore: { counter },
    } = this.props.store;

    return (
      <>
        <Header />

        <View>Hello World!</View>

        <View className='index'>
          <Button className={styles.btn} onClick={this.increment}>
            +1
          </Button>
          <Button className={styles.btn} onClick={this.decrement}>
            -1
          </Button>
          <Button onClick={this.incrementAsync}>Add Async</Button>
          <Text>{counter}</Text>
        </View>

        <Button onClick={this.goback}>button</Button>
      </>
    );
  }
}

export default Index;
