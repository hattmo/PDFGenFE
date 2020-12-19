import React, { useState } from "react";
import { useGetHeaders, useSetHeaders } from "../DataContext";
import Modal from "./Modal";
import deleteImg from "../table/delete.png"

interface Props {
  onClose: () => void;
}
const HeaderModal = ({ onClose }: Props) => {
  const headers = useGetHeaders();
  const setHeaders = useSetHeaders();
  const [editHeaders, setEditHeaders] = useState(headers);
  return (
    <Modal onClose={onClose}>
      <div>
        {editHeaders.map((header, index) => {
          return (
            <React.Fragment>
              <input
                type="text"
                value={header}
                onChange={(e) => {
                  const tempHeaders = [...editHeaders];
                  tempHeaders[index] = e.target.value;
                  setEditHeaders(tempHeaders);
                }}
              />
              <div
                onClick={() => {
                  setEditHeaders(editHeaders.filter((_, i) => i !== index))
                }}
              >
                <img height="15px" src={deleteImg} alt="" />
              </div>
            </React.Fragment>
          );
        })}
        <input
          onClick={() => {
            setHeaders(editHeaders);
            onClose();
          }}
          type="button"
          value="save"
        />
      </div>
    </Modal>
  );
};

export default HeaderModal;
