import React from "react";
import styles from "./dialog.module.css";

const Header = React.memo(function (props) {
  const { title = "", className, onClick = () => {} } = props;
  const clzHeader = `${styles.header} ${className}`;
  return (
    <React.Fragment>
      <div className={clzHeader}>
        <h2>{title}</h2>
        <button type="button" className={styles.iconBtnClose} onClick={onClick}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </React.Fragment>
  );
});
export default Header;
