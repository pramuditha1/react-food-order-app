import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/Cart-Context'
import CartItem from './CartItem/CartItem'

const Cart = (props) => {

    const cartCtx = useContext(CartContext)

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    }

    const cartItemRemoveHandler = (id) => {
        //cartCtx.removeItem({...item, amount: 1})
    }

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasCartItems = cartCtx.items.length > 0;

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartCtx.items.map((item) => (
                    <CartItem 
                        item={item} 
                        onRemove={cartItemRemoveHandler.bind(null, item.id)} 
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />)
                )}
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