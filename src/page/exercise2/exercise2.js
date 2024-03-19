import React from "react";
import Button from "../../components/button/button";
import Body from "../../components/dialog/bodyDialog";
import Dialog from "../../components/dialog/dialog";
import Footer from "../../components/dialog/footerDialog";
import Header from "../../components/dialog/headerDialog";
import { useBoolean } from "../../hook/useBoolean";
import img_girl from "../../asset/img/img_girl.jpg";
import img_workplace from "../../asset/img/workplace.jpg";

const Exercise2 = () => {
  const [isOpenDialog, { setTrue :openDialog, setFalse: hidenDialog }] = useBoolean(false);
  const [isOpenModal, { setTrue :openModal, setFalse: hidenModal }] = useBoolean(false);
  const customHeaderDialog = () => {
    return (
      <Header className="header-dialog" title="Bilions" onClick={hidenDialog}/>
    );
  };
  const customBodyDialog = () => {
    return <Body className="" onRenderContent={<img src={img_girl} alt="img_girl" width="200" height="200"/>} />;
  };
  
  const renderfooter = () => {
      return <div style={{display: 'flex'}} width="100%">
        <img src={img_workplace} alt="img_workplace" width="50" height="50" style={{marginRight: '5px'}}/>
        <img src={img_workplace} alt="img_workplace" width="50" height="50" style={{marginRight: '5px'}}/>
        <img src={img_workplace} alt="img_workplace" width="50" height="50" style={{marginRight: '5px'}}/>
        <img src={img_workplace} alt="img_workplace" width="50" height="50" style={{marginRight: '5px'}}/>
        <img src={img_workplace} alt="img_workplace" width="50" height="50" style={{marginRight: '5px'}}/>
        <img src={img_workplace} alt="img_workplace" width="50" height="50" style={{marginRight: '5px'}}/>
      </div>
  }
  const customFooterDialog = () => {
    return (
      <Footer className="border-footer" onClose={hidenDialog} onRenderContent={renderfooter}/>
    );
  };

  const customHeaderModal = () => {
    return (
      <Header className="header-modal" title="" onClick={hidenModal} />
    );
  };
  const customBodyModal = () => {
    return <Body className="" content="Are you sure you want to remove this team?" />;
  };
  const customFooterModal = () => {
    return (
      <Footer className="" isMutilBtn={true} onClose={hidenModal} onClick={hidenModal} />
    );
  };
  return (
    <React.Fragment>
      <strong>
        EXERCISE #2 - Create a generic dialog component that can be customized
        with any content
      </strong>

      <Button text="Open Dialog" onClick={openDialog} />
      <Button styleType="cancel" text="Open Modal" onClick={openModal} />

      {isOpenModal && (
        <Dialog
          isDarkOverlay={true}
          onClose={hidenModal}
          onRenderHeader={customHeaderModal()}
          onRenderBody={customBodyModal()}
          onRenderFooter={customFooterModal()}
        ></Dialog>
      )}
      {isOpenDialog && (
        <Dialog
          isDarkOverlay={false}
          onClose={hidenDialog}
          onRenderHeader={customHeaderDialog()}
          onRenderBody={customBodyDialog()}
          onRenderFooter={customFooterDialog()}
        ></Dialog>
      )}
    </React.Fragment>
  );
};
export default Exercise2;
