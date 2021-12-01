import React, { useState } from "react";
import "./App.scss";
import AddEntry from "./Components/AddEntry/AddEntry";
import DrawerComponent from "./Components/Drawer/DrawerComponent";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import AppPage from "./Components/AppPage/AppPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={AppPage} />
      <Route path="/addEntry" component={AddEntry} />
    </BrowserRouter>
  );
}

export default App;
