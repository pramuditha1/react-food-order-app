import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemInputForm from './MealItemInputForm'
import CartContext from '../../../store/Cart-Context'

const  MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price
    })
  }
  return (
    <li className={classes.meal}>
        <div>
            <h3 className={classes.name}>{props.meal.name}</h3>            
            <div className={classes.description}>{props.meal.description}</div>
            <div className={classes.price}>{props.meal.price}</div>
        </div>
        <div>
            <MealItemInputForm id={props.meal.id} addToCart={addToCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem