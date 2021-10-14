import { Component } from 'react';
import { Provider } from 'mobx-react';

import counterStore from './store/counter';
import { testStore } from './store/testStore';

import './app.scss';

// FIXME: 添加store
const store = {
  counterStore,
  testStore,
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
