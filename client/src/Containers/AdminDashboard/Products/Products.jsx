import React, { useState, useEffect } from "react";
import "./Products.css";
import { ArrowLeft } from "react-bootstrap-icons";
import * as API from "../../../utils/api";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/actions/categoryAction";
export default function Products(props) {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data, "dd");
  useEffect(() => {
    // getAllCategory();
    dispatch(getCategories());
  }, []);
  // const getAllCategory = async () => {
  //   await API.getCategory().then((res) => {
  //     console.log("ress", res);
  //     setCategories(res.data.categories);
  //   });
  // };
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    productImage: "",
    description: "",
    category: "",
    quantity: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };
  const handleFile = (e) => {
    // let formData = new FormData()
    // formData.append('file',e.target.files[0])
    let formData = new FormData();
    formData.append("productImage", e.target.files[0]);

    setProductData({
      ...productData,
      [e.target.name]: e.target.files[0],
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("productName", productData.name);
    formData.append("productPrice", productData.price);
    formData.append("productImage", productData.productImage);
    formData.append("productDescription", productData.description);
    formData.append("productCategory", productData.category);
    formData.append("productQty", productData.quantity);
    API.createProduct(formData).then((res) => {
      console.log("done");
      Swal.fire(
        "Success",
        `${productData.name} has been succesfully created!`,
        "success"
      );
      setProductData({
        ...productData,
        name: "",
        price: "",
        productImage: "",
        description: "",
        category: "",
        quantity: "",
      });
    });
  };
  return (
    <>
      <div className="header-bar">
        <ArrowLeft
          className="back-btn"
          onClick={() => props.history.goBack()}
        />
        <h4 className="nav-title">Create Product</h4>
      </div>
      <div className="content">
        <div className="inner-content">
          <form>
            <div className="container">
              <div className="row">
                <div className="col-md-6 sm-12 xs-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={productData.name}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="text"
                      name="price"
                      value={productData.price}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className=" form-group">
                    <label class="form-label" for="customFile">
                      Default file input example
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name="productImage"
                      id="customFile"
                      onChange={handleFile}
                    />
                    {console.log(productData)}
                  </div>
                </div>
                <div className="col-md-6 sm-12 xs-12">
                  <div className="form-group">
                    <label>Description</label>
                    <input
                      type="text"
                      name="description"
                      value={productData.description}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      type="text"
                      className="form-control"
                      name="category"
                      value={productData.category}
                      onChange={handleChange}
                    >
                      {categories &&
                        categories.map((category, index) => (
                          <option key={index} value={category._id}>
                            {category.category}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={productData.quantity}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <button className="btn purple-btn" onClick={onSubmit}>
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
