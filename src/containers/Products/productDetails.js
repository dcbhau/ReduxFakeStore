import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct,removeSelectedProduct } from "../../store/actions/productionActions";

const ProductDetails = () => 
{
    const product = useSelector(state => state.product)
    const dispatch = useDispatch();
    const {productId} = useParams();
    useEffect(()=>{
        if(productId && productId !== "")
        {
            dispatch(fetchProduct(productId));
        }
        return(() => 
        {
            dispatch(removeSelectedProduct());
        })
    },[])
    return(
        <div className="container">
            <div className="row">
                {Object.keys(product).length === 0 ? (<div>Loading ...</div>):(
                    <div className="col-12">
                        <div className="productDetails">
                            <div className="image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="product-content">
                                <h3>{product.title}</h3>
                                <h2><span className="badge badge-info">{product.price} $</span></h2>
                                <h3> <span className="badge badge-dark">{product.category}</span></h3>
                                <p>{product.description}</p>
                                <p>rating : {product.rating.rate} ({product.rating.count})</p>
                            </div>
                        </div>
                        
                </div>
                )}

                
            </div>
        </div>
    )
}
export default ProductDetails;