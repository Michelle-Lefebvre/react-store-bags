import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/themeStyles";

import AppBar from "./components/appbar/AppBar";
import Banner from "./components/banner/Banner";
import Promotions from "./components/promotions/Promotions";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import AppDrawer from "./components/drawer/Drawer";
import { UIProvider } from "./context/uiContext";
import SearchBox from "./components/search/Search";
import Cart from "./components/cart/Cart";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" style={{ marginBottom: "56px" }}>
        <UIProvider>
          <AppBar />
          <Banner />
          <Promotions />
          <Box display={"flex"} justifyContent={"center"} sx={{ p: 4 }}>
            <Typography variant="h4">Our Products</Typography>
          </Box>
          <Products />
          <Footer />
          <AppDrawer />
          <Cart />
          <SearchBox />
        </UIProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
