import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
import Navcomp from '../StyleComp/Navcomp.css';
import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';

function NavbarComp() {
  return (

    <div>

      <Navbar bg="dark" className='nav-cust'>
      <div style={{marginLeft:50}}>
    </div>
      </Navbar>
    </div>
  )
}

export default NavbarComp;