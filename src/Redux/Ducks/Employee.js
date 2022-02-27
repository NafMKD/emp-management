
const SET_EMP = "set_emp";
export const GET_EMP = "get_emp";

const SET_SINGLE_EMP = "set_single_emp";
export const GET_SINGLE_EMP = "get_single_emp";

export const STORE_EMP = "store_emp";
const SET_STORE_EMP = "set_store_emp";

export const INPUT_HANDLE = "input_handle";
const SET_INPUT_HANDLE = "set_input_handle";

export const INPUT_ERROR = "input_error";
const SET_INPUT_ERROR = "set_input_error";

export const UPDARE_EMP = "update_emp";
const STE_UPDATE_EMP = "set_update_emp";

export const EMP_STATUS = "emp_status";
const SET_EMP_STATUS = "set_emp_status";

export const EMP_DELETE = "emp_delete";
const SET_EMP_DELETE = "set_emp_delete";

export const employeeStatus = (st) => ({
    type: EMP_STATUS,
    st
});

export const setEmployeeStatus = (st) => ({
    type: SET_EMP_STATUS,
    st
});

export const employeeDelete = (did) => ({
    type: EMP_DELETE,
    did
});

export const setEmployeeDelete = (dst) => ({
    type: SET_EMP_DELETE,
    dst
});

export const updateEmployee = (upEmp, id) => ({
    type: UPDARE_EMP,
    upEmp, id

});

export const setUpdateEmployee = (stat,data) => ({
    type: STE_UPDATE_EMP,
    stat,
    upEmp : data.errors

});

export const getEmployee = () => ({
    type: GET_EMP
});

export const getSingleEmployee = (id) => ({
    type: GET_SINGLE_EMP,
    id
});

export const setSingleEmployee = (employee) => ({
    type: SET_SINGLE_EMP,
    employee
});

export const setEmployee = (employees) => ({
    type: SET_EMP,
    employees
});

export const storeEmployee = (newEmp) => ({
    type: STORE_EMP,
    newEmp
}); 

export const setStoreEmploye = (status,data) => ({
    type: SET_STORE_EMP,
    status,
    newEmp : data.errors
});

export const inputHandle = (key, value, prev) => ({
    type: INPUT_HANDLE,
    key , value ,prev
});

export const setInputHandler = (key, value, prev) => ({
    type: SET_INPUT_HANDLE,
    inputFiled : {...prev, [key] : value}
});

export const inputError = (inputFiledErrors) => ({
    type: INPUT_ERROR,
    inputFiledErrors
});

export const setInputError = (inputFiledErrors) => ({
    type: SET_INPUT_ERROR,
    inputFiledErrors 
});

const initialState = {
    employees : [],
    employee : {},
    inputFiled : {},
    inputFiledErrors : {},
    status : false
}

export default (state = initialState, action ) => {
    switch(action.type){
        case SET_EMP:
            const { employees } = action;
            return {...state, employees};
        case SET_SINGLE_EMP:
            const { employee } = action;
            return {...state, employee};
        case SET_STORE_EMP:
            const { status, newEmp } = action;
            return {...state, status, inputFiledErrors : newEmp};
        case SET_INPUT_HANDLE:
            const { inputFiled } = action;
            return {...state, inputFiled };
        case SET_INPUT_ERROR:
            const { inputFiledErrors } = action;
            return {...state, inputFiledErrors };
        case STE_UPDATE_EMP:
            const { stat, upEmp } = action;
            return {...state, status : stat, inputFiledErrors : upEmp};
        case SET_EMP_STATUS:
            const { st } = action;
            return {...state, status : st};
        case SET_EMP_DELETE:
            const { dst } = action;
            return {...state, status : dst};
        default:
            return state;            
    }
};