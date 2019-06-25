import React from 'react'
import { Menu, MenuToggle, useMenu } from './Menu'
import { NavList, NavItem, NavLink } from './Nav'
import { Link } from 'react-router-dom'
import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'
import './Header.scss'

export default function Header() {
  const { open } = useMenu()
  return (
    <header className="header">
      <h1 className="header-logo">Priority Inc</h1>
      <MenuToggle className="header-menu-toggle">
        {open ? (
          <CloseIcon className="header-menu-toggle__icon" />
        ) : (
          <MenuIcon className="header-menu-toggle__icon" />
        )}
      </MenuToggle>
      <Menu>
        <NavList>
          <NavItem>
            <NavLink to="/" as={Link}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about/" as={Link}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact/" as={Link}>
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/featured/" as={Link}>
              Featured
            </NavLink>
          </NavItem>
        </NavList>
      </Menu>
    </header>
  )
}
