import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "redux/actions/orderAction";
import moment from "moment";
export default function Table() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  const { orders } = useSelector((state) => state.orders);
  console.log(orders);
  return (
    <div className="container">
      <div className="row" style={{ padding: "15px 45px" }}>
        <div className="col-md-12">
          <div className="orders-wrapper">
            <div className="order-title">
              <h2> Orders</h2>
            </div>
            <div className="order-statistics">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>

                    <th scope="col">Order Time</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length > 0
                    ? orders.map((order, index) => (
                        <tr key={index}>
                          <td>{order.productName?.productName}</td>
                          <td>{order.productName?.productPrice + " " + "$"}</td>
                          <td>{moment(order.createdAt).format("LLL")}</td>
                          <td>{order.isPurchased + ""}</td>
                        </tr>
                      ))
                    : "No orders"}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
