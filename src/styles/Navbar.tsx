import React from "react";
import { Nav, Menu, MenuItem, Button } from "./NavStyles";
import {FlexContainer, FlexList} from "./containers";
import { Menu as MenuIcon } from "@mui/icons-material";
import LogoImg from "../../images/logo.svg";

export const Navbar = () => {
  const pages = ["Features", "Pricing", "Resources"];
  return (
    <Nav>
      <img src={LogoImg} alt="logo.svg" />

      <MenuIcon sx={{ color: "#9E9AA8" , display: {  md: 'none' }}} />
      <Menu>
        {pages.map((page) => (
          <MenuItem>{page}</MenuItem>
        ))}
        <hr />
        <MenuItem>Login</MenuItem>
        <Button>Sign Up</Button>
      </Menu>

       <FlexList>

           {
               pages.map(page => <li>{page}</li>)
           }
           <MenuItem>Login</MenuItem>
           <Button>Sign Up</Button>

       </FlexList>

    </Nav>
  );
};
