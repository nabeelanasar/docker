/*
 * App.tsx.
 * 
 * @author Viji
 * @version 1.0.0
 */

import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MasterLayout1 from '../hoc/ApplyLayouts/MasterLayout1';
import BlogPage from './BlogPage/BlogPage';
import BlogDetail from '../components/blogs/blogDetail/blogDetail';
import ProjectPage from './ProjectPage/ProjectPage';
import CovidPage from './CovidPage/CovidPage';
import ProductPage from './ProductPage/ProductPage';
import ServicePage from './ServicePage/ServicePage';
import ServiceDetail from '../components/services/serviceDetail/serviceDetail';
import Print from '../components/print/print';
import PersonPage from '../containers/PersonPage/PersonPage';
import ErrorPage from '../containers/ErrorPage/ErrorPage';
import Auth from './Auth/Auth';
import SignUp from './Auth/SignUp';
import SignOut from './Auth/SignOut';
import { connect } from 'react-redux';


interface Props {
  isAuthenticated: boolean;
  user: any;
}

class App extends Component<Props> {

  render( ) {
   
    console.log( 'App render' );

    let routes = (
      <Switch>
          <Route path = "/auth" component = { Auth }/>
          <Route path = "/signup" component = { SignUp }/>
          <Route path = "/services?servicesCategoryId=id" component = { ServicePage }/> 
          <Route path = "/services/:id" component = { ServiceDetail }/>
          <Route path = "/services" component = { ServicePage }/>
          <Route path = "/print" component = { Print }/>
          <Route path = "/person" component = { PersonPage }/>
          <Route path = "/" exact render={ ( ) => <h1>Home</h1> }/>
          <Redirect to = "/" />
      </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path = "/signout" component = { SignOut }/>
          
          <Route path = "/blogs/:id" component = { BlogDetail }/>
          <Route path = "/blogs" component = { BlogPage }/>
          <Route path = "/blogs?blogsCategoryId=id" component = { BlogPage }/>
          <Route path = "/projects/:id" component = { ProjectPage }/>
          <Route path = "/projects" component = { ProjectPage }/>
          <Route path = "/covid/:id" component = { CovidPage }/>  
          <Route path = "/covid"component = { CovidPage }/> 
          <Route path = "/products/categories/:id" component = { ProductPage }/>        
          <Route path = "/products" component = { ProductPage }/>
          <Route path = "/services?servicesCategoryId=id" component = { ServicePage }/> 
          <Route path = "/services/:id" component = { ServiceDetail }/>
          <Route path = "/services" component = { ServicePage }/>
          <Route path = "/error" component = { ErrorPage }/>
          {/* <Route path = "/" exact render={ ( ) => <h1>{`Welcome ${this.props.user.firstName} ${this.props.user.lastName}`}</h1> }/> */}
          <Redirect to = "/" />
          {/* <Route render = { ( ) => <h1>Page Not Found!</h1> }/> */}
        </Switch>
      );
    }
  
    return (
      <MasterLayout1>
        { routes }
      </MasterLayout1>
    );
  }
}

const mapStateToProps = ( state: any ) => {
  return {
      isAuthenticated: state.auth.token != null,
      user: state.auth.user
  };
};

export default connect( mapStateToProps )( App );
