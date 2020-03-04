import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled,{keyframes}  from "styled-components";

const StyledNav = styled.div`
  display: flex;
  text-decoration: none;
  height: 80px;
  align-items: center;
  font-size: 2rem;
  width: 100%;
  background-color: #f6f2ef;
  font-family: "Roboto Condensed", serif;
  span {
    font-weight: bold;
  }
  .logo {
    flex-grow: 2;
    justify-content: flex-start;
    text-align: left;
    padding-left: 20px;
    color: black;
    margin-left: 40px;
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    .logo {
      padding-left: 0;
      margin: 5% 0;
    }
    a {
      margin-right: 0;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 24px;
  color: #283c46;
  font-family: "Roboto Condensed", serif;
  font-size: 1.5rem;
  margin-right: 40px;
`;

const StyledLoginNavLink = styled(NavLink)`
  background-color: #22283a;
  color: #ffffff;
  padding: 8px 16px;
  border: 0.1em solid #22283a;
  border-radius: 4px;
  font-size: 1.5rem;
  margin-right: 20px;
  :hover {
    background-color: #2da562;
    border: 0.1em solid #2da562;
    color: #fff !important;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;


export default function Nav(props) {
  return (
    <div>
      <StyledNav>
        <div className="logo"><Rotate>🌎</Rotate>Expat<span>Journal<Rotate>🌎</Rotate></span>
        </div>
        <StyledNavLink exact to="/" activeClassName="activeNavButton">
          Home
        </StyledNavLink> <StyledNavLink to="/posts" activeClassName="activeNavButton">
          Browse
        </StyledNavLink>
        <StyledLoginNavLink
          to="/login"
          className="login-btn"
          activeClassName="activeNavButton"
        >
          Log In
        </StyledLoginNavLink>
        <StyledLoginNavLink
          to="/register"
          className="login-btn"
          activeClassName="activeNavButton"
        >
          Sign Up
        </StyledLoginNavLink>
      </StyledNav>
    </div>
  );
}
