import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
    box-shadow: 0 0 1px rgba(0,0,0,.125),0 1px 3px rgba(0,0,0,.2);
    margin-bottom: 1rem;
    border-top: 3px solid #007bff;
`;

export const CardHeader = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    margin-bottom: 0;
    background-color: transparent;
    border-bottom: 1px solid rgba(0,0,0,.125);
    padding: .75rem 1.25rem;
    position: relative;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
`;

export const CardBody = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
`;

export const CardTitle = styled.h3`
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    font-family: inherit;
    line-height: 1.2;
    color: inherit;
    float: left;
    font-size: 1.1rem;
    font-weight: 400;
    margin: 0;
`;

export const CardTool = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    margin-right: 3rem!important;
    float: right;
`;

export const CardToolLink = styled(Link)`
    word-wrap: break-word;
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    box-shadow: none;
    cursor: pointer;
`;

export const CardFooter = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    word-wrap: break-word;
    box-sizing: border-box;
    padding: .75rem 1.25rem;
    background-color: rgba(0,0,0,.03);
    border-top: 0 solid rgba(0,0,0,.125);
`;

export const CardFooterButtonRight = styled.a`
    font-family: "Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    word-wrap: break-word;
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block; 
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: ${({color}) => color};
    border-color: ${({color}) => color};
    box-shadow: none;
    float: right !important;
    cursor: pointer;
`;

export const CardFooterButtonLeft = styled(Link)`
    font-family: "Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    word-wrap: break-word;
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: ${({color}) => color};
    border-color: ${({color}) => color};
    box-shadow: none;
    cursor: pointer;
`;

export const StyledCardBox = ({Title, toolLink, toolLinkTitle, Body=null, FooterLeft=null, FooterRight=null}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{Title}</CardTitle>
                <CardTool>
                    <CardToolLink to={toolLink}>{toolLinkTitle}</CardToolLink>
                </CardTool>
            </CardHeader>
            <CardBody>{Body}</CardBody>
            <CardFooter>
                { (FooterLeft !== null) ? (
                    <CardFooterButtonLeft color={FooterLeft.color} to={FooterLeft.to}> {FooterLeft.text}</CardFooterButtonLeft>
                ) : "" }
                { (FooterRight !== null) ? (
                    <CardFooterButtonRight color={FooterRight.color}  onClick={(e)=>{FooterRight.onclick()}} > {FooterRight.text}</CardFooterButtonRight>
                ) : "" }
            </CardFooter>
        </Card>
    );
}