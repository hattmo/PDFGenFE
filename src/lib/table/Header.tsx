import React from "react";
import editImg from "./edit.png";

interface Props {
  headers: string[];
  onHeaderClicked: () => void;
}
const Header = ({ headers, onHeaderClicked }: Props) => (
  <React.Fragment>
    <div
      onClick={() => {
        onHeaderClicked();
      }}
      className="tableItem tableHeader editCol"
    >
      <img height="15px" src={editImg} alt="" />
    </div>
    {headers.map((header, i) => {
      return (
        <div className="tableItem tableHeader" key={i}>
          {header}
        </div>
      );
    })}
    <div className="tableItem tableHeader" />
  </React.Fragment>
);

export default Header;
