import { Facebook, Instagram, Send, Twitter } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FooterTitle, SubscribeTextField } from "../../styles/footerStyles";
import { Colors } from "../../styles/themeStyles";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            <Facebook sx={{ mr: 1 }} />
            <Twitter sx={{ mr: 1 }} />
            <Instagram sx={{ mr: 1 }} />
          </Box>
        </Grid>

        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>

        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                WishList
              </Typography>
            </ListItemText>
          </List>
        </Grid>

        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <Stack>
            <SubscribeTextField
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<Send sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
