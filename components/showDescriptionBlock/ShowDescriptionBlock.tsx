import React from "react";
import styles from "./ShowDescriptionBlock.module.scss";
import EmptyPictureIcon from "../svg/EmptyPictureIcon";
import { IImage, IRating } from "../../httpClient/types";
import Rating from "../rating/Rating";

interface IShowDescriptionBlock {
  rating: IRating;
  cardImage: IImage | null;
  title: string;
  description: string;
}

const ShowDescriptionBlock: React.FC<IShowDescriptionBlock> = ({
  rating,
  cardImage,
  title,
  description,
}) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${cardImage?.original ?? ""})`,
          backgroundColor: cardImage?.original ? "unset" : "#c8c8c8",
        }}
      >
        {!cardImage?.original && <EmptyPictureIcon />}
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.ratingRowWrapper}>
          <Rating rating={rating.average} />
        </div>
        <div className={styles.title}>{title}</div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default ShowDescriptionBlock;
