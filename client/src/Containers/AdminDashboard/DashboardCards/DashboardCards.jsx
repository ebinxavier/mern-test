import React, { useEffect } from "react";
import "./Index.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "redux/actions/productActions";
import { getCategories } from "redux/actions/categoryAction";
import { getUsers } from "redux/actions/userActions";
import axios from "axios";
export default function DashboardCards() {
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
    dispatch(getUsers());
    axios.get("/api/orders").then((res) => {
      console.log("orders", res);
    });
  }, [dispatch]);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
          <div className="card statistics-card shadow-sm">
            <div className="card-body">
              <h5 className="text-muted">Users</h5>
              <h3 className="card-title">{users.length}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
          <div className="card statistics-card shadow-sm">
            <div className="card-body">
              <h5 className="text-muted">Products</h5>

              <h3 className="card-title">{products.length}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
          <div className="card statistics-card shadow-sm">
            <div className="card-body">
              <h5 className="text-muted">Categories</h5>

              <h3 className="card-title">{categories.length}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
          <div className="card statistics-card shadow-sm">
            <div className="card-body">
              <h5 className="text-muted">Orders</h5>

              <h3 className="card-title">1</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
