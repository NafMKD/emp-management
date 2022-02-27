import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledCardBox } from "../Styled/Home.styled";
import { Row, Column, DicConatiner, DicTitle, DicDesc } from "../Styled/Stracture.styled";
import { getSingleEmployee } from "../../Redux/Ducks/Employee";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import moment from "moment";

const BodyContent = (emp) =>{
    Swal.close();
    return (
        <Row>
            <Column width={"50%"}>
                <DicConatiner>
                    <DicTitle>Full Name:</DicTitle>
                    <DicDesc>{emp.first_name} {emp.last_name}</DicDesc>
                </DicConatiner>
                <DicConatiner>
                    <DicTitle>Region:</DicTitle>
                    <DicDesc>{emp.region}</DicDesc>
                </DicConatiner>
                <DicConatiner>
                    <DicTitle>Zone:</DicTitle>
                    <DicDesc>{emp.zone}</DicDesc>
                </DicConatiner>
                <DicConatiner>
                    <DicTitle>City:</DicTitle>
                    <DicDesc>{emp.city}</DicDesc>
                </DicConatiner>
                <DicConatiner>
                    <DicTitle>Phone:</DicTitle>
                    <DicDesc>{emp.phone}</DicDesc>
                </DicConatiner>
            </Column>
            <Column width={"50%"}>
                <DicConatiner>
                    <DicTitle>House No:</DicTitle>
                    <DicDesc>{emp.house_no}</DicDesc>
                </DicConatiner>
                <DicConatiner>
                    <DicTitle>Martial Status:</DicTitle>
                    <DicDesc>{emp.martial_status}</DicDesc>
                </DicConatiner>
                <DicConatiner>
                    <DicTitle>Salary:</DicTitle>
                    <DicDesc>{emp.salary}</DicDesc>
                </DicConatiner>
                <DicConatiner>
                    <DicTitle>Work Position:</DicTitle>
                    <DicDesc>{emp.work_position}</DicDesc>
                </DicConatiner>
                <DicConatiner>
                    <DicTitle>Start Date:</DicTitle>
                    <DicDesc>{moment(emp.start_date).format("MMMM DD, Y")}</DicDesc>
                </DicConatiner>
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

// main component
const View = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getSingleEmployee(id));
  },[dispatch]);
  const employee = useSelector(state => state.employee.employee);
  const handleDelete = () => {
    navigator('/delete/'+id);
  }
  const btnDelete = {
    text: "Delete",
    color: "#dc3545",
    onclick: handleDelete
  };
  const btnView = {
    text: "Edit",
    color: "#007bff",
    to: "/edit/" + id,
  };
  return (
    <>
      {(employee === undefined)? loaderFunction() : (Object.keys(employee).length === 0)? loaderFunction():(
      <StyledCardBox
        Title="View Employee Information:"
        toolLink="/"
        toolLinkTitle="Back"
        Body={BodyContent(employee)}
        FooterRight={btnDelete}
        FooterLeft={btnView}
      />
      )}
    </>
  );
};

export default View;
