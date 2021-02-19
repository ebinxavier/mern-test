import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import "./Category.css";
import * as API from "../../../utils/api";
import Alerts from "../../../components/Alerts";
import Swal from "sweetalert2";

export default function Category() {
  const [category, setCategory] = useState("");
  const [categoryErrorr, setCategoryErrorr] = useState("");
  const [loading, setLoading] = useState(false);
  const onSubmit = (e) => {
    setLoading(true);

    e.preventDefault();
    const data = {
      category,
    };
    if (!category) {
      setCategoryErrorr("Category cannot be empty!");
      return;
    }
    API.createCategory(data).then((res) => {
      setLoading(false);
      Swal.fire(
        "Success",
        `${category} has been succesfully created!`,
        "success"
      );
      setCategory("");
    });
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
                onChange={(e) => {
                  setCategory(e.target.value);
                  setCategoryErrorr("");
                  setLoading(false);
                }}
              />
              {categoryErrorr && <Alerts errorrMessage={categoryErrorr} />}
            </div>
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
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
