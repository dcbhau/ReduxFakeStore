import * as ActionTypes from "../actionTypes"
import api from "../../api"
export const fetchProducts = () => 
{
    return async (dispatch) => {
        const response = await api.get("/products");
        dispatch({type:ActionTypes.FETCH_PRODUCT,payload:response.data})
    }
}  

export const fetchProduct = (id) => 
{
    return async (dispatch) => {
        const response = await api.get(`/products/${id}`);
        dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:response.data})
    }
}  

export const getProducts = (products) => 
{
    return{
        type:ActionTypes.GET_PRODUCTS,
        payload:products
    }
}

export const selectedProduct = (product) => 
{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectedProduct = () => 
{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

