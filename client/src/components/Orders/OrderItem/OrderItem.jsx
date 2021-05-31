import React from "react";
import { Dash } from "react-bootstrap-icons";

import "./OrderItem.css";
export default function OrderItem(props) {
  console.log(props, "propshere");
  return (
    <div className="row">
      <div className="col-md-6">image</div>
      <div className="col-md-6">
        <div className="product">
          <h1 className="product-title">Test</h1>
          <div className="product-price">$500</div>
          <div className="product-content">
            Morbi purus libero, faucibus adipiscing, commodo quis, gravida id,
            est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
            lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
            neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
            pede arcu, dapibus eu,{" "}
          </div>
          <div className="quantity-filter-row">
            <label>QTY</label>
            <div className="product-details-quantity">
              <input type="number" className="form-control d-none" />
              <div className="input-group input-spinner">
                <div className="input-group-prepend">
                  <button className="btn btn-spinner">
                    <Dash style={{ margin: 0 }} />
                  </button>
                  <input type="text" className="form-control text-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
