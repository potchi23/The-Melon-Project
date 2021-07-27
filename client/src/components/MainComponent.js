import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { loginUser, logoutUser } from '../redux/auth/AuthActionCreators'

import Login from './LoginComponent';
import Dashboard from './Dashboard';

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        loginUser : (creds) => dispatch(loginUser(creds)),
        logoutUser : () => dispatch(logoutUser())
    }
);

class Main extends Component{
    render(){

        return(
            <Switch>
                <Route exact path="/login" component={() => <Login isAuthenticated={this.props.auth.isAuthenticated} loginUser={this.props.loginUser}/>}/>
                <Route exact path="/dashboard" component={() => <Dashboard isAuthenticated={this.props.auth.isAuthenticated} logoutUser={this.props.logoutUser}/>}/>
                <Redirect to="/dashboard"/>
            </Switch>
        );
    }
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));