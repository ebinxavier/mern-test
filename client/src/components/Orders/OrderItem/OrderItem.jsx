import React, { useState } from "react";
import { Dash, Plus } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "redux/actions/orderAction";
import Swal from "sweetalert2";

import "./OrderItem.css";
export default function OrderItem(props) {
  const { product, id } = props;
  const [quantity, setQuantity] = useState(1);
  const { successMessage } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const handleOrder = (e) => {
    e.preventDefault();
    const data = {
      orderBy: id,
      categoryName: product.categoryName,
      productName: product._id,
      isPurchased: true,
      qty: quantity,
    };
    dispatch(createOrder(id, data));
    Swal.fire("Success!", successMessage, "success");
  };
  return (
    <div className="row">
      <div className="col-md-6" style={{ background: "#fafafa" }}>
        <img src={`/uploads/${product.fileName}`} className="product-image" />
      </div>
      <div className="col-md-6">
        <div className="product">
          <h1 className="product-title">{product?.productName}</h1>
          <div className="product-price">
            {product?.productPrice + " " + "$"}
          </div>
          <div className="product-content">{product?.productDescription}</div>
          <div className="quantity-filter-row">
            <label>QTY</label>
            <div className="product-details-quantity">
              <input type="number" className="form-control d-none" />
              <div className="quantity-control">
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity === 1}
                >
                  <Dash style={{ margin: 0 }} />
                </button>
                <input
                  type="number"
                  className="quantity-input"
                  value={quantity}
                />

                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus style={{ margin: 0 }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-5">
        <button className="btn purple-btn" onClick={handleOrder}>
          Order
        </button>
      </div>
    </div>
  );
}
