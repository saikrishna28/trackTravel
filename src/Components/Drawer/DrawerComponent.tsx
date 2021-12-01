import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  AddBoxOutlined,
  ArticleOutlined,
  DirectionsCarFilledOutlined,
} from "@mui/icons-material";
import * as React from "react";
import { useHistory } from "react-router-dom";

interface DrawerComponentProps {
  drawerOpen: boolean;
  setDrawerState: (drawerOpen: boolean) => void;
}

const DrawerComponent: React.FunctionComponent<DrawerComponentProps> = (
  props
) => {
  let history = useHistory();
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      props.setDrawerState(false);
    };
  const openScreen = (screen: string) => {
    if (screen === "addEntry") {
      history.push("/addEntry");
    } else if (screen === "vehicleDetails") {
      history.push("/vehicleDetails");
    } else if (screen === "consolidatedReport") {
      history.push("/consolidatedReport");
    }
  };
  return (
    <Drawer anchor="left" open={props.drawerOpen} onClose={toggleDrawer(false)}>
      <Toolbar />
      <Divider />
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                openScreen("addEntry");
              }}
            >
              <ListItemIcon>
                <AddBoxOutlined />
              </ListItemIcon>
              <ListItemText primary="Add New Entry" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                openScreen("consolidatedReport");
              }}
            >
              <ListItemIcon>
                <ArticleOutlined />
              </ListItemIcon>
              <ListItemText primary="Consolidated Report" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                openScreen("vehicleDetails");
              }}
            >
              <ListItemIcon>
                <DirectionsCarFilledOutlined />
              </ListItemIcon>
              <ListItemText primary="Vehicles" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
