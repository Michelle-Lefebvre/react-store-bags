import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "./themeStyles";

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));

// custom text field
export const SubscribeTextField = styled(TextField)(() => ({
  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },

  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
}));
