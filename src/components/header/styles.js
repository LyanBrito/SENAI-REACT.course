import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 362.5px;
  height: 72px;
  border-bottom: 1px solid black;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;
export const Button = styled.button`
  display: flex;
  padding: 8px 20px;
  background-color: black;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border: none;
`;
export const Links = styled.a`
  text-decoration: none;
  color: black;
  font-size: 16px;
  line-height: 64px;
  cursor: pointer;
`;
export const NavIcon = styled.div`
  display: flex;
  gap: 4px;
`;
export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: aqua;
  top: 72px;
  left: 770px;
  border: 1px solid black;
  width: 120px;
`;
export const DropLinks = styled.a`
  text-decoration: none;
  color: black;
  font-size: 16px;
  line-height: 64px;
  cursor: pointer;
  border-bottom: 1px solid black;
`;

export const DropButton = styled.button`
  cursor: pointer;
`;
