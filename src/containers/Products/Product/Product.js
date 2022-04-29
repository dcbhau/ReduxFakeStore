import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Product = (props) => 
{   
    const products = useSelector(state => state.allProducts.products);
    const renderList = products.map((product) => (
            <div className="col-4" key={product.id}>
                    <Link to={'/product/' + product.id}>
                        <div className="card">
                            <img src={product.image} className="card-img-top card-image" alt={product.title} />
                            <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.price}</p>
                                    <p className="card-text">{product.category}</p>
                            </div>  
                        </div>
                    </Link>
            </div>
    ))
    return(
        <>
        {products.length === 0 ? (<div>Loading...</div>) : renderList}
        </>
        
    )
}
export default Product;