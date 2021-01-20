import React, { useState } from "react";
import { useGetData, useGetHeaders, useUpdateData } from "../DataContext";
import { DataItem } from "../table/types";
import "./Forms.css";

interface Props {
  onSubmit: () => void;
  row?: number;
}
const EditForm = ({ onSubmit, row }: Props) => {
  const data = useGetData();
  const updateData = useUpdateData();
  const headers = useGetHeaders();
  const [editData, setEditData] = useState<DataItem>(
    row === undefined ? {} : data[row]
  );

  return (
    <div className="editPane formPane">
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
        className="formButton"
        onClick={() => {
          updateData(editData, row);
          onSubmit();
        }}
        type="button"
        value="save"
      />
    </div>
  );
};

export default EditForm;
