import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledCardBox } from "../Styled/Home.styled";
import {
  Row,
  Column,
  FormGroup,
  FormControl,
  FormLabel,
  ErrorSpan
} from "../Styled/Stracture.styled";
import { employeeStatus, inputError, inputHandle, storeEmployee} from "../../Redux/Ducks/Employee";
import Swal from "sweetalert2";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BodyContent = (handleInput,errorInp) => {
  return (
    <Row>
      <Column width={"16.67%"}></Column>
      <Column width={"83.33%"}>
        <Row>
          <Column width={"33.33%"}>
            <FormGroup>
              <FormLabel>First Name:</FormLabel>
              <FormControl type="text" name="first_name" onChange={(e)=>{handleInput(e)}} />
              <ErrorSpan>{(errorInp.first_name)?errorInp.first_name:""}</ErrorSpan>
            </FormGroup>
          </Column>
          <Column width={"8.33%"}></Column>
          <Column width={"33.33%"}>
            <FormGroup>
              <FormLabel>Last Name:</FormLabel>
              <FormControl type="text" name="last_name" onChange={(e)=>{handleInput(e)}} />
              <ErrorSpan>{(errorInp.last_name)?errorInp.last_name:""}</ErrorSpan>
            </FormGroup>
          </Column>
        </Row>

        <Row>
          <Column width={"25%"}>
            <FormGroup>
              <FormLabel>Region:</FormLabel>
              <FormControl type="text" name="region" onChange={(e)=>{handleInput(e)}} />
              <ErrorSpan>{(errorInp.region)?errorInp.region:""}</ErrorSpan>
            </FormGroup>
          </Column>
          <Column width={"25%"}>
            <FormGroup>
              <FormLabel>Zone:</FormLabel>
              <FormControl type="text" name="zone" onChange={(e)=>{handleInput(e)}} />
              <ErrorSpan>{(errorInp.zone)?errorInp.zone:""}</ErrorSpan>
            </FormGroup>
          </Column>
          <Column width={"25%"}>
            <FormGroup>
              <FormLabel>City:</FormLabel>
              <FormControl type="text" name="city" onChange={(e)=>{handleInput(e)}} />
              <ErrorSpan>{(errorInp.city)?errorInp.city:""}</ErrorSpan>
            </FormGroup>
          </Column>
        </Row>

        <Row>
          <Column width={"25%"}>
            <FormGroup>
              <FormLabel>Phone:</FormLabel>
              <FormControl type="text" name="phone" onChange={(e)=>{handleInput(e)}} />
              <ErrorSpan>{(errorInp.phone)?errorInp.phone:""}</ErrorSpan>
            </FormGroup>
          </Column>
          <Column width={"25%"}>
            <FormGroup>
              <FormLabel>House No:</FormLabel>
              <FormControl type="text" name="house_no" onChange={(e)=>{handleInput(e)}} />
              <ErrorSpan>{(errorInp.house_no)?errorInp.house_no:""}</ErrorSpan>
            </FormGroup>
          </Column>
          <Column width={"25%"}>
            <FormGroup>
              <FormLabel>Martial Status:</FormLabel>
              <FormControl type="text" name="martial_status" onChange={(e)=>{handleInput(e)}} />
              <ErrorSpan>{(errorInp.martial_status)?errorInp.martial_status:""}</ErrorSpan>
            </FormGroup>
          </Column>
        </Row>

        <Row>
          <Column width={"25%"}>
            <FormGroup>
              <FormLabel>Salary:</FormLabel>
              <FormControl type="text" name="salary" onChange={(e)=>{handleInput(e)}} />
              <ErrorSpan>{(errorInp.salary)?errorInp.salary:""}</ErrorSpan>
            </FormGroup>
          </Column>
          <Column width={"25%"}>
            <FormGroup>
              <FormLabel>Work Position:</FormLabel>
              <FormControl type="text" name="work_position" onChange={(e)=>{handleInput(e)}} />
              <ErrorSpan>{(errorInp.work_position)?errorInp.work_position:""}</ErrorSpan>
            </FormGroup>
          </Column>
          <Column width={"25%"}>
            <FormGroup>
              <FormLabel>Start Date:</FormLabel>
              <FormControl type="text" name="start_date" onChange={(e)=>{handleInput(e)}} />
              <ErrorSpan>{(errorInp.start_date)?errorInp.start_date:""}</ErrorSpan>
            </FormGroup>
          </Column>
        </Row>
      </Column>
    </Row>
  );
};


const Add = () => {
  // dispatcher
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
      html: '<i>Employee registered successfully!</i>',
      icon: 'success',
      showCancelButton: false,
      showConfirmButton: false
    }).then(res =>{
      navigator('/');
    });
  }
  // check for input (validation)
  const validateInput = () => {
    let fields = inputFiled;
    let errors = {};
    let isValid = true;
    
    if(!fields['first_name'] || fields['first_name']===null){
      errors['first_name'] = ["First Name cannot be empty!"];
      isValid = false;
    }else if (typeof fields["first_name"] !== "undefined") {
      if (!fields["first_name"].match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors["first_name"] = ["Only letters allowed"];
      }
    }

    if(!fields['martial_status'] || fields['martial_status']===null){
      errors['martial_status'] = ["Martial Status cannot be empty!"];
      isValid = false;
    }else if (typeof fields["martial_status"] !== "undefined") {
      if (!fields["martial_status"].match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors["martial_status"] = ["Only letters allowed"];
      }
    }

    if(!fields['work_position'] || fields['work_position']===null){
      errors['work_position'] = ["Work Position cannot be empty!"];
      isValid = false;
    }

    if(!fields['last_name'] || fields['last_name']===null){
      errors['last_name'] = ["Last Name cannot be empty!"];
      isValid = false;
    }else if (typeof fields["last_name"] !== "undefined") {
      if (!fields["last_name"].match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors["last_name"] = ["Only letters allowed"];
      }
    }

    if(!fields['region'] || fields['region']===null){
      errors['region'] = ["Region cannot be empty!"];
      isValid = false;
    }

    if(!fields['zone'] || fields['zone']===null){
      errors['zone'] = ["Zone cannot be empty!"];
      isValid = false;
    }

    if(!fields['city'] || fields['city']===null){
      errors['city'] = ["City cannot be empty!"];
      isValid = false;
    }

    if(!fields['phone'] || fields['phone']===null){
      errors['phone'] = ["Phone cannot be empty!"];
      isValid = false;
    }

    if(!fields['salary'] || fields['salary']===null){
      errors['salary'] = ["Salary Status cannot be empty!"];
      isValid = false;
    }

    if(!fields['start_date'] || fields['start_date']===null){
      errors['start_date'] = ["Start Date cannot be empty!"];
      isValid = false;
    }else if(!moment(fields['start_date'], "YYYY-MM-DD", true).isValid()){
      errors['start_date'] = ["Date Format Invalid (Y-M-D)!"];
      isValid = false;
    }

    if(!fields['house_no'] || fields['house_no']===null){
      errors['house_no'] = ["House No cannot be empty!"];
      isValid = false;
    }
    
    dispatch(inputError(errors));
    return isValid;
  }

  
  // for handle inputs
  const handleInputs = (e) =>{
    dispatch(inputHandle(e.target.name, e.target.value, inputFiled))
  }

  // submit form handler
  const handleSubmit = () => {
    Swal.fire({
      width:'10%',
      allowOutsideClick:false,
      allowEscapeKey:false,
      allowEnterKey:false
    });
    Swal.showLoading();
    if(validateInput()){
      dispatch(storeEmployee(inputFiled));
      Swal.close();
    }else{
      Swal.close();
    }   
  }

  // for register button
  const btn = {
    text: "Register",
    color: "#28a745",
    onclick : handleSubmit
  };

  // returning JSX
  return (
    <>
      <StyledCardBox
        Title="Add Employee:"
        toolLink="/"
        toolLinkTitle="Back"
        Body={BodyContent(handleInputs,inputFiledErrors)}
        FooterRight={btn}
      />
    </>
  );
};

export default Add;
