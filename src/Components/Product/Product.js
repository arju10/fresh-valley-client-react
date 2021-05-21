import React from 'react';
import {useHistory} from 'react-router-dom';

const Product = ({product}) => {
    const{_id} = product;
    const history = useHistory();
    // const [productName,productWight,productPrice,imageURL] = product.product;
    const handleBuyProduct = (id) =>{
        history.push(`/checkout/${id}`);
    }
    return (
        <div className = "col-md-4">
            <img style={{height:"300px"}}src={product.imageURL} alt=""/>
            <h3>{product.productName}-{product.productWight}</h3>
            <h3>{product.productPrice} <button onClick = {()=>handleBuyProduct(_id)}>Buy </button></h3>
        </div>
    );
};

export default Product;