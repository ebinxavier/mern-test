import React from "react";
import { Pen } from "react-bootstrap-icons";

export default function EditButton({ onClick }) {
  return (
    <button className="btn c-green" onClick={onClick}>
      <Pen />
    </button>
  );
}
