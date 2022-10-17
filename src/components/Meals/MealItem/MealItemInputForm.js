import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemInputForm.module.css'

const MealItemInputForm = (props) => {
  return (
    <form className={classes.form}>
        <Input
            label="Amount"
            input={{
                id: `amount_${props.id}`,
                type: "number",
                defaultValue: "1",
                min: "1",
                max: "5",
                step: "1"
            }}
            />
        <button>Add</button>
    </form>
  )
}

export default MealItemInputForm