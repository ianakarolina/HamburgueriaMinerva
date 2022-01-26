import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";

import{SiHomeassistantcommunitystore} from "react-icons/si";

import {
    FooterContainer,
    FooterName,
    FooterUnities,
    SocialIcons,
    SocialIconLink,
    FooterInfo,
    Horarios,
} from "./styles"

function Footer() {
  return (
    <FooterContainer>
        <FooterName>HAMBURGUERIA</FooterName>
        <FooterUnities><SiHomeassistantcommunitystore/> Confira nossas unidades</FooterUnities>
        <SocialIcons>
            <SocialIconLink href='/' aria-label='Facebook'><FaFacebook/></SocialIconLink>
            <SocialIconLink href='/' aria-label='Instagram'><FaInstagram/></SocialIconLink>
            <SocialIconLink href='/' aria-label='Youtube'><FaYoutube/></SocialIconLink>
        </SocialIcons>
        {/* <FooterInfo>
          <Horarios>Horários: Seg a Sexta 8h às 18h/Sáb e Dom 14h às 02h</Horarios>
        </FooterInfo>
           */}
    </FooterContainer>
  );
}

export default Footer;
