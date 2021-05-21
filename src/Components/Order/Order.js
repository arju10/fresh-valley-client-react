import React, { useState, useEffect } from "react";

const Order = () => {
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    fetch("https://limitless-coast-06672.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return (
    <div>
      {orders.map((order) => (
        <li>{order.productName}</li>
      ))}
    </div>
  );
};

export default Order;
