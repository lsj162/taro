import { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, Button, Text } from '@tarojs/components';

// Header
import Header from '@/components/Header/index';

// import styles from "./index.module.less";

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

  render() {
    const {
      counterStore: { counter },
    } = this.props.store;

    console.log('🚀 ', UMI_ENV?.name);

    return (
      <>
        <Header />

        <View className='index'>
          <Button onClick={this.increment}>+</Button>
          <Button onClick={this.decrement}>-</Button>
          <Button onClick={this.incrementAsync}>Add Async</Button>
          <Text>{counter}</Text>
        </View>
      </>
    );
  }
}

export default Index;
