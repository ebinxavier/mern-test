import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFavoriteReviews } from "redux/actions/reviewsAction";
import "./Favorite.css";
import axios from "axios";
export default function Favorite() {
  const { reviews } = useSelector((data) => data.reviews);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetFavoriteReviews());
  }, []);
  return (
    <div className="container">
      <div className="row main">
        <div className="col-md-12">
          <div className="orders-wrapper">
            <div className="order-title">
              <h2>Favorite Orders</h2>
            </div>
            {console.log(reviews)}
            <div className="order-statistics">
              {reviews.length > 0
                ? reviews.map((favorite, index) => (
                    <div className="row" key={index}>
                      {console.log(favorite, "favorite")}
                      <div className="col-xl-3 col-lg-3 col-md-6">
                        <div class="card item-card card-block">
                          <img
                            src={`/uploads/${favorite?.products[0]?.fileName}`}
                          />
                          <h5 class="card-title  mt-3 mb-3">
                            {" "}
                            {favorite?.products[0]?.productName}
                          </h5>
                          <div class="card-text">
                            <div>
                              <span>Ratted : </span>
                              <div className="ratted-item">
                                <span>{favorite.nrRating} Times</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : "No favorite orders"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
