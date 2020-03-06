import React from "react";
import SignUp from "../Entry/SignUpForm";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const NewYorkImage = require("../ProjectImages/NewYork.jpg");

const StyledLeft = styled.div`
  width: 60%;
  h1 {
    font-family: "Roboto Condensed", serif;
    font-size: 3.5rem;
    color: white;
    padding-bottom: 3rem;
    text-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
  p {
    color: white;
    font-size: 1.8rem;
  }
  img {
    width: 2000px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #2da561;
  color: #fff;
  width: 150px;
  border: 1px solid #2da561;
  padding: 1rem;
  line-height: 1;
  margin: 1rem;
  margin-bottom: 30px;
  margin-right: 40px;
  border-radius: 4px;
  font-size: 2rem;
  :hover {
    cursor: pointer;
    background-color: white;
    color: #2da562;
    border: 1px solid #2da562;
  }
  @media screen and (max-width: 500px) {
    margin-right: 0;
    font-size: 1.5rem;
  }
`;

const StyledRight = styled.div`
  width: 60%;
  h1 {
    padding-bottom: 3rem;
    font-family: "Roboto Condensed", serif;
    color: white;
    font-size: 2.6rem;
    text-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url(${NewYorkImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export default function WelcomePage(props) {
  const history = useHistory();
  return (
    <StyledContainer>
      <StyledLeft>
        <br></br>
        <br></br>
        <h1>Welcome to Expat Journal</h1>

        <StyledButton onClick={() => history.push("/login")}>
          Log In
        </StyledButton>
      </StyledLeft>

      <StyledRight>
        <h1 className="member-txt">Not a member?</h1>
        <SignUp {...props} />
      </StyledRight>
    </StyledContainer>
  );
}
