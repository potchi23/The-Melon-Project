import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { loginUser, logoutUser } from '../redux/auth/AuthActionCreators'

import Login from './LoginComponent';
import Dashboard from './Dashboard';
import Header from './Header/Header';

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
        const RenderHeader = () =>{
            if(this.props.auth.isAuthenticated){
                return(
                    <Header logoutUser={this.props.logoutUser}/>
                );
            }
            else{
                return(<div/>);
            }
        }

        return(
            <div>
                <RenderHeader/>

                <Switch>
                    <Route exact path="/login" component={() => <Login isAuthenticated={this.props.auth.isAuthenticated} loginUser={this.props.loginUser}/>}/>
                    <Route exact path="/dashboard" component={() => <Dashboard isAuthenticated={this.props.auth.isAuthenticated}/>}/>
                    <Redirect to="/dashboard"/>
                </Switch>
            </div>
        );
    }
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));