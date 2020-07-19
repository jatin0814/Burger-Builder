import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigations from '../NavigationItems/NavigationItems';

const Toolbar = () =>(
    <header className={classes.Toolbar}>
        <Logo/>
        <nav>
        <Navigations/>
        </nav>
    </header>
)

export default Toolbar;