import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Favorite.css";
export default function Favorite() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllOrders());
  // }, []);
  return (
    <div className="container">
      <div className="row main">
        <div className="col-md-12">
          <div className="orders-wrapper">
            <div className="order-title">
              <h2>Favorite Orders</h2>
            </div>
            <div className="order-statistics">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6">1</div>
                <div className="col-xl-3 col-lg-3 col-md-6">2</div>
                <div className="col-xl-3 col-lg-3 col-md-6">3</div>
                <div className="col-xl-3 col-lg-3 col-md-6">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
