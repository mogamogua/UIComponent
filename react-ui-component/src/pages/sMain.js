import styled from "styled-components";
import {colors} from "../styles/colors"

export const Background = styled.section`
  background-color: ${colors.mainBlue};
  width: 100%;
  height: 165rem;
`;

export const Header = styled.header`
  width: 100%;
  height: 24rem;
  padding: 5rem 0 3rem 0;
  text-align: center;
  border-bottom: solid 1px white;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 70px;
  padding: 22px 0 0 0 
  margin: 0 auto; 
`;

export const NavList = styled.ul`
  height: 6.4rem;
  margin: 0 auto;
  width: 60%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const NavItem = styled.li`
  font-family: "YesevaOne";
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: -0.03em;
  text-align: center;
  color: white;
`;

// export const Main = styled.main`
  
// `;

export const ImgWrapper = styled.figure`
  margin: 19rem auto;
  text-align: center;
  border-radius: 0.1rem;
  position: relative;
  z-index: 3;
  & > img {
    border-radius: 0.1rem;
    z-index: 4;
  }
`;

export const WhiteBox = styled.figure`
  border: solid 1px white;
  width: 72rem;
  height: 57rem;
  left: 280px;

  position: absolute;
  top: 22rem;
  left: calc(50% - 360px);
  z-index: -1;
  padding: 44rem 0 0 0;

  & p {
   font-family: "YesevaOne";
   font-size: 3.4rem;
   line-height: 4.4rem;
   letter-spacing: -0.03em;
   text-align: center;
   color: white;
 }
 & span {
   color: white;
 }
`;

export const DelLine = styled.del`
  color: ${colors.mainOrange};
`; 
