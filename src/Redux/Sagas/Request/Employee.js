import axios from "axios";

const API_ENDPOINT = "http://127.0.0.1:8000/api/";

export function requestGetEmployees(){
    return axios.request({
        method: 'GET',
        url: API_ENDPOINT+'employee',
        headers:{
            'Accept': 'application/json'
        }
    });
}

export function requestGetSingleEmploye(action){
    return axios.request({
        method: 'GET',
        url: API_ENDPOINT+'employee/'+action.id,
        headers:{
            'Accept': 'application/json'
        }
    });
}

export function requestStoreEmployee(action){
    return axios.request({
        method:'POST',
        url: API_ENDPOINT+'employee',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(action.newEmp)
    });
}

export function requestUpdateEmployee(action){
    return axios.request({
        method:'PUT',
        url: API_ENDPOINT+'employee/'+action.id,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(action.upEmp)
    });
}

export function requestDeleteEmployee(action){
    return axios.request({
        method: 'DELETE',
        url: API_ENDPOINT+'employee/'+action.did,
        headers:{
            'Accept': 'application/json'
        }
    });
}