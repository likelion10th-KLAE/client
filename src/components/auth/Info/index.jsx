import React from "react";
import { InfoSection } from "./styled";
import Header from "../Header";
import { InfoLeft, InfoTitle, InfoText } from "./styled";

const Info = () => {
  return (
    <InfoSection>
      <Header />
      <InfoLeft>
        <InfoTitle>KLAE에 오신 것을</InfoTitle>
        <InfoTitle>환영합니다!</InfoTitle>
        <InfoText>
          지금 로그인하고 일지 작성 및 식물 추천 기능을 이용해보세요!
        </InfoText>
      </InfoLeft>
    </InfoSection>
  );
};

export default Info;
