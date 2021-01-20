import React from "react";
import { useGetData, useGetHeaders } from "../DataContext";
import Header from "./Header";
import Row from "./Row";
import "./Table.css";

interface Props {
  onEditClicked: (row: number) => void;
  onHeaderClicked: () => void;
}
const Table = ({ onEditClicked, onHeaderClicked }: Props) => {
  const headers = useGetHeaders();
  const data = useGetData();
  const style: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `20px repeat(${headers.length},1fr) 20px`,
  };
  return (
    <div
      className="table"
      style={style}
    >
      <Header onHeaderClicked={onHeaderClicked} headers={headers} />
      {data.map((dataItem, i) => {
        return (
          <Row
            onEditClicked={onEditClicked}
            rowNum={i}
            dataItem={dataItem}
            headers={headers}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Table;
