import React from "react";
import {
  faStar as fasStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Rating = ({ rating, text }) => {
  const totalRating = [1, 2, 3, 4, 5];
  return (
    <>
      {totalRating.map((rate) =>
        rate <= rating ? (
          <FontAwesomeIcon icon={fasStar} />
        ) : rate - 0.5 == rating ? (
          <FontAwesomeIcon icon={faStarHalf} />
        ) : (
          <FontAwesomeIcon icon={farStar} />
        )
      )}
      {text}
    </>
  );
};

export default Rating;
