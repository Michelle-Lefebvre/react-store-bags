import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  AppbarContainer,
  AppbarHeader,
  NavList,
} from "../../styles/appbarStyles";
import SearchIcon from "@mui/icons-material/Search";
import AppbarActions from "./AppbarActions";

export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>My Bags</AppbarHeader>
      <NavList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </NavList>
      <AppbarActions matches={matches} />
    </AppbarContainer>
  );
}