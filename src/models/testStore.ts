import { action, makeAutoObservable, observable } from 'mobx';

export const counterStore = observable({
    counter: 0,

    counterStore() {
        this.counter++;
    },

    increment() {
        this.counter++;
    },

    decrement() {
        this.counter--;
    },

    incrementAsync() {
        setTimeout(() => {
            this.counter++;
        }, 1000);
    },
});

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
