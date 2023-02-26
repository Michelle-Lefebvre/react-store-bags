import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarMobile from "./AppbarMobile";
import AppbarDesktop from "./AppbarDeskTop";

export default function AppBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} />
      )}
    </>
  );
}
