import React from 'react'
import classes from './MealItem.module.css'
import MealItemInputForm from './MealItemInputForm'

const  MealItem = (props) => {
  return (
    <li className={classes.meal}>
        <div>
            <h3 className={classes.name}>{props.meal.name}</h3>            
            <div className={classes.description}>{props.meal.description}</div>
            <div className={classes.price}>{props.meal.price}</div>
        </div>
        <div>
            <MealItemInputForm id={props.meal.id}/>
        </div>
    </li>
  )
}

export default MealItem