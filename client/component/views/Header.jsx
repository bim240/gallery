import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <Navbar className="header_contaienr" collapseOnSelect sticky="top">
        <Container>
          <Navbar.Brand
            title="Home"
            href="/"
            className="font-weight-bold mob_brand text-secondary">
            Gallery
          </Navbar.Brand>

          <Nav className="ml-auto h4_heading mob_nav_bar ">
            <img
              title="Profile Image"
              className="header_image"
              src="https://avatars2.githubusercontent.com/u/50172413?s=400&u=0573967b786828dda99a1efb64dff093fb654f08&v=4"
              alt="profile image"
            />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
