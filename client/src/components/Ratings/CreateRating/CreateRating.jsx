import React, { useState, useEffect } from "react";
import Rate from "components/Ratings";
import "./CreateRating.css";
export default function CreateRating({ product, id }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = (index) => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      reviewedBy: id,
      product: product._id,
      comment,
      ratting: rating,
    };
    console.log(data, "data");
  };
  return (
    <>
      <div className="ratings-wrapper">
        {[1, 2, 3, 4, 5].map((index) => {
          return (
            <Rate
              index={index}
              rating={rating}
              hoverRating={hoverRating}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onSaveRating={onSaveRating}
            />
          );
        })}
      </div>
      {rating !== 0 && (
        <div className="form-group mt-3 comment-container">
          <label>Comment</label>

          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="form-control comment-input"
          />
          <button className="btn btn-outline-primary" onClick={onSubmit}>
            Add Review
          </button>
        </div>
      )}
    </>
  );
}
