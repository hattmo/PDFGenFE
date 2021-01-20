import React from "react";
import { NavLink } from "react-router-dom";

const Frame = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <header>
        <nav>
          <NavLink to="/template">Template</NavLink>
          <NavLink to="/globals">Globals</NavLink>
          <NavLink to="/data">Data</NavLink>
        </nav>
      </header>
      <div>{children}</div>
    </React.Fragment>
  );
};

export default Frame;
