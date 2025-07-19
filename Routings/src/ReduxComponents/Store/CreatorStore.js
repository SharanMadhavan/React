import {legacy_createStore,combineReducers, applyMiddleware} from 'redux'
import { cityReducer } from '../Reducer/cityReducer';
import { TestReducer } from '../Reducer/detail';
import { logger} from 'redux-logger';
import { formPageReducerFn } from '../Reducer/FormDetailseReducer';
let combineReducersAll = combineReducers({
    cityReducer,
    TestReducer,
    formPageReducerFn
});
let myreduxstore = legacy_createStore(combineReducersAll,applyMiddleware(logger));
export default myreduxstore;