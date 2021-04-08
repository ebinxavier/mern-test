import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "components/Sidebar";
import DeleteButton from "Common/Buttons/DeleteButton";
import EditButton from "Common/Buttons/EditButton";
import "./AllCategories.css";
export default function AllCategories() {
  const { categories } = useSelector((data) => data.categories);
  console.log(categories, "data");
  return (
    <div className="row" style={{ width: "100%" }}>
      <Sidebar />
      <div className="col-md-9">
        {categories.length > 0
          ? categories.map((category, index) => (
              <div className="row" key={index}>
                <div className="category-card">
                  <h4>{category.category}</h4>
                  <EditButton />
                  <DeleteButton />
                </div>
              </div>
            ))
          : "No categories"}
      </div>
    </div>
  );
}
