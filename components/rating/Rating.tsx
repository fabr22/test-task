import React from "react";
import styles from "./Rating.module.scss";
import RateStar from "../svg/RateStar";
import RateStarPlaceholder from "../svg/RateStarPlaceholder";
interface IRatingProps {
  rating: number | null;
}

const starsCount = 5;

const renderStars = (rating: number | null) => {
  const stars = [];
  if (!rating) {
    return <span>No reviews yet</span>;
  } else {
    for (let i = 0; i < starsCount; i++) {
      if (i < rating / 2 - 1) {
        stars.push(<RateStar key={i} />);
      } else {
        stars.push(<RateStarPlaceholder key={i} />);
      }
    }
    return stars;
  }
};

const Rating: React.FC<IRatingProps> = ({ rating }) => (
  <div className={styles.ratingRow}>
    {renderStars(rating)}
    {rating !== null && <div>{(rating / 2).toFixed(1)}/5</div>}
  </div>
);

export default Rating;
