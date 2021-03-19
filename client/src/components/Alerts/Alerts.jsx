import React from "react";

export default function Alerts({ errorrMessage }) {
  return (
    <div className="alert alert-danger mt-4" role="alert">
      {errorrMessage}
    </div>
  );
}
