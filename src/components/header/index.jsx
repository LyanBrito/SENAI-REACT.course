import {
  Button,
  DropButton,
  DropdownContainer,
  DropLinks,
  Header,
  Links,
  Nav,
  NavIcon,
} from "./styles";
import Dropdown from "./imgs/Chevron Down.svg";
import { useState } from "react";

export default function PageHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Header>
      <h1>Logo</h1>
      <Nav>
        <Links href="#" rel="noopener noreferrer">
          Link One
        </Links>
        <Links href="#" rel="noopener noreferrer">
          Link Two
        </Links>
        <Links href="#" rel="noopener noreferrer">
          Link Three
        </Links>
        <NavIcon>
          <Links onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Link Four
          </Links>
          <DropButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <img src={Dropdown} alt="" />
          </DropButton>
          {isDropdownOpen && (
            <DropdownContainer onMouseLeave={() => setIsDropdownOpen(false)}>
              <DropLinks>Option 1</DropLinks>
              <DropLinks>Option 2</DropLinks>
              <Links>Option 3</Links>
            </DropdownContainer>
          )}
        </NavIcon>
      </Nav>
      <Button>Try it on Free</Button>
    </Header>
  );
}
