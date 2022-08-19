import React from "react";
import {
  HeaderLogin,
  HeaderRight,
  HeaderSection,
  HeaderSignUp,
  HeaderTitle,
  HeaderText,
} from "./styled";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goInfo = () => {
    navigate("/");
  };

  const goLogin = () => {
    navigate("/login");
  };

  const goSign = () => {
    navigate("/signup");
  };

  return (
    <HeaderSection>
      <HeaderTitle onClick={goInfo}>KLAE</HeaderTitle>
      <HeaderRight>
        <HeaderLogin onClick={goLogin}>LOGIN</HeaderLogin>
        <HeaderSignUp onClick={goSign}>SIGN UP</HeaderSignUp>
        <HeaderText>KLAE에 오신 것을 환영합니다!</HeaderText>
      </HeaderRight>
    </HeaderSection>
  );
};

export default Header;
