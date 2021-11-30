import React, { useState } from "react";
import "./App.scss";
import AddEntry from "./Components/AddEntry/AddEntry";
import DrawerComponent from "./Components/Drawer/DrawerComponent";
import Header from "./Components/Header/Header";

function App() {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <div className="App">
      <Header
        setDrawerState={(drawerOpen: boolean) => setDrawerState(drawerOpen)}
      />
      <div className="app-content">
        <AddEntry />
      </div>
      <DrawerComponent
        drawerOpen={drawerState}
        setDrawerState={(drawerOpen: boolean) => setDrawerState(drawerOpen)}
      />
    </div>
  );
}

export default App;
