import React from "react";
import { DataItem } from "./types";
import editImg from "./edit.png";
import deleteImg from "./delete.png"
import { useDeleteData } from "../DataContext";

interface Props {
  headers: string[];
  dataItem: DataItem;
  rowNum: number;
  onEditClicked: (row: number) => void;
}

const Row = ({ headers, dataItem, rowNum, onEditClicked }: Props) => {
  const deleteData = useDeleteData();
  const col = headers.map((header) => dataItem[header] ?? "");
  const className =
    "tableItem " + (rowNum % 2 === 0 ? "evenTableItem" : "oddTableItem");
  return (
    <React.Fragment>
      <div
        className={className + " editCol"}
        onClick={() => {
          onEditClicked(rowNum);
        }}
      >
        <img height="15px" src={editImg} alt="" />
      </div>
      {col.map((text) => {
        return <div className={className}>{text}</div>;
      })}
      <div
        className={className + " editCol"}
        onClick={() => {
          deleteData(rowNum);
        }}
      >
        <img height="15px" src={deleteImg} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Row;
