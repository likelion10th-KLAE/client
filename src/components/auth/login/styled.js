import styled from "styled-components";
import BackgroundImg from "../../../assets/flower2.png";

export const LoginSection = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
`;

export const LoginLeft = styled.div`
  width: 500px;
  margin: 100px 100px 0 100px;
  color: white;
`;

export const LoginTitle = styled.div`
  font-size: 30pt;
  font-weight: 700;
`;

export const LoginForm = styled.div`
  width: 500px;
  margin-left: 500px;
  padding-right: 100px;
`;

export const LoginText = styled.div`
  font-weight: 600;
  font-size: 15pt;
  color: white;
  margin-bottom: 20px;
`;

export const LoginInputText = styled.div`
  color: white;
`;

export const LoginInput = styled.input`
  font-size: 20px;
  color: white;
  height: 30px;
  width: 500px;
  border: none;
  border-bottom: 1px solid white;
  background-color: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  margin-bottom: 20px;
`;

export const LoginSubmit = styled.button`
  width: 80px;
  height: 30px;
  background: gray;
  color: white;
  text-align: center;
  float: right;
  border-radius: 0;
  border: none;
  &:hover {
    background: lightgray;
    cursor: pointer;
    color: black;
  }
`;
