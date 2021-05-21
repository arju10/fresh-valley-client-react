import axios from "axios";
import React from "react";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const productData = {
      // name: data.name,
      productName: data.productName,
      productWight: data.productWight,
      productPrice: data.productPrice,
      imageURL: imageURL,
    };

    const url = `https://limitless-coast-06672.herokuapp.com/addProduct`;
    console.log(productData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("server side", res));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "043d7e3e5b00a44be0a030d5ab031883");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="admin__Link">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/manageProduct">
              Manage Product
            </Link>
          </div>
        </nav>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            {/* <span class="navbar-brand mb-0 h1">Add Product</span> */}
            <Link className="navbar-brand mb-0 h1" href="/addProduct">
              Add Product
            </Link>
          </div>
        </nav>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/editProduct">
              Edit Product
            </Link>
          </div>
        </nav>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Product Name</label>
        <br />
        <input
          name="productName"
          defaultValue="product name"
          ref={register}
          placeholder="Enter Name"
        />
        <br />

        <label>Wigth</label>
        <br />
        <input
          name="productWight"
          defaultValue="wight"
          ref={register}
          placeholder="Enter Name"
        />
        <br />
        <label>Add price</label>
        <br />
        <input
          type="number"
          name="productPrice"
          ref={register}
          placeholder="Enter Price"
        />
        <br />
        <label>Add photo</label>
        <br />
        <input type="file" name="imageUrl" onChange={handleImageUpload} />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export default AddProduct;
