import React, { useState, useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://protected-hamlet-09778.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {};

  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/manageProduct">
              Manage Product
            </Link>
          </div>
        </nav>

        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/addProduct">
              Add Product
            </Link>
          </div>
        </nav>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/editProduct">
              Edit Product
            </Link>
          </div>
        </nav>

        <h1>Manage Product</h1>
      </div>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Wight</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.productName}</td>
              <td>{item.productWight}</td>
              <td>{item.productPrice}</td>
              <td>
                <button>Delete</button>
              </td>
              <td />
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProduct;
