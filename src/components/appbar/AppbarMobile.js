import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbarStyles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppbarActions from "./AppbarActions";

export default function AppbarMobile({ matches }) {
  return (
    <AppbarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        My Bags
      </AppbarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <AppbarActions matches={matches} />
    </AppbarContainer>
  );
}
