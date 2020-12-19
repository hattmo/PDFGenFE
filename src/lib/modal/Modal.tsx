import React from "react";
import "./Modal.css"

interface Props {
  onClose: () => void;
}

const Modal = ({ onClose, children }: React.PropsWithChildren<Props>) => {
  return (
    <div
      onClick={() => {
        onClose();
      }}
      className="modalBackground"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
