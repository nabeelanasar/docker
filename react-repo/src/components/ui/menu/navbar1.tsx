/*
* navbar.tsx.
*
* @author Vishnu
* @version 1.0.0
*/

import React from 'react';

import * as Bootstrap  from 'react-bootstrap';

import classes from './navbar.module.css';
import { LinkContainer } from '../index';


export const Navbar = ( props: any ) => {

    return (
        <Bootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Bootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Bootstrap.Navbar.Collapse id="responsive-navbar-nav">
                <Bootstrap.Nav className="mr-auto">
                    <LinkContainer to="/"exact>
                        <Bootstrap.Nav.Link>Home</Bootstrap.Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/blogs" activeClassName= { classes.myActive } className= { classes.default }>
                        <Bootstrap.Nav.Link >Blogs</Bootstrap.Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/projects" activeClassName= { classes.myActive }>
                        <Bootstrap.Nav.Link>Projects</Bootstrap.Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/covid" activeClassName= { classes.myActive }>
                        <Bootstrap.Nav.Link>Covid</Bootstrap.Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/products" activeClassName= { classes.myActive }>
                        <Bootstrap.Nav.Link>Products</Bootstrap.Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/services" activeClassName= { classes.myActive }>
                        <Bootstrap.Nav.Link>Services</Bootstrap.Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/print" activeClassName= { classes.myActive }>
                        <Bootstrap.Nav.Link>Print</Bootstrap.Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/person" activeClassName= { classes.myActive }>
                        <Bootstrap.Nav.Link>Person</Bootstrap.Nav.Link>
                    </LinkContainer>
                </Bootstrap.Nav>
                <Bootstrap.Nav className={ classes.default }>
                    {/* <LinkContainer to="/auth" activeClassName= { classes.myActive }>
                        <Bootstrap.Nav.Link>Sign In</Bootstrap.Nav.Link>
                    </LinkContainer> */}
                    { (props.isAuthenticated)? 
                        <LinkContainer to="/signout" activeClassName= { classes.myActive }>
                            <Bootstrap.Nav.Link>Sign Out</Bootstrap.Nav.Link>
                        </LinkContainer>
                    :   <LinkContainer to="/auth" activeClassName= { classes.myActive }>
                            <Bootstrap.Nav.Link>Sign In</Bootstrap.Nav.Link>
                        </LinkContainer> }
                    
                    
                </Bootstrap.Nav>
                {/* <Bootstrap.Nav>
                    {authContext.authenticated ?
                        <Bootstrap.Nav.Item onClick={authContext.loginLogout}><Bootstrap.Nav.Link>Log Out</Bootstrap.Nav.Link></Bootstrap.Nav.Item>
                    :   <Bootstrap.Nav.Item onClick={authContext.loginLogout}><Bootstrap.Nav.Link>Log In</Bootstrap.Nav.Link></Bootstrap.Nav.Item>}
                </Bootstrap.Nav> */}
            </Bootstrap.Navbar.Collapse>
        </Bootstrap.Navbar>
    );
}
