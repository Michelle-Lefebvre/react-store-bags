import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/themeStyles";

import AppBar from "./components/appbar/AppBar";
import Banner from "./components/banner/Banner";
import Promotions from "./components/promotions/Promotions";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <AppBar />
        <Banner />
        <Promotions />
        {/* 
        title
        Products
        footer
      */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
