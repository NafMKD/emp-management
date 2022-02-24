import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Front/Home';
import AddEmployee from './Components/Front/Add';
import ViewEmployee from './Components/Front/View';
import EditEmployee from './Components/Front/Edit';
import { StyledNavBar,AppWrapper,ContentWrapper,Content,ContentContainer,StyledContentHeader } from './Components/Styled/Stracture.styled';
import { createGlobalStyle } from 'styled-components';
import { StyledFooter } from './Components/Styled/Footers.styled'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(33, 37, 41);
    text-align: left;
    background-color: rgb(255, 255, 255);
    margin: 0px;
    min-height: 100%;
    height: auto;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <AppWrapper>
        <StyledNavBar Image={process.env.PUBLIC_URL + 'AdminLTELogo.png'} Title={"EMS"} />
        <ContentWrapper>
          <StyledContentHeader Title={"Employee Management System"}/>
          <Content>
            <ContentContainer>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/addEmployee' element={<AddEmployee />} />
                <Route path='/view/:id' element={<ViewEmployee />} />
                <Route path='/edit/:id' element={<EditEmployee />} />
              </Routes>
            </ContentContainer>
          </Content>          
        </ContentWrapper>
        <StyledFooter linkName={'Linose-Studio'} linkTo={'http://linose-studio.herokuapp.com/'} version={'1.0.0'} />
      </AppWrapper>
    </>
  );
}

export default App;
