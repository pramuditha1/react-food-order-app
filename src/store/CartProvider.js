import React, { useReducer } from 'react'
import CartContext from './Cart-Context'

const defaultCartState = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        //calculate total amount
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

        //chack existing items na get id if already available
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
          );
        //get existing item form state.items
        const existingItem = state.items[existingItemIndex];

        //cart items holding global variable
        let updatedCartItems;

        //if existing item available update that with action.item.amount
        if (existingItem) {
            const updatedCartItem = {
                ...existingItem,
                amount: action.item.amount + existingItem.amount
            }
            updatedCartItems = [...state.items]
            updatedCartItems[existingItemIndex] = updatedCartItem;
        } else {
            updatedCartItems = state.items.concat(action.item)
        }
        return {
            items: updatedCartItems,
            totalAmount: updatedTotalAmount,
        }
    } else if (action.type === 'REMOVE') {
        //get existing item index
        const existingItemIndex = state.items.findIndex((item) => item.id === action.id)
        const existingItem = state.items[existingItemIndex]

        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedCartItems;

        if (existingItem.amount > 1) {
            let updatedItem = {...existingItem, amount: existingItem.amount - 1}
            updatedCartItems = [...state.items]
            updatedCartItems[existingItemIndex] = updatedItem
        } else if (existingItem.amount === 1) {
            updatedCartItems = state.items.filter((item) => item.id !== action.id)
        }
        return {
            items: updatedCartItems,
            totalAmount: updatedTotalAmount,
        }
    }
    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCart = (item) => { 
        dispatchCartAction({type: 'ADD', item: item}) 
    }
    const removeItemFromCart = (id) => {
        dispatchCartAction({type: "REMOVE", id: id}) 
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider