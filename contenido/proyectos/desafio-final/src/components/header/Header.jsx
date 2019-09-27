import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import { logoutActionCreator } from '../../store/modules/auth/login.actions';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const Header = (props) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen ] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const logout = () => {
        dispatch(logoutActionCreator());
        props.history.push('/login')
      }
    return (
      <div className="mb-4">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto bla" navbar>
              <NavItem>
              <NavLink tag={RRNavLink} exact to="/dashboard/users/create" activeClassName="active">Nuevo usuario</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={RRNavLink} exact to="/dashboard/users" activeClassName="active">Listado de usuarios</NavLink>
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
                  <DropdownItem onClick={logout}>
                    Cerrar Sesión
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  export default Header;