import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'reactstrap';

class Dashboard extends Component{

    constructor(props){
        super(props);
    }

    render(){
        if(this.props.isAuthenticated){
            return(
                <div>
                    <h4>Holaaaaaaaaaaaaaaaaaa :D</h4>
                </div>
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