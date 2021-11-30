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

interface DrawerComponentProps {
  drawerOpen: boolean;
  setDrawerState: (drawerOpen: boolean) => void;
}

const DrawerComponent: React.FunctionComponent<DrawerComponentProps> = (
  props
) => {
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
            <ListItemButton>
              <ListItemIcon>
                <AddBoxOutlined />
              </ListItemIcon>
              <ListItemText primary="Add New Entry" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArticleOutlined />
              </ListItemIcon>
              <ListItemText primary="Consolidated Report" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
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
