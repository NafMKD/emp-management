import React, { useEffect } from 'react';
import { StyledCardBox } from '../Styled/Home.styled';
import { StyledTable } from '../Styled/Table.styled';
import { Button } from '../Styled/Stracture.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployee } from '../../Redux/Ducks/Employee';
import Swal from "sweetalert2";

const Action = (type, to, text) => {
    var color = "black";
    if(type === 'primary'){
        color = "#007bff";
    }else if(type === 'info'){
        color = "#17a2b8";
    }else if(type ==='danger'){
        color = "#dc3545";
    }
    return (
        <Button color={color} to={to} key={Math.random()*100}>{text}</Button>
    );
}

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmployee());
    }, [dispatch]);

    const employees = useSelector(state => state.employee.employees);
    var emps = [];
    var cd = 0;
    if(employees === undefined){
        Swal.fire({
            width:'10%',
            allowOutsideClick:false,
            allowEscapeKey:false,
            allowEnterKey:false
        });
        Swal.showLoading();
    }else if(employees.length === 0){
        Swal.fire({
            width:'10%',
            allowOutsideClick:false,
            allowEscapeKey:false,
            allowEnterKey:false
        });
        Swal.showLoading();
    }else if(employees !== undefined){
        Swal.close();
        employees.forEach(employee => {
            var x = [];
            x[0] = employee['emp_id'];
            x[1] = employee['first_name'] + " " + employee['last_name'];
            x[2] = employee['phone'];
            x[3] = employee['start_date'];
            x[4] = [
                Action("primary", "/edit/"+employee['emp_id'], "Edit"),
                Action("info", "/view/"+employee['emp_id'], "View"),
                Action("danger", "/delete/"+employee['emp_id'], "Delete")
            ];
            emps[cd] = x;
            cd+=1;
        });
    }

    const headColumns = [
        "ID", "Full Name", "Phone", "Start date", "Action"
    ]

    
    
  return (
    <>
        <StyledCardBox Title="Employee List:" toolLink="/addEmployee" toolLinkTitle="Add Employee" Body={<StyledTable headColumns={headColumns} bodyRows={emps}/>} />
    </>
  );
}

export default Home;