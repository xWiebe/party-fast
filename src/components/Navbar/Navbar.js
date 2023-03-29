import React from 'react';
import Title from '../Text/Title'
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { BsList } from 'react-icons/bs';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand"><Title></Title></a>
      <Dropdown menuAlign="right">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          <BsList />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/home">Home</Dropdown.Item>
          <Dropdown.Item href="/feesten">Bussen</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
}

export default Navbar;