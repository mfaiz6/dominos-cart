import { createSlice } from "@reduxjs/toolkit";
import { pizza } from "../assets/data";

const initialState = {
    myCart: [],
    items: pizza,
    totalQuantity: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.myCart.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state.myCart[find].quantity += 1
            } else {
                state.myCart.push(action.payload)
            }
        },

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.myCart.reduce(
                (cartTotal, cartItem) => {
                    console.log(cartTotal);
                    console.log(cartItem);
                    const { price, quantity } = cartItem
                    console.log(price, quantity);
                    const itemTotal = price * quantity
                    cartTotal.totalPrice += itemTotal
                    cartTotal.totalQuantity += quantity
                    return cartTotal
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0
                }
            )
            state.totalPrice = parseInt(totalPrice.toFixed(2))
            state.totalQuantity = totalQuantity
        },

        removeItem: (state, action) => {
            state.myCart = state.myCart.filter((item) => item.id !== action.payload)
        },

        increaseItemQuantity: (state, action) => {
            state.myCart = state.myCart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item
            })
        },

        decreaseItemQuantity: (state, action) => {
            state.myCart = state.myCart.map((item) => {
                if (item.id === action.payload) {
                    if (item.quantity)
                        return { ...item, quantity: item.quantity - 1 }
                    else
                        return item
                }
                return item
            })
        },


    }
});

export const { addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions

export default cartSlice.reducer
