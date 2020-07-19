import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES ={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon:0.7
}

class BurgerBuilder extends Component{
    
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purhasable:false,
        purchasing:false
    }


    changePurchasing = () =>{
        this.setState({purchasing:true})
    }

    updatePurhaseState = (updateIngredient) => {
        const ingredients = updateIngredient;
        const sum = Object.keys(ingredients).map(igkey=>{
            return ingredients[igkey];
        }).reduce((sum,el)=>{
            return sum + el;
        },0)
        this.setState({purhasable:sum>0})
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updateIngredient = {
            ...this.state.ingredients
        };
        updateIngredient[type] = newCount;
        const totalPrice = this.state.totalPrice;
        const updateTotalPrice = totalPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients:updateIngredient,totalPrice:updateTotalPrice});
        this.updatePurhaseState(updateIngredient);
    }


    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        let newCount = oldCount - 1;
        if(oldCount<=0){
            return
        }
        const updateIngredient = {
            ...this.state.ingredients
        };
        updateIngredient[type] = newCount;
        const totalPrice = this.state.totalPrice;
        const updateTotalPrice = totalPrice - INGREDIENT_PRICES[type];
        this.setState({ingredients:updateIngredient,totalPrice:updateTotalPrice});
        this.updatePurhaseState(updateIngredient);
    }

    cancelOrder = () =>{
        this.setState({purchasing:false})
    }

    continueOrder = () =>{
        alert("YOU CAN CONTINUE")
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0;
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} cancelOrder={this.cancelOrder}>
                    <OrderSummary ingredient={this.state.ingredients}
                    price={this.state.totalPrice}
                    continueOrder={this.continueOrder} 
                    cancelOrder={this.cancelOrder}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls ingredientAdded={this.addIngredientHandler}
                    totalPrice = {this.state.totalPrice}
                    disabled = {disabledInfo}
                    purhasable={this.state.purhasable}
                    orderd = {this.changePurchasing}
                 ingredientRemove={this.removeIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;