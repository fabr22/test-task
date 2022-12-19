import React from "react";
import styles from "./ShowPageWrapper.module.scss";
interface IShowPageWrapperProps {
  children: JSX.Element | null;
}

const ShowPageWrapper: React.FC<IShowPageWrapperProps> = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      <header>TV Bland</header>
      {children}
    </div>
  );
};
export default ShowPageWrapper;
