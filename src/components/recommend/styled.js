import styled, { css } from "styled-components";

export const RecommendSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Qna = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100%;
  margin: 20px;
`;

export const Question = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 28px;
`;

export const Answer = styled.button`
  display: flex;
  align-items: center;
  float: right;
  width: 390px;
  height: 50px;
  border: 1.5px solid #006400;
  border-radius: 10px;
  margin-bottom: 12px;
  padding: 0 8px;
  background-color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  ${({ sender }) =>
  sender === true
    ? css`
    background-color: #006400;
    color: white;
    `
    : css`
    background-color: white;
    `}
`;

export const Register = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  width: 150px;
  height: 60px;
  border: none;
  border-radius: 30px;
  margin: 40px 450px 90px 0;
  padding: 0 8px;
  background-color: white;
  font-weight: 500;
  font-size: 16px;
  color: white;
  cursor: pointer;
  ${({ sender }) =>
  sender === true
    ? css`
    background-color: #006400;
    `
    : css`
    background-color: #D4D4D4;
    `}
`;