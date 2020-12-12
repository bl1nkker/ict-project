import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="app-header"> 
                <Link to="/content-photograph">Find Job</Link>
                <Link to="/profile-photograph">My Profile</Link>
                <Link to="/" className='company-logo'>Vspyshka</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/demo-version">Demo Version</Link>
                
            </header>
        )
    }
}
