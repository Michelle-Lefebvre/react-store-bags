import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;
export default function AppDrawer() {
  return (
    <Drawer open={true}>
      <List>
        <ListItemButton>
          <ListItemText>Home</ListItemText>
        </ListItemButton>
        <MiddleDivider />
        <ListItemButton>
          <ListItemText>Categories</ListItemText>
        </ListItemButton>
        <MiddleDivider />
        <ListItemButton>
          <ListItemText>Products</ListItemText>
        </ListItemButton>
        <MiddleDivider />
        <ListItemButton>
          <ListItemText>About Us</ListItemText>
        </ListItemButton>
        <MiddleDivider />
        <ListItemButton>
          <ListItemText>Contacts</ListItemText>
        </ListItemButton>
        <MiddleDivider />
      </List>
    </Drawer>
  );
}
