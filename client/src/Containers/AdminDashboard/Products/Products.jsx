import React, { useState, useEffect } from "react";
import "./Products.css";
import { ArrowLeft } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "redux/actions/categoryAction";
import { createProduct } from "redux/actions/productActions";
import { checkIsEmpty } from "utils/authValidators";
import Alert from "components/Alerts";
export default function Products(props) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { loading } = useSelector((state) => state.loading);
  const { successMessage } = useSelector((state) => state.messages);
  const [productErrors, setProductErrors] = useState({
    name: "",
    price: "",
    productImage: "",
    description: "",
    category: "",
    quantity: "",
  });
  useEffect(() => {
    dispatch(getCategories());
  }, []);

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
    setProductErrors({
      ...productErrors,
      name: "",
      price: "",
      productImage: "",
      description: "",
      category: "",
      quantity: "",
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
    setProductErrors({
      ...productErrors,
      name: "",
      price: "",
      productImage: "",
      description: "",
      category: "",
      quantity: "",
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
    if (!checkIsEmpty(productData.name)) {
      setProductErrors({
        ...productErrors,
        name: "Name cannot be empty!",
      });
      return;
    }
    if (!checkIsEmpty(productData.price)) {
      setProductErrors({
        ...productErrors,
        price: "Price cannot be empty!",
      });
      return;
    }
    if (!checkIsEmpty(productData.productImage)) {
      setProductErrors({
        ...productErrors,
        productImage: "Image cannot be empty!",
      });
      return;
    }
    if (!checkIsEmpty(productData.category)) {
      setProductErrors({
        ...productErrors,
        category: "Category cannot be empty!",
      });
      return;
    }
    if (!checkIsEmpty(productData.quantity)) {
      setProductErrors({
        ...productErrors,
        quantity: "Quantity cannot be empty!",
      });
      return;
    }

    dispatch(createProduct(formData));
    Swal.fire("Success", successMessage, "success");
    setProductData({
      ...productData,
      name: "",
      price: "",
      productImage: "",
      description: "",
      category: "",
      quantity: "",
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
                      className="form-control auth-inputs"
                    />
                    {productErrors.name && (
                      <Alert errorrMessage={productErrors.name} />
                    )}
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="number"
                      name="price"
                      value={productData.price}
                      onChange={handleChange}
                      className="form-control auth-inputs"
                    />
                    {productErrors.price && (
                      <Alert errorrMessage={productErrors.price} />
                    )}
                  </div>
                  <div className=" form-group">
                    <label class="form-label" for="customFile">
                      Default file input example
                    </label>
                    <input
                      type="file"
                      className="form-control auth-inputs"
                      name="productImage"
                      id="customFile"
                      onChange={handleFile}
                    />
                    {productErrors.productImage && (
                      <Alert errorrMessage={productErrors.productImage} />
                    )}
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
                      className="form-control auth-inputs"
                    />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      type="text"
                      className="form-control auth-inputs"
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
                    {productErrors.category && (
                      <Alert errorrMessage={productErrors.category} />
                    )}
                  </div>
                  <div className="form-group">
                    <label>Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      value={productData.quantity}
                      onChange={handleChange}
                      className="form-control auth-inputs"
                    />
                    {productErrors.quantity && (
                      <Alert errorrMessage={productErrors.quantity} />
                    )}
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <button className="btn purple-btn" onClick={onSubmit}>
                  {loading ? (
                    <>
                      <span className="mr-2">Loading...</span>
                      <div
                        class="spinner-border text-white"
                        style={{ width: 20, height: 20 }}
                        role="status"
                      />
                    </>
                  ) : (
                    "Create"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
