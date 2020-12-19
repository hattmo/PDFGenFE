import React, { useState } from "react";
import { useGetHeaders } from "../DataContext";
import { DataItem } from "../table/types";
import "./EditModal.css";
import Modal from "./Modal";

interface Props {
  onSubmit: (newData: DataItem) => void;
  inputData: DataItem | undefined;
  onClose: () => void;
}
const EditModal = ({ onSubmit, onClose, inputData }: Props) => {
  const headers = useGetHeaders();
  const [editData, setEditData] = useState(inputData ?? {});
  return (
    <Modal onClose={onClose}>
      <div className="editPane">
        {headers.map((header) => {
          return (
            <React.Fragment>
              <div>{header}</div>
              <input
                type="text"
                value={editData[header] ?? ""}
                onChange={(e) => {
                  setEditData({ ...editData, [header]: e.target.value });
                }}
              />
            </React.Fragment>
          );
        })}
        <input
          className="editButton"
          onClick={() => {
            onSubmit(editData);
          }}
          type="button"
          value="save"
        />
      </div>
    </Modal>
  );
};

export default EditModal;
