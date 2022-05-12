import redux from '../redux';
import reducers from './reducers';

const store = redux.createStore(redux.combineReducers(reducers))

export default store;
