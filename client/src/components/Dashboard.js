import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component{
    render(){
        if(this.props.isAuthenticated){
            return(
                <h4>Dashboard</h4>
            );
        }
        else{
            return(
                <Redirect to="/login"/>
            );
        }
    }
}

export default Dashboard;