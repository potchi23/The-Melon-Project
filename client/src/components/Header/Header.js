import React, { Component } from 'react';
import { Navbar, NavItem, NavbarBrand, Button } from 'reactstrap';
import styles from './Header.module.css';
import { FaSignOutAlt } from 'react-icons/fa';

class Header extends Component {
    constructor(props){
        super(props);

        this.handleLogout = this.handleLogout.bind(this);     
    }

    handleLogout(event){
        this.props.logoutUser();
    }

    render(){
        return(
            <Navbar className={styles.Navbar}>
                <NavbarBrand className={styles.NavbarBrand}>Dashboard</NavbarBrand>

                <Button onClick={this.handleLogout} value="submit" color="danger"><FaSignOutAlt/> Logout</Button>
            </Navbar>
        );
    }

}

export default Header;