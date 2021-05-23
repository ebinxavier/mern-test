import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "components/Sidebar";
import DeleteButton from "Common/Buttons/DeleteButton";
import EditButton from "Common/Buttons/EditButton";
import "./AllCategories.css";
import { deleteCategory } from "redux/actions/categoryAction";
export default function AllCategories() {
  const dispatch = useDispatch();
  const { categories } = useSelector((data) => data.categories);

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };
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
                  <DeleteButton onClick={() => handleDelete(category._id)} />
                </div>
              </div>
            ))
          : "No categories"}
      </div>
    </div>
  );
}
