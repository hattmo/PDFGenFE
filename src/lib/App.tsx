import React from "react";
import DataContext from "./DataContext";
import DataItemsPage from "./pages/DataItemsPage";

const App = () => {
  return (
    <DataContext initialHeaders={["foo","bar"]}>
      <DataItemsPage></DataItemsPage>
    </DataContext>
  );
};

export default App;
