import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  NavbarText,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top">
        <div className="container-fluid">
          <NavbarBrand href="/">MOVIEDB</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/movie">Movies</NavLink>{" "}
              </NavItem>
            </Nav>{" "}
            <NavLink href="/apiused">APIS USED</NavLink>{" "}
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
