import { combineReducers } from "redux";
import { productReducer,selectedProductReducer } from "./productionReducer";

export const reducer = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
})