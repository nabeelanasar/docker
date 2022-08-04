/*
* navbar.tsx.
*
* @author Vineetha
* @version 1.0.0
*/

import React from 'react';
import { Link } from 'react-router-dom';


export const Menu = ( props: any ) => {

    return (
        <div className = "ui stackable inverted menu">
            <div className = "ui container">
                {/* <a className="toc item">
                <i className="sidebar icon"></i>
                </a> */}
                <Link to = { '/' } className = "section item">Home</Link>
                { (props.isAuthenticated)? 
                <Link to = { '/blogs' } className = "section item">Blogs</Link> : null }
                { (props.isAuthenticated)? 
                <Link to = { '/projects' } className = "section item">Projects</Link> : null }
                { (props.isAuthenticated)? 
                <Link to = { '/covid' } className = "section item">Covid</Link> : null }
                { (props.isAuthenticated)? 
                <Link to = { '/products' } className = "section item">Products</Link>: null }
                <Link to = { '/services' } className = "section item">Services</Link>
                <Link to = { '/print' } className = "section item">Print</Link>
                <Link to = { '/person' } className = "section item">Person</Link>
                <div className="right item">
                { (props.isAuthenticated)? 
                        <Link to = { '/signout' } className = "section item">Sign Out</Link>
                    :   <Link to = { '/auth' } className = "section item">Sign In</Link> }
                </div>
            </div>
        </div>
    );
}

export const FollowingMenu = ( props: any ) => {

    return (
        <div className="ui large top fixed hidden menu">
            <div className="ui container">
                <Link to = { '/' } className = "section item">Home</Link>
                <Link to = { '/blogs' } className = "section item">Blogs</Link>
                <Link to = { '/projects' } className = "section item">Projects</Link>
                <Link to = { '/covid' } className = "section item">Covid</Link>
                <Link to = { '/products' } className = "section item">Products</Link>
                <Link to = { '/services' } className = "section item">Services</Link>
                <Link to = { '/print' } className = "section item">Print</Link>
                <Link to = { '/person' } className = "section item">Person</Link>
                <div className="right menu">
                    { (props.isAuthenticated)? 
                        <Link to = { '/signout' } className = "section item">Sign Out</Link>
                    :   <Link to = { '/auth' } className = "section item">Sign In</Link> }
                </div>
            </div>
        </div>
    );
}

export const SidebarMenu = ( props: any ) => {

    return (
        <div className="ui vertical inverted sidebar menu">
            <Link  to = { '/' } className = "active item">Home</Link>
            <Link  to = { '/blogs' } className = "item">Blogs</Link>
            <Link  to = { '/projects' } className = "item">Projects</Link>
            <Link  to = { '/covid' } className = "item">Covid</Link>
            <Link  to = { '/products' } className = "item">Products</Link>
            <Link  to = { '/services' } className = "item">Services</Link>
            <Link  to = { '/print' } className = "item">Print</Link>
            <Link  to = { '/person' } className = "item">Person</Link>
            { (props.isAuthenticated)? 
                        <Link to = { '/signout' } className = "section item">Sign Out</Link>
                    :   <Link to = { '/auth' } className = "section item">Sign In</Link> }
        </div>
    );
}