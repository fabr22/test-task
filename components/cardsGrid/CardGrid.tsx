import React from "react";
import styles from "./CardsGrid.module.scss";

interface ICardsGridProps {
  children: JSX.Element[];
}

const CardGrid: React.FC<ICardsGridProps> = ({ children }) => (
  <>
    <h3 className={styles.title}>Last Added Shows</h3>
    <div className={styles.cardsGrid}>{children}</div>
  </>
);

export default CardGrid;
