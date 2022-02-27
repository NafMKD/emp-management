import { call, put } from 'redux-saga/effects';
import { setInputHandler, setEmployee, setSingleEmployee, setStoreEmploye, setInputError, setUpdateEmployee, setEmployeeStatus, setEmployeeDelete } from '../../Ducks/Employee';
import { requestDeleteEmployee, requestGetEmployees, requestGetSingleEmploye, requestStoreEmployee, requestUpdateEmployee } from '../Request/Employee';


export function* handleGetEmployees(){
    try{
        const response = yield call(requestGetEmployees);
        const { data } = response;
        yield put(setEmployee(data));
    }catch(err){
        console.error(err);
    }
}

export function* handleGetSingleEmployee(action){
    try{
        const response = yield call(requestGetSingleEmploye, action);
        const { data } = response;
        yield put(setSingleEmployee(data));
    }catch(err){
        console.error(err);
    }
}


export function* handleStoreEmployee(action){
    try{
        const response = yield call(requestStoreEmployee, action);
        const { data } = response;
        data.errors = {};
        yield put(setStoreEmploye(true,data));
    }catch(err){
        if(err.response){
            const { data } = err.response;
            yield put(setStoreEmploye(false,data));
        }else{
            console.error(err);
        }
    }
}

export function* handleInput(action){
    try{
        const { key, value, prev } = action;
        yield put(setInputHandler(key, value, prev));
    }catch(err){
        console.error(err); 
    }
}

export function* handleInputError(action){
    try {
        const { inputFiledErrors } = action;
        yield put(setInputError(inputFiledErrors));
    } catch (err) {
        console.error(err);
    }
}

export function* handleUpdateEmployee(action){
    try {
        const response = yield call(requestUpdateEmployee, action);
        const { data } = response;
        data.errors = {};
        yield put(setUpdateEmployee(true,data));
    } catch (err) {
        if(err.response){
            const { data } = err.response;
            yield put(setUpdateEmployee(false,data));
        }else{
            console.error(err);
        }
    }
}

export function* handleEmployeeStatus(action){
    try {
        const { st } = action;
        yield put(setEmployeeStatus(st));
    } catch (err) {
        console.error(err);
    }
}

export function* handleDeleteEmployee(action){
    try {
        const response = yield call(requestDeleteEmployee, action);
        const { data } = response;
        yield put(setEmployeeDelete(data.status));
    } catch (err) {
        console.error(err);
    }
}