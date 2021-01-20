import React from "react";
import DataContext from "./DataContext";
import DataItemsPage from "./pages/DataItemsPage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Frame from "./frame/Frame";
import FileDrop from "./fileDrop/FileDrop";

const App = () => {
  return (
    <Router>
      <DataContext initialHeaders={["Group", "Name"]}>
        <Frame>
          <Switch>
            <Route path="/data">
              <FileDrop>
                <DataItemsPage />
              </FileDrop>
            </Route>
            <Route path="/globals"></Route>
            <Route path="/template"></Route>
            <Route>
              <Redirect to="/data" />
            </Route>
          </Switch>
        </Frame>
      </DataContext>
    </Router>
  );
};

export default App;
