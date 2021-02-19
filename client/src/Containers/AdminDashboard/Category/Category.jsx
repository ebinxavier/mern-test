import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import "./Category.css";
import * as API from "../../../utils/api";
export default function Category() {
  const [category, setCategory] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    API.createCategory(category);
  };
  return (
    <div className="row" style={{ width: "100%" }}>
      <Sidebar />
      <div className="col-md-9">
        <div className="category-wrapper">
          <form>
            <div class="mb-3">
              <label htmlFor="exampleInputEmail1" class="form-label">
                Category name
              </label>
              <input
                type="text"
                className="form-control auth-inputs"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <button className="btn btn-pink" onClick={onSubmit}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
