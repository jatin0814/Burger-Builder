import React from 'react';
import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'


const OrderSummary = (props) =>{

    const ingredientSummary = Object.keys(props.ingredient).map(igkey=>{
        return <li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span>:{props.ingredient[igkey]}</li>
    })

    return(
    <Aux>
        <h3>Your Order</h3>
        <p>A delicious Burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: {props.price.toFixed(2)} $</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={props.cancelOrder}>CANCEL</Button>
        <Button btnType="Success" clicked={props.continueOrder}>CONTINUE</Button>
    </Aux>
    );
}

export default OrderSummary;