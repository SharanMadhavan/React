import {legacy_createStore,combineReducers, applyMiddleware} from 'redux'
import { cityReducer } from '../Reducer/cityReducer';
import { TestReducer } from '../Reducer/detail';
import { logger} from 'redux-logger';
let combineReducersAll = combineReducers({
    cityReducer,
    TestReducer
});
let myreduxstore = legacy_createStore(combineReducersAll,applyMiddleware(logger));
export default myreduxstore;