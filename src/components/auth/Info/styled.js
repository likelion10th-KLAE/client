import styled from "styled-components";
import BackgroundImg from "../../../assets/flower1.png";

export const InfoSection = styled.div`
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
`;

export const InfoLeft = styled.div`
  height: 200px;
  width: 500px;
  margin: 150px 100px;
  color: white;
`;

export const InfoTitle = styled.div`
  font-size: 30pt;
  font-weight: 700;
`;

export const InfoText = styled.div`
  margin-top: 30px;
`;
