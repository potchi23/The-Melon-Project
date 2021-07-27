import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'reactstrap'

class Dashboard extends Component{

    constructor(props){
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(event){
        this.props.logoutUser();
    }

    render(){
        if(this.props.isAuthenticated){
            return(
                <div>
                    <h4>Dashboard</h4>
                    <Form onSubmit={this.handleLogout}>
                        <Button type="submit" value="submit" color="danger">Logout</Button>
                    </Form>
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