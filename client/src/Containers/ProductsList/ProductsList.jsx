import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, deleteProduct } from "redux/actions/productActions";
import { createOrder } from "redux/actions/orderAction";
import { Modal } from "react-responsive-modal";
import OrderItem from "components/Orders/OrderItem";
import "./ProductList.css";
function ProductsList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [id, setID] = useState();
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState();
  useEffect(() => {
    dispatch(getProducts());
    const user = JSON.parse(localStorage.getItem("user"));
    const { _id } = user;
    setID(_id);
  }, [dispatch]);
  const handleOpenModal = (data) => {
    setOpen(true);
    setProduct(data);
  };
  const handleOrder = (params) => {
    const data = {
      orderBy: id,
      categoryName: params.categoryName,
      productName: params._id,
      isPurchased: true,
      qty: 5,
    };
    dispatch(createOrder(id, data));
  };

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
                          <span className="item">
                            {product.productCategory?.category}
                          </span>
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
                      <a
                        onClick={() => handleOpenModal(product)}
                        className="order-btn"
                      >
                        Order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : ""}
      <Modal open={open} onClose={() => setOpen(false)}>
        <OrderItem product={product} />
      </Modal>
    </div>
  );
}

export default ProductsList;
