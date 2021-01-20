import React from "react";
import "./Modal.css";

interface Props {
  onClose: () => void;
  isOpen: boolean;
}

const Modal = ({
  onClose,
  isOpen,
  children,
}: React.PropsWithChildren<Props>) => {
  return isOpen ? (
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
  ) : null;
};

export default Modal;
