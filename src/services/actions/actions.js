import { ADD_TO_CART, REMOVE_CART } from '../constants'

export const addToCart = (data) => {
    // console.warn("action",data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}



export const removeCart = (data) => {
    // console.warn("action",data)
    return {
        type: REMOVE_CART,
        data: data
    }
}