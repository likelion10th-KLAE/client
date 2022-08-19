import React from "react";
import {
  LoginForm,
  LoginInput,
  LoginInputText,
  LoginLeft,
  LoginSection,
  LoginSubmit,
  LoginText,
  LoginTitle,
} from "./styled";
import Header from "../Header";

const Login = () => {
  return (
    <LoginSection>
      <Header />
      <LoginLeft>
        <LoginTitle>The Best</LoginTitle>
        <LoginTitle>Fit for my plant</LoginTitle>
      </LoginLeft>
      <LoginForm>
        <LoginText>LOGIN</LoginText>
        <LoginInputText>nickname</LoginInputText>
        <LoginInput />
        <LoginInputText>pw</LoginInputText>
        <LoginInput type="password" />
        <LoginSubmit>Submit</LoginSubmit>
      </LoginForm>
    </LoginSection>
  );
};

export default Login;
