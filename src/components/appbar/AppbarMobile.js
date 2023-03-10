import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbarStyles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppbarActions from "./AppbarActions";
import { useUIContext } from "../../context/uiContext";

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        My Bags
      </AppbarHeader>
      <IconButton>
        <SearchIcon onClick={() => setShowSearchBox(true)} />
      </IconButton>
      <AppbarActions matches={matches} />
    </AppbarContainer>
  );
}
