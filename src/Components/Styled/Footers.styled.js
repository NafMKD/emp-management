import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const Footers = styled.footer`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    box-sizing: border-box;
    display: block;
    background-color: #fff;
    border-top: 1px solid #dee2e6;
    color: #869099;
    padding: 1rem;
    margin-left: 0;
`;

export const FooterStrong = styled.strong`
    font-size: 1rem;
    line-height: 1.5;
    text-align: left;
    color: #869099;
    box-sizing: border-box;
    font-weight: bolder;
`;

export const FooterRight = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    color: #869099;
    box-sizing: border-box;
    display: inline!important;
    float: right!important;
`;

export const FooterStrongLink = styled(Link)`
    font-size: 1rem;
    line-height: 1.5;
    text-align: left;
    font-weight: bolder;
    box-sizing: border-box;
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
`;

export const StyledFooter = ({linkName, linkTo, version}) => {
    return (
        <Footers>
            <FooterRight>Version {version}</FooterRight>
            <FooterStrong>
            Copyright © 2022
                <FooterStrongLink to={linkTo} target={"_blank"}> {linkName} </FooterStrongLink>
                . All rights reserved.
            </FooterStrong>
        </Footers>
    );
}