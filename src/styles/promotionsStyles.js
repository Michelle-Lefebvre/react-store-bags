import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { Colors } from "./themeStyles";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  padding: "0px 0px",
  background: Colors.secondary,
  [theme.breakpoints.up("md")]: {
    padding: "40px 0px",
  },
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  color: Colors.primary,
  fontFamily: '"Montez", "cursive"',
  textAlign: "center",
  fontSize: "2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));
