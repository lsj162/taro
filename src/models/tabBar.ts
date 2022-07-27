import { observable } from 'mobx';

const tabBar = observable({
    tabBarIndex: 0,

    setTabBarIndex(value) {
        this.tabBarIndex = value;
    },
});

export default tabBar;
