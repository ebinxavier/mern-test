import React from "react";
import { ArrowLeft } from "react-bootstrap-icons";

export default function EditOrders(props) {
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
                    />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="number"
                      name="productPrice"
                      className="form-control auth-inputs"
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
              </div>
              <div className="row justify-content-center mt-3">
                <button className="btn btn-primary purple-btn">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
