import { applyMiddleware, combineReducers, createStore } from "redux";
import empolyeeReducer from './Ducks/Employee';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./Sagas/rootSaga";

const reducer = combineReducers({
    employee: empolyeeReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer,applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;