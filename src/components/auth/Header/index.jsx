import React from "react";
import {
  HeaderLogin,
  HeaderRight,
  HeaderSection,
  HeaderSignUp,
  HeaderTitle,
  HeaderText,
} from "./styled";

const Header = () => {
  return (
    <HeaderSection>
      <HeaderTitle>KLAE</HeaderTitle>
      <HeaderRight>
        <HeaderLogin>LOGIN</HeaderLogin>
        <HeaderSignUp>SIGN UP</HeaderSignUp>
        <HeaderText>KLAE에 오신 것을 환영합니다!</HeaderText>
      </HeaderRight>
    </HeaderSection>
  );
};

export default Header;
