import React, {useState} from "react";
import { Nav, Menu, MenuItem, Button } from "../styles/NavStyles";
import { FlexContainer, FlexList } from "../styles/containers";
import { Menu as MenuIcon } from "@mui/icons-material";
import LogoImg from "../../images/logo.svg";

export const Navbar = () => {
  const pages = ["Features", "Pricing", "Resources"];

    const [showMenu, setShowMenu] = useState<boolean>(false);
    const toggleMenu = () => {
        setShowMenu(prev => !prev)
    }
    return (
    <Nav>
        <FlexContainer>
            <img src={LogoImg} alt="logo.svg" />
            <FlexList>
                {pages.map((page) => (
                    <li>{page}</li>
                ))}
            </FlexList>
        </FlexContainer>


      <MenuIcon sx={{ color: "#9E9AA8", display: { md: "none" } }} onClick={toggleMenu}/>
        {
showMenu &&
            <Menu>
                {pages.map((page) => (
                    <MenuItem>{page}</MenuItem>
                ))}
                <hr />
                <MenuItem>Login</MenuItem>
                <Button>Sign Up</Button>
            </Menu>
        }




      <FlexList>
        <MenuItem>Login</MenuItem>
        <Button>Sign Up</Button>
      </FlexList>
    </Nav>
  );
};
