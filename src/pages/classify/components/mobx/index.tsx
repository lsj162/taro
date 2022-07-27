import { Button, Text, View } from '@tarojs/components';
import { inject, observer } from 'mobx-react';
import { Component } from 'react';

@inject('store')
@observer
class Mobx extends Component<any, any> {
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

        return (
            <>
                <View className='index'>
                    <Button onClick={this.increment}>+1</Button>

                    <Button onClick={this.decrement}>-1</Button>

                    <Button onClick={this.incrementAsync}>Add Async</Button>

                    <Text>{counter}</Text>
                </View>
            </>
        );
    }
}

export default Mobx;
