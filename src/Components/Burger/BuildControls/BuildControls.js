import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
]

const BuildControls = (props) =>{
    return(
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.totalPrice.toFixed(2)} $</strong></p>
            {controls.map(ctrl=>(
                <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                disable={props.disabled[ctrl.type]}
                remove={()=>props.ingredientRemove(ctrl.type)}
                added={()=>props.ingredientAdded(ctrl.type)}
                />
            ))}
            <button className={classes.OrderButton} onClick={props.orderd} disabled={!props.purhasable}>ORDER NOW</button>
        </div>
    );
}

export default BuildControls; 