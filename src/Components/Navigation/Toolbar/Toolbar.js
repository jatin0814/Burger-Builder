import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigations from '../NavigationItems/NavigationItems';

const Toolbar = () =>(
    <header className={classes.Toolbar}>
        <Logo/>
        <div>MENU</div>
        <nav>
        <Navigations/>
        </nav>
    </header>
)

export default Toolbar;