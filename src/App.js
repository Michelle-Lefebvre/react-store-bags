import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/themeStyles";

import AppBar from "./components/appbar/AppBar";
import Banner from "./components/banner/Banner";
import Promotions from "./components/promotions/Promotions";
import Products from "./components/products/Products";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" style={{ marginBottom: "56px" }}>
        <AppBar />
        <Banner />
        <Promotions />
        <Products />
        {/* 
        title
        footer
        searchbox
        appdrawer
      */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
