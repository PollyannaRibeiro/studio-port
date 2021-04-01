import { Grid, ButtonGroup, Button } from '@material-ui/core';
import React from 'react';
import logo from '../assets/img/logo.png';
import styled from 'styled-components';
import {Link} from 'react-router-dom'



const Logo = styled.img`
  height:50px;
  max-height:10vh;
`;

function Header(){
  return(
    <>
    <div className= 'container'>
      <div className="row">

        <div className="col-6">
          <Logo src={logo} alt = "logo"/>
        </div>

        <nav className="col-6">
          <ul className="nav justify-content-end">
            <li className="nav-item"><Link to="/" exact className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">about</Link></li>
            <li className="nav-item"><Link to="/cv" className="nav-link">Cv</Link></li>
            <li className="nav-item"><Link to="/projects" className="nav-link">Projects</Link></li>
          </ul>
        </nav>

      </div>
    </div>
      
    </>
  )
}

export default Header