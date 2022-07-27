import Header from '@/components/Header/index';
import { Text } from '@tarojs/components';
import { inject, observer } from 'mobx-react';

function Page(props) {
    const {
        counterStore: { counter },
    } = props.store;

    return (
        <>
            <Header />

            <Text>首页</Text>
        </>
    );
}

export default inject('store')(observer(Page));
