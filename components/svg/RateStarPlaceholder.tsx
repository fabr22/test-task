import React from "react";
import styles from "./Star.module.scss";
const RateStarPlaceholder: React.FC = () => (
  <svg
    className={styles.starSvg}
    width="10px"
    height="10px"
    viewBox="0 0 20 20"
    id="star_filled"
    data-name="star filled"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={styles.starSvg}
      fill={"#b2b2b2"}
      id="Star"
      d="M10,15,4.122,18.09l1.123-6.545L.489,6.91l6.572-.955L10,0l2.939,5.955,6.572.955-4.755,4.635,1.123,6.545Z"
      stroke="#b2b2b2"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
  </svg>
);

export default RateStarPlaceholder;
