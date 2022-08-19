import React from "react";
import Header from "../Header";
import {
  SignForm,
  SignInput,
  SignInputText,
  SignLeft,
  SignTitle,
  SignupSection,
  SignText,
  SignSubmit,
  Star,
} from "./styled";

const Signup = () => {
  return (
    <SignupSection>
      <Header />
      <SignLeft>
        <SignTitle>식물 집사들을 위한</SignTitle>
        <SignTitle>커뮤니티 플랫폼</SignTitle>
      </SignLeft>
      <SignForm>
        <SignText>가입을 통해 더 다양한</SignText>
        <SignText style={{ marginBottom: "20px" }}>
          서비스를 만나보세요!
        </SignText>
        <SignInputText>
          nickname<Star>*</Star>
        </SignInputText>
        <SignInput />
        <SignInputText>
          e-mail<Star>*</Star>
        </SignInputText>
        <SignInput />
        <SignInputText>
          비밀번호<Star>*</Star>
        </SignInputText>
        <SignInput />
        <SignInputText>
          비밀번호 확인<Star>*</Star>
        </SignInputText>
        <SignInput />
        <SignSubmit>Submit</SignSubmit>
      </SignForm>
    </SignupSection>
  );
};

export default Signup;
