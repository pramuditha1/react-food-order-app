import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemInputForm.module.css'

const MealItemInputForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0
    || enteredAmountNumber < 1 
    || enteredAmountNumber > 5) {
      setAmountIsValid(false)
      return;
    }

    props.addToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input
            label="Amount"
            ref={amountInputRef}
            input={{
                id: `amount_${props.id}`,
                type: "number",
                defaultValue: "1",
                min: "1",
                max: "5",
                step: "1"
            }}
            />
        <button type="submit">Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)!</p>}
    </form>
  )
}

export default MealItemInputForm