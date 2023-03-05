import { Drawer, useMediaQuery, Box, Avatar } from "@mui/material";
import { useUIContext } from "../../context/uiContext";
import { Colors } from "../../styles/themeStyles";
import { useTheme } from "@mui/material/styles";
import { products } from "../../data/productsMockData";

export default function Cart() {
  const { cart, setShowCart, showCart } = useUIContext();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const cartContent = cart.map((item) => {
    <Box key={item.id}>
      <Box
        display="flex"
        sx={{ pt: 2, pb: 2 }}
        alignItems="start"
        justifyContent={"space-between"}
      >
        <Avatar src={item.image} sx={{ width: 96, height: 96 }} />
      </Box>
    </Box>;
  });
  return (
    <Drawer
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx: { width: 500, background: Colors.light_gray, borderRadius: 0 },
      }}
    >
      <h1>My Cart</h1>
      {cartContent}
    </Drawer>
  );
}
