import React from "react";
import { FooterWrapper, FooterLink, MenuItem, IconWrapper, Logo } from "../styles";
import { FooterColumn } from "./FooterColumn";
const footerColumns = {
  features: ["Link Shortening", "Branded Links", "Analytics"],
  resources: ["Blog", "Developers", "Support"],
  company: ["About", "Our Team", "Careers", "Contact"],
  icons: ["facebook", "twitter", "pinterest", "instagram"],
};

const Footer = () => {
  return (
    <FooterWrapper>
        <Logo>
        <h4>Shortly</h4>
        </Logo>
      
      <FooterColumn title="Features">
        
        {footerColumns.features.map((feature, index) => (
          <MenuItem key={index}>
            <FooterLink href="#">{feature}</FooterLink>
          </MenuItem>
        ))}
      </FooterColumn>

      <FooterColumn title="Resources">
        {footerColumns.resources.map((resource, index) => (
          <MenuItem key={index}>
            <FooterLink href="#">{resource}</FooterLink>
          </MenuItem>
        ))}
      </FooterColumn>

      <FooterColumn title="Company">
        {footerColumns.company.map((item, index) => (
          <MenuItem key={index}>
            <FooterLink href="#">{item}</FooterLink>
          </MenuItem>
        ))}
      </FooterColumn>
      <IconWrapper>
        {footerColumns.icons.map((img, index) => (
          <img key={index} src={`../../images/icon-${img}.svg`} alt={`${img} icon`} />
        ))} 
       
      </IconWrapper>
    </FooterWrapper>
  );
};

export default Footer;
