import React from "react";
import { Trash } from "react-bootstrap-icons";

export default function DeleteButton({ onClick }) {
  return (
    <button className="btn c-red" onClick={onClick}>
      <Trash />
    </button>
  );
}
