import { takeLatest, all } from 'redux-saga/effects';
import { handleDeleteEmployee, handleEmployeeStatus, handleGetEmployees, handleGetSingleEmployee, handleInput, handleInputError, handleStoreEmployee, handleUpdateEmployee } from './Handler/Employee';
import { EMP_DELETE, EMP_STATUS, GET_EMP, GET_SINGLE_EMP, INPUT_ERROR, INPUT_HANDLE, STORE_EMP, UPDARE_EMP } from '../Ducks/Employee'

function* getAllSaga(){
    yield takeLatest(GET_EMP, handleGetEmployees);
}

function* getSingleSaga(){
    yield takeLatest(GET_SINGLE_EMP, handleGetSingleEmployee);
}

function* storeSaga(){
    yield takeLatest(STORE_EMP, handleStoreEmployee);
}

function* inputSaga(){
    yield takeLatest(INPUT_HANDLE, handleInput);
}

function* errorSaga(){
    yield takeLatest(INPUT_ERROR, handleInputError);
}

function* updateSaga(){
    yield takeLatest(UPDARE_EMP, handleUpdateEmployee);
}

function* statusSaga(){
    yield takeLatest(EMP_STATUS, handleEmployeeStatus);
}

function* deleteSaga(){
    yield takeLatest(EMP_DELETE, handleDeleteEmployee);
}

export default function* rootSaga(){
    yield all([
        getAllSaga(),
        getSingleSaga(),
        storeSaga(),
        inputSaga(),
        errorSaga(),
        updateSaga(),
        statusSaga(),
        deleteSaga()
    ]);
}