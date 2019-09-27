import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginClearAction } from '../../store/modules/auth/login.actions';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handlerLogout = (event) => {
    dispatch(loginClearAction());
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/dashboard" exact className="nav-link">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/dashboard/users" exact className="nav-link">Usuarios</NavLink>
            </NavItem>
            <NavItem>
              <span onClick={handlerLogout} className="nav-link cursor-pointer">Cerrar sesión</span>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                  </DropdownItem>
                <DropdownItem>
                  Option 2
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );

}

export default Menu;