import React, { useState } from "react";
import { Nav, Menu, MenuItem, Button, FlexContainer, FlexList } from "../styles";
import { Menu as MenuIcon } from "@mui/icons-material";
import LogoImg from "../../images/logo.svg";

export const Navbar = () => {
  const pages = ["Features", "Pricing", "Resources"];

  const [showMenu, setShowMenu] = useState<boolean>(false);
 
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  
  return (
    <Nav>
      <FlexContainer>
        <img src={LogoImg} alt="logo.svg" />
        <FlexList>
          {pages.map((page, index) => (
            <li key={index}>{page}</li>
          ))}
        </FlexList>
      </FlexContainer>

      <MenuIcon
        sx={{ color: "#9E9AA8", display: { md: "none" } }}
        onClick={toggleMenu}
      />
    
    <FlexList>
        <MenuItem>Login</MenuItem>
        <Button>Sign Up</Button>
      </FlexList>

      {showMenu && 
        <Menu>
          {pages.map((page, index) => (
            <MenuItem key={index}>{page}</MenuItem>
          ))}
          <hr />
          <MenuItem>Login</MenuItem>
          <Button>Sign Up</Button>
        </Menu>
      }
    </Nav>
  );
};
