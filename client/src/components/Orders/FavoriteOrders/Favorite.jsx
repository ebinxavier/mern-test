import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Favorite.css";
import { getAllOrders } from "redux/actions/orderAction";

export default function Favorite() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
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
          <div className="orders-wrapper">
            <div className="order-title">
              <h2> Orders</h2>
            </div>
            <div className="order-statistics">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
