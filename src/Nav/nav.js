import React, { Component } from 'react';
import './nav.css'
import {Link} from 'react-router-dom';


class Nav extends Component {
    render() {
      return (
        <div className="nav-wrapper">
        <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/setting">
            <li>Settings</li>
            </Link>
            <Link to="contact">
            <li>Contact</li>
            </Link>
            <Link to="topics">
            <li>Topics</li>
            </Link>


        </ul>
         </div>
      );
    }
  }

export default Nav;