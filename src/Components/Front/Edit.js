import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { StyledCardBox } from "../Styled/Home.styled";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { inputError, inputHandle,getSingleEmployee, updateEmployee, employeeStatus } from "../../Redux/Ducks/Employee";
import { Row, Column, FormGroup, FormControl, FormLabel, ErrorSpan } from "../Styled/Stracture.styled";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BodyContent = (handleInput,emp,errorInp) =>{
    if(Swal.isVisible()){
        if(Swal.isLoading()){
            Swal.close();
        }
    }
    return (
        <Row>
            <Column width={"16.67%"}></Column>
            <Column width={"83.33%"}>
                <Row>
                    <Column width={"33.33%"}>
                        <FormGroup>
                            <FormLabel>First Name:</FormLabel>
                            <FormControl type="text" placeholder={(Object.keys(emp)===0)?"":emp.first_name} name="first_name" onChange={(e)=>{handleInput(e)}} />
                            <ErrorSpan>{(errorInp.first_name)?errorInp.first_name:""}</ErrorSpan>
                        </FormGroup>
                    </Column>
                    <Column width={"8.33%"}></Column>
                    <Column width={"33.33%"}>
                        <FormGroup>
                            <FormLabel>Last Name:</FormLabel>
                            <FormControl type="text" placeholder={(Object.keys(emp)===0)?"":emp.last_name} name="last_name" onChange={(e)=>{handleInput(e)}} />
                            <ErrorSpan>{(errorInp.last_name)?errorInp.last_name:""}</ErrorSpan>
                        </FormGroup>
                    </Column>
                </Row>

                <Row>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>Region:</FormLabel>
                            <FormControl type="text" placeholder={(Object.keys(emp)===0)?"":emp.region} name="region" onChange={(e)=>{handleInput(e)}} />
                            <ErrorSpan>{(errorInp.region)?errorInp.region:""}</ErrorSpan>
                        </FormGroup>
                    </Column>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>Zone:</FormLabel>
                            <FormControl type="text" placeholder={(Object.keys(emp)===0)?"":emp.zone} name="zone" onChange={(e)=>{handleInput(e)}} />
                            <ErrorSpan>{(errorInp.zone)?errorInp.zone:""}</ErrorSpan>
                        </FormGroup>
                    </Column>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>City:</FormLabel>
                            <FormControl type="text" placeholder={(Object.keys(emp)===0)?"":emp.city} name="city" onChange={(e)=>{handleInput(e)}} />
                            <ErrorSpan>{(errorInp.city)?errorInp.city:""}</ErrorSpan>
                        </FormGroup>
                    </Column>
                </Row>

                <Row>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>Phone:</FormLabel>
                            <FormControl type="text" placeholder={(Object.keys(emp)===0)?"":emp.phone} name="phone" onChange={(e)=>{handleInput(e)}} />
                            <ErrorSpan>{(errorInp.phone)?errorInp.phone:""}</ErrorSpan>
                        </FormGroup>
                    </Column>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>House No:</FormLabel>
                            <FormControl type="text" placeholder={(Object.keys(emp)===0)?"":emp.house_no} name="house_no" onChange={(e)=>{handleInput(e)}} />
                            <ErrorSpan>{(errorInp.house_no)?errorInp.house_no:""}</ErrorSpan>
                        </FormGroup>
                    </Column>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>Martial Status:</FormLabel>
                            <FormControl type="text" placeholder={(Object.keys(emp)===0)?"":emp.martial_status} name="martial_status" onChange={(e)=>{handleInput(e)}} />
                            <ErrorSpan>{(errorInp.martial_status)?errorInp.martial_status:""}</ErrorSpan>
                        </FormGroup>
                    </Column>
                </Row>

                <Row>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>Salary:</FormLabel>
                            <FormControl type="text" placeholder={(Object.keys(emp)===0)?"":emp.salary} name="salary" onChange={(e)=>{handleInput(e)}} />
                            <ErrorSpan>{(errorInp.salary)?errorInp.salary:""}</ErrorSpan>
                        </FormGroup>
                    </Column>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>Work Position:</FormLabel>
                            <FormControl type="text" placeholder={(Object.keys(emp)===0)?"":emp.work_position} name="work_position" onChange={(e)=>{handleInput(e)}} />
                            <ErrorSpan>{(errorInp.work_position)?errorInp.work_position:""}</ErrorSpan>
                        </FormGroup>
                    </Column>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>Start Date:</FormLabel>
                            <FormControl type="text" placeholder={(Object.keys(emp)===0)?"":emp.start_date} name="start_date" onChange={(e)=>{handleInput(e)}} />
                            <ErrorSpan>{(errorInp.start_date)?errorInp.start_date:""}</ErrorSpan>
                        </FormGroup>
                    </Column>
                </Row>

            </Column>
        </Row>
    );
}

const loaderFunction = () => {
    Swal.fire({
      width:'10%',
      allowOutsideClick:false,
      allowEscapeKey:false,
      allowEnterKey:false
    });
    Swal.showLoading();
  }

const Edit = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    // navigator
    const navigator = useNavigate();

    // getting input filed
    const inputFiled = useSelector(state => state.employee.inputFiled);
    // getting errors
    const inputFiledErrors = useSelector(state => state.employee.inputFiledErrors);
    // check status of submission
    const { status } = useSelector(state => state.employee);
    // confirming submission
    if(status){
        dispatch(employeeStatus(false));
        Swal.fire({
            title: 'Success!',
            html: '<i>Employee updated successfully!</i>',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
        }).then(res =>{
            navigator('/');
        });
    }
    
    useEffect(()=>{
        dispatch(getSingleEmployee(id));
    },[dispatch]);
    const employee = useSelector(state => state.employee.employee);
    
    // check for input (validation)
    const validateInput = () => {
        let fields = inputFiled;
        let errors = {};
        let isValid = true;
        
        if("first_name" in fields){
            if (typeof fields["first_name"] !== undefined && fields["first_name"] !== "") {
                if (!fields["first_name"].match(/^[a-zA-Z]+$/)) {
                    isValid = false;
                    errors["first_name"] = ["Only letters allowed"];
                }
            }
        }

        if("martial_status" in fields ){
            if (typeof fields["martial_status"] !== undefined && fields["martial_status"] !== "") {
                if (!fields["martial_status"].match(/^[a-zA-Z]+$/)) {
                    isValid = false;
                    errors["martial_status"] = ["Only letters allowed"];
                }
            }
        }        

        if("last_name" in fields){
            if (typeof fields["last_name"] !== undefined && fields["last_name"] !== "") {
                if (!fields["last_name"].match(/^[a-zA-Z]+$/)) {
                    isValid = false;
                    errors["last_name"] = ["Only letters allowed"];
                }
            }
        }

        if("start_date" in fields){
            if(fields["start_date"] !== ""){
                if(!moment(fields['start_date'], "YYYY-MM-DD", true).isValid()){
                    errors['start_date'] = ["Date Format Invalid (Y-M-D)!"];
                    isValid = false;
                }
            }
        }
        
        dispatch(inputError(errors));
        return isValid;
    }
    
    // for handle inputs
    const handleInputs = (e) =>{
        dispatch(inputHandle(e.target.name, e.target.value, inputFiled))
    }

    const handleSubmit = () => {
        Swal.fire({
            width:'10%',
            allowOutsideClick:false,
            allowEscapeKey:false,
            allowEnterKey:false
        });
        Swal.showLoading();
        if(Object.keys(inputFiled).length === 0){
            Swal.close();
            Swal.fire({
                title: 'Warning!',
                html: '<i>Nothing to update!</i>',
                icon: 'warning',
                showCancelButton: false,
                showConfirmButton: false
            });
        }else{
            if(validateInput()){
                dispatch(updateEmployee(inputFiled, id));
                Swal.close();
            }else{
                Swal.close();
            }
        }
    }
    // button 
    const btn = {
        text: "Update",
        color: "#007bff",
        onclick : handleSubmit
    }
    return (
        <>
        {(employee === undefined)? loaderFunction() : (Object.keys(employee).length === 0)? loaderFunction():(
        <StyledCardBox
            Title="Edit Employee Information:"
            toolLink="/"
            toolLinkTitle="Back"
            Body={BodyContent(handleInputs,employee,inputFiledErrors)}
            FooterRight = {btn}
        />
        )}
        </>
    );
};

export default Edit;
