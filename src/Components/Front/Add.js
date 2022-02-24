import React from 'react';
import { StyledCardBox } from '../Styled/Home.styled';
import { Row, Column, FormGroup, FormControl, FormLabel } from "../Styled/Stracture.styled";

const BodyContent = () =>{
    return (
        <Row>
            <Column width={"16.67%"}></Column>
            <Column width={"83.33%"}>
                <Row>
                    <Column width={"33.33%"}>
                        <FormGroup>
                            <FormLabel>First Name:</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Column>
                    <Column width={"8.33%"}></Column>
                    <Column width={"33.33%"}>
                        <FormGroup>
                            <FormLabel>Last Name:</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Column>
                </Row>

                <Row>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>Region:</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Column>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>Zone:</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Column>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>City:</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Column>
                </Row>

                <Row>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>Phone:</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Column>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>House No:</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Column>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>Martial Status:</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Column>
                </Row>

                <Row>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>Salary:</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Column>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>Work Position:</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Column>
                    <Column width={"25%"}>
                        <FormGroup>
                            <FormLabel>Start Date:</FormLabel>
                            <FormControl type="text" />
                        </FormGroup>
                    </Column>
                </Row>

            </Column>
        </Row>
    );
}

const Add = () => {
    const btn = {
        text: "Register",
        color: "#28a745",
      };
  return (
    <>
        <StyledCardBox Title="Add Employee:" toolLink="/" toolLinkTitle="Back" Body={BodyContent()} FooterRight={btn}/>
    </>
  );
}

export default Add;