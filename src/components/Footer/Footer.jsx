import React from 'react'

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#DF3750", 
                   fontSize:"24px",
                   fontWeight:"bold",
                   textAlign: "center", 
                   marginTop: "-50px",
                   marginBottom:"40px" }}>
        BOOK MY SHOW CLONE
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">24/7 CUSTOMER SUPPORT</FooterLink>
            <FooterLink href="#">RESEND BOOKING CONFIRMATION</FooterLink>
            <FooterLink href="#">SUBSSCRIBE TO THE NEWSLETTER</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">MOVIES NOW IN KOCHI</FooterLink>
            <FooterLink href="#">UPCOMING MOVIES IN KOCHI</FooterLink>
            <FooterLink href="#">THINGS TO DO IN KOCHI</FooterLink>
            <FooterLink href="#">BOOK MY SHOW EXCLUSIVES</FooterLink>
          </Column>
          <Column>
            <Heading>Countries</Heading>
            <FooterLink href="#">Kochi</FooterLink>
            <FooterLink href="#">Chennai</FooterLink>
            <FooterLink href="#">Banglore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Connect Us</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer
