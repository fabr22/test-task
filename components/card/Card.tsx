import React from "react";
import styles from "./Card.module.scss";
import { IImage } from "../../httpClient/types";
import EmptyPictureIcon from "../svg/EmptyPictureIcon";
import Rating from "../rating/Rating";
import Link from "next/link";

interface ICardProps {
  cardImage: IImage | null;
  rating: number | null;
  title: string;
  showId: number;
}

const Card: React.FC<ICardProps> = ({ cardImage, rating, title, showId }) => {
  return (
    <Link href={`/show/${showId}`}>
      <div className={styles.cardWrapper}>
        <div
          className={styles.cardImage}
          style={{
            backgroundImage: `url(${cardImage?.original ?? ""})`,
            backgroundColor: cardImage?.original ? "unset" : "#c8c8c8",
          }}
        >
          {!cardImage?.original && <EmptyPictureIcon />}
        </div>
        <Rating rating={rating} />
        <div className={styles.cardTitle}>{title}</div>
      </div>
    </Link>
  );
};

export default Card;
