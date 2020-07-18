import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { MdAddAPhoto } from "react-icons/md";

const Header = (props) => {
  return (
    <>
      <Navbar
        className="sticky_bottom"
        collapseOnSelect
        expand="md"
        sticky="top"
        bg="dark"
        variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="font-weight-bold mob_brand">
            Gallery
          </Navbar.Brand>
          <div className="mob_hamburger_icon">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>

          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ml-auto h4_heading mob_nav_bar ">
              <NavDropdown title="Bimlendu" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  <FaUser className="mr-2" />
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <MdAddAPhoto className="mr-2" />
                  Add Image
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  {" "}
                  <IoMdLogOut className="mr-2" />
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className={`mr-2 nav-link mob_nav_bar_link`}
                href="#home">
                <img
                  className="header_image"
                  src="https://avatars2.githubusercontent.com/u/50172413?s=400&u=0573967b786828dda99a1efb64dff093fb654f08&v=4"
                  alt="profile image"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
