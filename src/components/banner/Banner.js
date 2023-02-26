import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <h1>BANNER</h1>
    </>
  );
}
