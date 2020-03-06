import React from "react";
import { connect } from "react-redux";
import { register } from "../../State/actionCreators";

import styled from "styled-components";

export const StyledContainer = styled.div`
  padding-top: 210px;
  background-repeat: no-repeat;
  padding-bottom: 200px;
  background-image: url("https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  background-attachment: fixed;
  background-repeat: repeat;
  background-image: cover;
  background-size: 100% 100%;
  #bg url {
    position: fixed;
    margin: auto;
  }
`;
const StyledInput = styled.input`
  margin: 1rem;
  width: 90%;
  margin-bottom: 20px;
  height: 3.125rem;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  @media screen and (max-width: 500px) {
    margin: 10px auto;
  }
`;

const StyledSelect = styled.select`
  margin: 1rem;
  width: 90%;
  margin-bottom: 20px;
  height: 3.125rem;

  @media screen and (max-width: 500px) {
    border: 1px solid #ced4da;
  }
`;

const StyledButton = styled.button`
  padding: 15px 15px;
  background-color: #2da561;
  color: #fff;
  width: 60%;
  border: 1px solid #2da561;
  padding: 1rem;
  line-height: 1;
  background-color: 250ms;
  margin: 30 40 40 0;
  border-radius: 4px;
  font-size: 2rem;

  @media screen and (max-width: 500px) {
    text-align: center;
    margin: 0 auto;
    font-size: 1.5rem;
  }

  :hover {
    cursor: pointer;
    background-color: white;
    color: #2da562;
    border: 1px solid #2da562;
  }
`;

const StyledSignUp = styled.form`
  width: 470px;
  border: 0;
  border-radius: 0.25rem;
  margin: 0 auto;
  height: 600px;
  background-color: #cfdef3;
  opacity: 0.8;
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding-left: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3),
    0 2px 4px -1px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 500px) {
    padding-left: initial;
    height: 600px;
  }

  h2 {
    text-align: left;
    padding-bottom: 20px;
    padding-left: 1.7rem;
    padding-top: 50px;
    font-size: 2rem;
    font-family: "Roboto Condensed", serif;
    font-weight: 400;
    @media screen and (max-width: 500px) {
      padding-top: 20px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 80%;
    box-shadow: none;
    margin-bottom: 5%;
    h2 {
      text-align: center;
      padding-left: initial;
    }
  }
`;

const SignUpForm = ({ register, isFetching }) => {
  const [credentials, setCredentials] = React.useState({});

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(credentials);

    register(credentials);
  };
  if (isFetching) return <h3>Loading...</h3>;
  return (
    <StyledSignUp>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <StyledInput name="email" type="text" placeholder="email" />
        <StyledInput name="password" type="password" placeholder="password" />
        <StyledInput
          name="confirm_password"
          type="password"
          placeholder="confirm_password"
        />
        <StyledInput name="first_name" type="text" placeholder="first name" />
        <StyledInput name="last_name" type="text" placeholder="last name" />
        <StyledButton type="submit">Sign Up</StyledButton>
      </form>
    </StyledSignUp>
  );
};
function mapStateToProps(state) {
  console.log(state);
  return {
    isLoggedIn: state.entry.isLoggedIn,
    isFetching: state.entry.isFetching,
    registerError: state.entry.registerError,
    registerSuccess: state.entry.registerSuccess,
    user: state.entry.user
  };
}
export default connect(mapStateToProps, { register })(SignUpForm);
