import React, { useState } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { handleUpdateProduct } from "redux/actions/productActions";
import { useDispatch } from "react-redux";
export default function Updateproduct(props) {
  const {
    history: {
      location: {
        state: { data },
      },
    },
  } = props;
  const dispatch = useDispatch();
  const [updateProduct, setUpdateProduct] = useState(data);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateProduct({
      ...updateProduct,
      [name]: value,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const id = data._id;
    const params = {
      productName: updateProduct.productName,
      productPrice: updateProduct.productPrice,
      productDescription: updateProduct.productDescription,
      productQty: updateProduct.productQty,
    };
    // setUpdateProduct({
    //   updateProduct: params,
    // });
    dispatch(handleUpdateProduct(id, params));
  };

  return (
    <>
      <div className="header-bar">
        <ArrowLeft
          className="back-btn"
          onClick={() => props.history.goBack()}
        />
        <h4 className="nav-title">Update Product</h4>
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
                      name="productName"
                      className="form-control auth-inputs"
                      value={updateProduct.productName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="number"
                      name="productPrice"
                      className="form-control auth-inputs"
                      value={updateProduct.productPrice}
                      onChange={handleChange}
                    />
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
                    />
                  </div>
                </div>
                <div className="col-md-6 sm-12 xs-12">
                  <div className="form-group">
                    <label>Description</label>
                    <input
                      type="text"
                      name="productDescription"
                      className="form-control auth-inputs"
                      value={updateProduct.productDescription}
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="form-group">
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
                  
                </div> */}
                  <div className="form-group">
                    <label>Quantity</label>
                    <input
                      type="number"
                      name="productQty"
                      className="form-control auth-inputs"
                      value={updateProduct.productQty}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <button
                  className="btn btn-primary purple-btn"
                  onClick={handleUpdate}
                >
                  Update
                </button>
                {/* <button className="btn purple-btn" onClick={onSubmit}>
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
              </button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
