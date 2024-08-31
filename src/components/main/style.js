import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 616px;
  height: 334px;
`;
export const EmailWrapepr = styled.div`
  display: flex;
  gap: 16px;
`;
export const EmailInput = styled.input`
  padding: 12px;
  border: 1px solid black;
  width: 333px;
  font-size: 18px;
`;
export const MainTitle = styled.h1`
  font-size: 56px;
`;
export const MainText = styled.p`
  font-size: 18px;
`;
export const EmailText = styled.p`
  font-size: 12px;
`;
export const EmailButton = styled.button`
  font-size: 18px;
  background-color: black;
  color: white;
  padding: 12px 24px ;
  cursor: pointer;
`;
