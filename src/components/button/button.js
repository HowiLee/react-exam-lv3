import React from "react";
import styles from "./button.module.css";

const Button = React.memo(function (props) {
  const {
    type = "button",
    styleType = "default",
    text,
    className,
    onClick = () => {},
  } = props;
  const clz = `${styles.btn} ${styles["btn-" + styleType]} ${className}`;
  return (
    <button type={type} className={clz} onClick={onClick}>
      {text}
    </button>
  );
});
export default Button;
