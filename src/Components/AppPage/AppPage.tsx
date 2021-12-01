import React, { useState } from "react";
import DrawerComponent from "../Drawer/DrawerComponent";
import Header from "../Header/Header";
import "./AppPage.scss";

interface AppPageProps {}

const AppPage: React.FunctionComponent<AppPageProps> = (props) => {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <div className="app-page">
      <Header
        setDrawerState={(drawerOpen: boolean) => setDrawerState(drawerOpen)}
      />
      <div className="app-content">{props.children}</div>
      <DrawerComponent
        drawerOpen={drawerState}
        setDrawerState={(drawerOpen: boolean) => setDrawerState(drawerOpen)}
      />
    </div>
  );
};

export default AppPage;
