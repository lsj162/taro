import { makeAutoObservable, action, observable } from 'mobx';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  count = 1;

  @action
  setValue = () => {
    this.count++;
  };
}

export const testStore = new Store();
