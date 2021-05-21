import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ManageProduct from "../ManageProduct/ManageProduct";
import Product from "../Product/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://limitless-coast-06672.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="row">
      <Spinner animation="border" variant="success" />
      {products.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
  );
};

export default Home;
