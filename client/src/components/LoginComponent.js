import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import logo from '../shared/resources/logo.png';
import { Redirect } from 'react-router-dom';


class Login extends Component{
    constructor(props){
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event){

        const creds = {
            username : this.username.value,
            password : this.password.value
        }

        this.props.loginUser(creds);
    }

    render(){
        if (this.props.isAuthenticated) {
            return (
                <Redirect to="/dashboard"/>
            );
        }
        else{
            return(
                <div className="container">
                    
                    <div className="row p-5">
                        <div className="col mt-5">
                            <h4><b>THE MELON PROJECT</b></h4>
                            <img src={logo} width="85rem" height="85rem" draggable="false" alt="logo"/>
                        </div>
                    </div>
                    <div className="row p-4">
                        <div className="col-sm-4 offset-sm-4">
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Input type="text" 
                                        id="username" 
                                        name="username" 
                                        innerRef={(input) => this.username = input}
                                        placeholder="Username"
                                        className="mb-3 py-3"
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Input type="password" 
                                        id="password" 
                                        name="password" 
                                        innerRef={(input) => this.password = input}
                                        placeholder="Password" 
                                        className="mb-4 py-3"
                                    />
                                </FormGroup>

                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" 
                                            name="remember" 
                                            innerRef={(input) => this.remember = input}
                                            className="mb-5"
                                        /> Remember me
                                    </Label>
                                </FormGroup>

                                <Button className="btn btn-outline-primary"type="submit" value="submit" color="white">Login</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Login;