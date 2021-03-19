import React, { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import Sidebar from "components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, searchUsers } from "redux/actions/userActions";
import Loader from "components/Loaders";
import DeleteButton from "Common/Buttons/DeleteButton";
import EditButton from "Common/Buttons/EditButton";
import "./Users.css";
export default function Users() {
  const { users } = useSelector((state) => state.users);
  console.log(useSelector((data) => data));
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const { loading } = useSelector((loading) => loading);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(searchUsers(query));
  };
  const handleDelete = () => {
    console.log("delete btn");
  };
  const handleEdit = () => {
    console.log("edit btn");
  };
  return (
    <div className="d-flex w-100">
      <div className="row w-100">
        <Sidebar />
        <div className="col-md-9">
          <div className="container mt-4">
            <div class="search">
              {" "}
              <input
                type="text"
                class="search-input"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />{" "}
              <a href="#" class="search-icon" onClick={handleSearch}>
                {" "}
                <Search style={{ fontSize: 18 }} />
              </a>{" "}
            </div>

            <div className="row table-header w-100">
              <div className="col-md-3">
                <h4 className="table-title">Username</h4>
              </div>
              <div className="col-md-3">
                <h4 className="table-title">Email</h4>
              </div>
              <div className="col-md-3">
                <h4 className="table-title">Role</h4>
              </div>
              <div className="col-md-3">
                <h4 className="table-title">Actions</h4>
              </div>
            </div>

            {users.length > 0
              ? users.map((user, index) => (
                  <div className="row table-container w-100" key={index}>
                    <div className="col-md-3">{user.username}</div>
                    <div className="col-md-3">{user.email}</div>
                    <div className="col-md-3">
                      {user.role === 1 ? "Admin" : "User"}
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex">
                        <DeleteButton onClick={() => handleDelete()} />
                        <EditButton onClick={() => handleEdit()} />
                      </div>
                    </div>
                  </div>
                ))
              : "No Users..!"}
          </div>
        </div>
      </div>
    </div>
  );
}
