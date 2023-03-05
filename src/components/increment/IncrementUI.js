import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/themeStyles";
import { clamp } from "./IncrementClamp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

export default function IncrementDecrement() {
  const clampV = clamp(1, 10);
  const [value, setValue] = useState(0);
  return (
    <Box display="flex">
      <IconButton
        sx={{ borderRadius: 0, background: `${Colors.secondary}` }}
        onClick={() => setValue(clampV(value - 1))}
      >
        <RemoveIcon />
      </IconButton>
      <Typography
        variant="h6"
        sx={{
          border: `1px solid ${Colors.secondary}`,
          p: 2,
        }}
      >
        {value}
      </Typography>
      <IconButton
        sx={{ borderRadius: 0, background: `${Colors.secondary}` }}
        onClick={() => setValue(clampV(value + 1))}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
}
