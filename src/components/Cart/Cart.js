import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/Cart-Context'

const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    console.log(cartCtx)
    const cartItems = cartCtx.items.map((item) => (<li>{item.name}</li>))
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasCartItems = cartCtx.items.length > 0
    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {
                    hasCartItems && 
                    <button className={classes.button}>Order</button>
                }
            </div>
        </Modal>
    )
}

export default Cart