import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../State/actionCreators";
import styled from "styled-components";

const romeImage = require("../ProjectImages/rome.jpg");

const StyledContainer = styled.div`
  padding-top: 200px;
  background-repeat: no-repeat;
  padding-bottom: 200px;
  background-image: url(${romeImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
`;

const StyledLogin = styled.div`
  width: 500px;
  border: 0;
  border-radius: 0.25rem;
  margin: 0 auto;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 0.7;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding-left: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3),
    0 2px 4px -1px rgba(0, 0, 0, 0.1);
  margin-top: 200px;
  @media screen and (max-width: 500px) {
    padding-left: initial;
  }

  h2 {
    padding: 1rem;
    padding-top: 2rem;
    font-family: "Roboto Condensed", serif;
    font-size: 28px;
    font-weight: 400;
  }

  label {
    padding: 1rem;
    color: #495057;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
`;

const StyledInput = styled.input`
  margin: 1rem;
  width: 90%;
  margin-bottom: 20px;
  font-size: 1.3rem;
  height: 3.125rem;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  @media screen and (max-width: 500px) {
    margin: 10px auto;
  }
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #2da562;
  color: #fff;
  width: 90%;
  border: 1px solid #22283a;
  padding: 1rem;
  line-height: 1;
  margin: 1rem;
  background-color: 250ms;
  margin-bottom: 40px;
  margin-right: 40px;
  border-radius: 4px;
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
    background-color: white;
    color: #2da562;
    border: 1px solid #2da562;
  }
`;

const LoginForm = props => {
  const [credentials, setCredentials] = React.useState({});
  const { login, isFetching, isLoggedIn } = props;
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/posts");
    }
  }, [isLoggedIn]);

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(credentials);
    login(credentials);
  };
  if (isFetching) return <h3>Register...</h3>;
  return (
    <StyledContainer>
      <StyledLogin>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <h2>Login</h2>
          <StyledInput name="email" type="text" placeholder="email" />
          <StyledInput name="password" type="password" placeholder="password" />
          <StyledButton type="submit">Log In</StyledButton>
        </form>
      </StyledLogin>
    </StyledContainer>
  );
};
function mapStateToProps(state) {
  console.log(state);
  return {
    isLoggedIn: state.entry.isLoggedIn,
    isFetching: state.entry.isFetching,
    user: state.entry.user
  };
}
export default connect(mapStateToProps, { login })(LoginForm);
