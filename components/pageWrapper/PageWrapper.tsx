import React from "react";
import styles from "./PageWrapper.module.scss";
interface IPageWrapperProps {
  children: JSX.Element[];
}

const PageWrapper: React.FC<IPageWrapperProps> = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      <header>TV Bland</header>
      {children}
    </div>
  );
};
export default PageWrapper;
