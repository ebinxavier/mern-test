import React, { useMemo } from "react";
import Icon from "./RatingIcon";
export default function Rattings({
  rating,
  hoverRating,
  index,
  onMouseEnter,
  onMouseLeave,
  onSaveRating,
}) {
  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return "#b39cd0";
    } else if (!hoverRating && rating >= index) {
      return "#b39cd0";
    }
    return "none";
  }, [rating, hoverRating, index]);

  return (
    <div
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <Icon fill={fill} />
    </div>
  );
}
