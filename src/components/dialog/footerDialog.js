import React from "react";
import styles from "./dialog.module.css";
import Button from "../button/button";

const Footer = React.memo(function (props) {
  const {
    content = "",
    className = "",
    isMutilBtn = false,
    onClick = () => {},
    onClose = () => {},
    onRenderContent,
  } = props;

  const renderContent = () => {
    if (onRenderContent) {
      return onRenderContent();
    }
    if (isMutilBtn) {
      return (
        <>
          <Button styleType="cancel" text="No" onClick={onClose} />
          <Button text="Yes" onClick={onClick} />
        </>
      );
    }
    return <div className={styles.footerContent}>{content}</div>;
  };

  return (
    <div className={`${styles.footer} ${className}`}>{renderContent()}</div>
  );
});
export default Footer;
