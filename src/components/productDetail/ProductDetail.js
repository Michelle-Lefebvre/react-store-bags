import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Colors } from "../../styles/themeStyles";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import { Product, ProductImage } from "../../styles/productsStyles";

function SlideTransistion(props) {
  return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
}));

export default function ProductDetail({ open, onClose, product }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      TransitionComponent={SlideTransistion}
      variant="permanat"
      open={open}
      fullScreen
    >
      <DialogTitle sx={{ background: Colors.secondary }}>
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent="space-between"
        >
          {product.name}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper flexDirection={matches ? "column" : "row"}>
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.image} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant="subtitle1">SKU 123</Typography>
            <Typography variant="subtitle1">
              Availability: 5 in stock
            </Typography>
            <Typography variant="h4" sx={{ lineHeight: 2 }}>
              {product.name}
            </Typography>
            <Typography variant="body">{product.description}</Typography>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}
