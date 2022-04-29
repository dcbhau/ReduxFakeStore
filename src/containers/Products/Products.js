import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/actions/productionActions";
import Product from "./Product/Product";
const Products = (props) => 
{
    const dispatch = useDispatch();
    useEffect(() => 
    {
        dispatch(fetchProducts());
    })
    
    return(
        <div className="container">
            <div className="row">
                <Product/>
            </div>
        </div>
    )
}
export default Products;