import React from "react";
import styles from "./dialog.module.css";

const Body = React.memo(function ({
  content = "",
  onRenderContent,
}) {
  const renderContent = () => {
    if (onRenderContent) {
      return onRenderContent;
    }
    return <div className={styles.bodyContent}>{content}</div>;
  };
  return (
    <React.Fragment>
      <div className={styles.body}>
        {renderContent()}
      </div>
    </React.Fragment>
  );
});
export default Body;
