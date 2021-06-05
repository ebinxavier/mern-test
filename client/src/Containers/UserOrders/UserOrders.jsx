import Sidebar from "components/Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import { getOrderByClient, cancelOrder } from "redux/actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { DashCircle } from "react-bootstrap-icons";
import ReactTooltip from "react-tooltip";
import EditButton from "Common/Buttons/EditButton";
import { useHistory } from "react-router-dom";
import "./UserOrders.css";
export default function UserOrders() {
  const [id, setID] = useState(null);
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { _id } = user;
    setID(_id);

    dispatch(getOrderByClient(id));
  }, [id]);

  const handleCancelOrder = (e, id) => {
    e.preventDefault();
    dispatch(cancelOrder(id));
  };
  const handleEditOrder = (id, data) => {
    history.push({
      pathname: "/orders/edit/" + id,
      state: data,
    });
  };
  return (
    <div className="row w-100">
      <Sidebar />
      <div className="col-md-9">
        <div className="row">
          <div className="col-md-4">
            {" "}
            <h4 className="table-title">Ordered AT</h4>
          </div>

          <div className="col-md-4">
            <h4 className="table-title">Status</h4>
          </div>
          <div className="col-md-4">
            <h4 className="table-title">Actions</h4>
          </div>
        </div>
        {orders.length > 0
          ? orders.map((order, index) => (
              <div className="row table-container w-100" key={index}>
                <div className="col-md-4">
                  {moment(order.createdAt).format("LLL")}
                </div>

                <div className="col-md-4">
                  <span
                    className={
                      order.isPurchased
                        ? "badge bg-soft-success text-success"
                        : "badge bg-soft-danger text-danger"
                    }
                  >
                    {order.isPurchased ? "Purchased" + "" : "Canceled"}
                  </span>
                </div>
                <div className="col-md-4">
                  <DashCircle
                    onClick={(e) => handleCancelOrder(e, order._id)}
                    data-tip
                    data-for="cancelBtn"
                    className="cancel-btn"
                  />
                  <ReactTooltip id="cancelBtn" place="top" effect="solid">
                    Cancel Order
                  </ReactTooltip>

                  <EditButton
                    onClick={() => handleEditOrder(order._id, order)}
                  />
                </div>
              </div>
            ))
          : "No Orders..!"}
      </div>
    </div>
  );
}
