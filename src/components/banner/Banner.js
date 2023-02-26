import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/bannerStyles";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescription variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
