import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/Cart-Context'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const noOfCartItems = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {noOfCartItems}
        </span>
    </button>
  )
}

export default HeaderCartButton