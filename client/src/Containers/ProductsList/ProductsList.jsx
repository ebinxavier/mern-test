import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, deleteProduct } from "redux/actions/productActions";
import "./ProductList.css";
function ProductsList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="row mt-5">
      {products.length > 0
        ? products.map((product, index) => (
            <div className="col-12 col-xl-6" key={index}>
              <div className="card product-item">
                <div className="card-body">
                  <div className="row m-b-30">
                    <div className="col-md-5 col-xxl-12">
                      <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                        <div className="new-arrivals-img-contnent">
                          <img
                            className="img-fluid"
                            src={`/uploads/${product.fileName}`}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-xxl-12">
                      <div className="new-arrival-content position-relative">
                        <h4>{product.productName}</h4>
                        {console.log(product, "pr")}
                        {/* <div className="comment-review star-rating">
                          <span className="review-text">(34 reviews) /</span>
                          <a
                            className="product-review"
                            href="/react/ecom-product-list"
                          >
                            {" "}
                            Write a review?
                          </a>
                          <p className="price">$548.00</p>
                        </div> */}
                        <p>
                          Category:{" "}
                          <span className="item">{product.category}</span>
                        </p>
                        <p>
                          Quantity:{" "}
                          <span className="item">{product.productQty}</span>
                        </p>
                        <p>
                          {" "}
                          Price:{" "}
                          <span className="price">
                            {product.productPrice + " " + "$"}
                          </span>
                        </p>
                        <p className="text-content">
                          {product.productDescription}
                        </p>
                      </div>
                      <a className="order-btn">Order</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}

export default ProductsList;
