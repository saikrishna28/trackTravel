import React from "react";
import "./App.scss";
import AddEntry from "./Components/AddEntry/AddEntry";
import { BrowserRouter, Route } from "react-router-dom";
import AppPage from "./Components/AppPage/AppPage";
import VehiclesDetails from "./Components/VehiclesDetails/VehiclesDetails";
import ConsolidatedReport from "./Components/ConsolidatedReport/ConsolidatedReport";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={AppPage} />
      <Route path="/addEntry" component={AddEntry} />
      <Route path="/vehicleDetails" component={VehiclesDetails} />
      <Route path="/consolidatedReport" component={ConsolidatedReport} />
    </BrowserRouter>
  );
}

export default App;
