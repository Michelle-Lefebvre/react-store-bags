import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Colors } from "../../styles/themeStyles";
import CloseIcon from "@mui/icons-material/Close";

function SlideTransistion(props) {
  return <Slide direction="down" {...props} />;
}

export default function ProductDetail({ open, onClose, product }) {
  return (
    <Dialog
      TransitionComponent={SlideTransistion}
      variant="permanat"
      open={open}
      fullScreen
    >
      <DialogTitle sx={{ background: Colors.secondary }}>
        <Box display={"flex"} alignItems="center" justifyContent="center">
          Name of Product
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent></DialogContent>
    </Dialog>
  );
}
