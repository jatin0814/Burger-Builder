import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigations from '../NavigationItems/NavigationItems';
import DrawerToggle from '../sideDrawer/DrawerToggle/DrawerToogle';


const Toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <DrawerToggle Clicked={props.drawerToggleClicked}/>
        <Logo/>
        <nav className={classes.DesktopOnly}>
        <Navigations/>
        </nav>
    </header>
)

export default Toolbar;