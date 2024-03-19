/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ContentDialog from "./bodyDialog";
import styles from "./dialog.module.css";
import Footer from "./footerDialog";
import Header from "./headerDialog";

const Dialog = React.memo(function (props) {
  const {
    isDarkOverlay = true,
    onClick = () => {},
    onClose = () => {},
    onRenderHeader,
    onRenderBody,
    onRenderFooter,
  } = props;

  const renderHeader = () => {
    if (onRenderHeader) {
      return onRenderHeader;
    }
    return <Header onClick={onClose}/>;
  };

  const renderBody = () => {
    if (onRenderBody) {
      return onRenderBody;
    }
    return <ContentDialog />;
  };

  const renderFooter = () => {
    if (onRenderFooter) {
      return onRenderFooter;
    }
    return <Footer onClick={onClick} onClose={onClose}/>;
  };

  let wapper = isDarkOverlay ? `${styles.modal}` : `${styles.dialog}`;

  return (
    <React.Fragment>
      <div className={isDarkOverlay ? styles.overlay : ""} />
      <div className={wapper}>
        {renderHeader()}
        {renderBody()}
        {renderFooter()}
      </div>
    </React.Fragment>
  );
});
export default Dialog;
