import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const AppWrapper = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(33, 37, 41);
    text-align: left;
    box-sizing: border-box;
    min-height: 100%;
    position: relative;
    margin-left: 0px;
`;

export const ContentWrapper = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(33, 37, 41);
    text-align: left;
    box-sizing: border-box;
    background-color: rgb(244, 246, 249);
    height: 100%;
    margin-left: 0px;
    min-height: calc(100vh - calc(3.5rem + 1px) - calc(3.5rem + 1px));
`;

export const Row = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-right: -7.5px;
    margin-left: -7.5px;
    width: 100%;
`;

export const Column = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    padding-right: 7.5px;
    padding-left: 7.5px;
    flex: 0 0 ${({width}) => width};
    max-width: ${({width}) => width};
`;

export const ContentHeader = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(33, 37, 41);
    text-align: left;
    box-sizing: border-box;
    padding: 15px 0.5rem;
`;

export const Nav = styled.nav`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    justify-content: flex-start;
    flex-flow: row nowrap;
    z-index: 1034;
    border-bottom: 1px solid rgb(222, 226, 230);
    background-color: rgb(255, 255, 255);
    color: rgb(31, 45, 61);
    margin-left: 0px;
`;

export const Container = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    color: rgb(31, 45, 61);
    box-sizing: border-box;
    width: 100%;
    padding-right: 7.5px;
    padding-left: 7.5px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
`;

export const ContentContainer = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    box-sizing: border-box;
    width: 100%;
    padding-right: 7.5px;
    padding-left: 7.5px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1140px;
`;

export const NavBrand = styled(Link)`
    font-weight: 400;
    text-align: left;
    box-sizing: border-box;
    background-color: transparent;
    text-decoration: none;
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 0.5rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    color: rgba(0, 0, 0, 0.9);
`;

export const NavBrandImg = styled.img`
    font-weight: 400;
    text-align: left;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    color: rgba(0, 0, 0, 0.9);
    box-sizing: border-box;
    vertical-align: middle;
    border-style: none;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px !important;
    margin-top: -0.5rem;
    margin-right: 0.2rem;
    height: 33px;
    opacity: .8;
`;

export const NavBrandText = styled.span`
    text-align: left;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    color: rgba(0, 0, 0, 0.9);
    box-sizing: border-box;
    font-weight: 300 !important;
`;

export const Hone = styled.h1`
    text-align: left;
    box-sizing: border-box;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
    margin: 0!important;
    font-size: 1.8rem;
`;

export const Content = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    box-sizing: border-box;
    padding: 0 .5rem;
`;

export const Button = styled(Link)`
    word-wrap: break-word;
    border-collapse: collapse;
    white-space: nowrap!important;
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: ${({color}) => color};
    border-color: ${({color}) => color};
    box-shadow: none;
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;
    cursor: pointer;
    margin-left: .5rem;;
`;

export const FormGroup = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    margin-bottom: 1rem;
`;

export const FormControl = styled.input`
    word-wrap: break-word;
    box-sizing: border-box;
    margin: 0;
    font-family: inherit;
    overflow: visible;
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    box-shadow: inset 0 0 0 transparent;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

export const FormLabel = styled.label`
    font-size: 1rem;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    display: inline-block;
    margin-bottom: .5rem;
    font-weight: 700;
`;

export const DicConatiner = styled.dl`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    margin-top: 0;
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    margin-right: -7.5px;
    margin-left: -7.5px;
`;

export const DicTitle = styled.dt`
    font-size: 1rem;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    font-weight: 700;
    position: relative;
    width: 100%;
    padding-right: 7.5px;
    padding-left: 7.5px;
    flex: 0 0 25%;
    max-width: 25%;
`;

export const DicDesc = styled.dd`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    margin-bottom: .5rem;
    margin-left: 0;
    position: relative;
    width: 100%;
    padding-right: 7.5px;
    padding-left: 7.5px;
    flex: 0 0 75%;
    max-width: 75%;
`;

export const ErrorSpan = styled.span`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    color: #dc3545!important;
`;

export const StyledNavBar = ({Image, Title}) => {
    return (
        <Nav>
            <Container>
                <NavBrand to={"/"}>
                    <NavBrandImg src={Image}></NavBrandImg>
                    <NavBrandText>{Title}</NavBrandText>
                </NavBrand>
            </Container>
        </Nav>
    );
}

export const StyledContentHeader = ({Title}) => {
    return (
        <ContentHeader>
            <Container>
                <Row>
                    <Column width="50%">
                        <Hone> {Title}</Hone>
                    </Column>
                </Row>
            </Container>
        </ContentHeader>
    );
}