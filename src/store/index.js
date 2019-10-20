import { createStore } from 'redux';
import reducers from '../reducers/index';
//import DevTools from '../DevTools';// wersja z DevToolsami

//const store = createStore(reducers, DevTools.instrument());// wersja z DevToolsami
const store = createStore(reducers);

export default store;