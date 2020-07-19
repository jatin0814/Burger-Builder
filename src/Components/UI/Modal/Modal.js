import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) =>{
    return(
        <div>
        <Backdrop show={props.show} clicked={props.cancelOrder}/>
        <div style={{transform:props.show? 'translateY(0)' : 'translateY(-100vh)',
        opacity:props.show ? '1' : '0'}} className={classes.Modal}>
            {props.children}
        </div>
        </div>
    )
}

export default modal;