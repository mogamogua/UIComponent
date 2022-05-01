import React from 'react';
import { ReactComponent as LogoIcon } from '../assets/icons/LogoIcon.svg';
import { Background, DelLine, Header, ImgWrapper, Nav, NavItem, NavList, SuperScripted, WhiteBox } from './sMain';
import cookies from "../assets/images/cookies.png";
import {Link} from "react-router-dom";

function Main() {
  return (
    <Background>
      <Header>
        <Link to="/"><LogoIcon /></Link>
      </Header>
      <Nav>
        <NavList>
          <NavItem>User Input</NavItem>
          <NavItem>Button</NavItem>
          <NavItem>Menu List</NavItem>
          <NavItem>the Others</NavItem>
        </NavList>
      </Nav>
      <main>
        <ImgWrapper>
          <WhiteBox>
            <p>What kinds of <DelLine><span>cookies</span><SuperScripted>component</SuperScripted></DelLine></p>
            <p>do you want to make?</p></WhiteBox>
          <img src={cookies} alt="mainImg" />
        </ImgWrapper>
      </main>
    </Background>
  )
}

export default Main