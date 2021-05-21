import React from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CheckOut from "../CheckOut/CheckOut";

const Order = () => {
  const [order, setOrder] = useState({});
  const { register, handleSubmit, watch, errors } = useForm();
  const [email, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const productData = {
      // name: data.name,
      productName: data.productName,
      productWight: data.productWight,
      productPrice: data.productPrice,
      userName: data.displayName,
      userEmail: data.email,
    };
    const url = `https://protected-hamlet-09778.herokuapp.com/addOrder`;
    console.log(productData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("server side", res));
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Order;
