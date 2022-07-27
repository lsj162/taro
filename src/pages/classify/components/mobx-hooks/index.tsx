import { Button, Text } from '@tarojs/components';
import { inject, observer } from 'mobx-react';

function Page(props) {
    const { testStore } = props?.store;
    const { count } = testStore;

    const onClick = () => {
        testStore.setValue(1);
    };

    return (
        <>
            <Button onClick={onClick}>button</Button>

            <Text>结果：{count}</Text>
        </>
    );
}

export default inject('store')(observer(Page));
