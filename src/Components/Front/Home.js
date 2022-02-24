import React from 'react';
import { StyledCardBox } from '../Styled/Home.styled';
import { StyledTable } from '../Styled/Table.styled';
import { Button } from '../Styled/Stracture.styled';

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
    const headColumns = [
        "ID", "Full Name", "Phone", "Start date", "Action"
    ]
    const bodyRows = [
        ["1", "Abebe Kebede", "0932654878",	"11-7-2014", [Action("primary", "/edit/1", "Edit"),Action("info", "/view/1", "View"),Action("danger", "/delete/1", "Delete")]],
        ["1", "Abebe asdasd", "0932654878",	"11-7-2014", [Action("primary", "/edit/1", "Edit"),Action("info", "/view/1", "View"),Action("danger", "/delete/1", "Delete")]]
    ]
  return (
    <>
        
        <StyledCardBox Title="Employee List:" toolLink="/addEmployee" toolLinkTitle="Add Employee" Body={<StyledTable headColumns={headColumns} bodyRows={bodyRows}/>} />
    </>
  );
}

export default Home;