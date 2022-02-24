import React from "react";
import { useParams } from "react-router-dom";
import { StyledCardBox } from "../Styled/Home.styled";
import { Row, Column, DicConatiner, DicTitle, DicDesc } from "../Styled/Stracture.styled";

const BodyContent = () =>{
    return (
        <Row>
            <Column width={"50%"}>
                <DicConatiner>
                    <DicTitle>Full Name:</DicTitle>
                    <DicDesc>Nafiyad Menberu</DicDesc>
                </DicConatiner>
            </Column>
            <Column width={"50%"}>
                <DicConatiner>
                    <DicTitle>Full Name:</DicTitle>
                    <DicDesc>Nafiyad Menberu</DicDesc>
                </DicConatiner>
            </Column>
        </Row>
    );
}

const View = () => {
  const { id } = useParams();
  const btnDelete = {
    text: "Delete",
    color: "#dc3545",
  };
  const btnView = {
    text: "Edit",
    color: "#007bff",
    to: "/edit/" + id,
  };
  return (
    <>
      <StyledCardBox
        Title="View Employee Information:"
        toolLink="/"
        toolLinkTitle="Back"
        Body={BodyContent()}
        FooterRight={btnDelete}
        FooterLeft={btnView}
      />
    </>
  );
};

export default View;
