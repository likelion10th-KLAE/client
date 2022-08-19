import styled from "styled-components";

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  color: white;
`;

export const HeaderTitle = styled.div`
  font-size: 15pt;
  margin: 10px 30px;
  text-decoration: none;
  &:hover {
    color: lightgray;
    cursor: pointer;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 30px;
  font-size: 10pt;
`;

export const HeaderLogin = styled.div`
  margin-right: 20px;
  &:hover {
    color: lightgray;
    cursor: pointer;
  }
`;

export const HeaderSignUp = styled.div`
  margin-right: 20px;
  &:hover {
    color: lightgray;
    cursor: pointer;
  }
`;

export const HeaderText = styled.div``;
