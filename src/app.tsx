import { Provider } from 'mobx-react';
import { Component } from 'react';
import tabBar from './models/tabBar';
import { counterStore, testStore } from './models/testStore';

import './app.scss';

// FIXME: 添加store
const store = {
    counterStore,
    testStore,
    tabBar,
};

class App extends Component {
    componentDidMount() {}

    componentDidShow() {}

    componentDidHide() {}

    componentDidCatchError() {}

    // this.props.children 就是要渲染的页面
    render() {
        return <Provider store={store}>{this.props.children}</Provider>;
    }
}

export default App;
